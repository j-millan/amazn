import { setCookie } from "cookies-next";
import { decodeToken, isExpired } from "react-jwt";
import { Axios } from "@/core/config";

import { JwtDecodedInterface, SignInDto, SignInResponseDto, SignUpDto, VerifyOTPDto } from "..";

class AuthService {
  async signIn(data: SignInDto): Promise<SignInResponseDto> {
    const response =(await Axios.post<SignInResponseDto>("/auth/login", data)).data;
    this._setAuthCookie(response.token);
    return response;
  }

  async signUp(data: SignUpDto): Promise<SignInResponseDto> {
    const response = (await Axios.post<SignInResponseDto>("/auth/sign-up", data)).data;
    this._setAuthCookie(response.token);
    return response;
  }

  async generateOTP(email: string): Promise<void> {
    await Axios.post<void>("/auth/otp/generate", { email });
  }

  async verifyOTP(data: VerifyOTPDto): Promise<void> {
    await Axios.post<void>("/auth/otp/verify", data);
  }

  private _setAuthCookie(token: string): void {
    const decodedToken = decodeToken<JwtDecodedInterface>(token);
    const isExpiredToken = isExpired(token); 

    if (decodedToken && !isExpiredToken) {
      const { iat, exp } = decodedToken;
      const expTime = exp - iat;
      
      setCookie("auth-token", token, { maxAge: expTime, expires: new Date(exp) });
    }
  }
}

const authService = new AuthService();
export default authService;