import { setCookie } from "cookies-next";
import { decodeToken, isExpired } from "react-jwt";

import { http } from "@/core";
import { JwtDecodedInterface } from "../interfaces/jwt-decoded.interface";
import { SignInDto, SignInResponseDto } from "../dto/sign-in.dto";
import { SignUpDto } from "../dto/sign-up.dto";
import { VerifyOTPDto } from "../dto/otp.dto";

class AuthService {
  private readonly _basePath = "/auth";

  async signIn(data: SignInDto): Promise<SignInResponseDto> {
    const response = await http.post<SignInResponseDto>(
      `${this._basePath}/login`,
      data
    );

    this._setAuthCookie(response.token);

    return response;
  }

  async signUp(data: SignUpDto): Promise<SignInResponseDto> {
    const response = await http.post<SignInResponseDto>(
      `${this._basePath}/sign-up`,
      data
    );

    this._setAuthCookie(response.token);

    return response;
  }

  async generateOTP(email: string): Promise<void> {
    await http.post<void>(`${this._basePath}/otp/generate`, { email });
  }

  async verifyOTP(data: VerifyOTPDto): Promise<void> {
    await http.post<void>(`${this._basePath}/otp/verify`, data);
  }

  private _setAuthCookie(token: string): void {
    const decodedToken = decodeToken<JwtDecodedInterface>(token);
    const isExpiredToken = isExpired(token);

    if (decodedToken && !isExpiredToken) {
      const { iat, exp } = decodedToken;
      const expTime = exp - iat;

      setCookie("auth-token", token, {
        maxAge: expTime,
        expires: new Date(exp),
      });
    }
  }
}

export const authService = new AuthService();
