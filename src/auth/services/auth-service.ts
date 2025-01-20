import { Axios } from "@/core/config";
import { SignInDto, SignInResponseDto, SignUpDto, VerifyOTPDto } from "..";
import { setCookie } from "cookies-next";

export class AuthService {
  async signIn(data: SignInDto): Promise<SignInResponseDto> {
    const response =(await Axios.post<SignInResponseDto>("/auth/login", data)).data;

    setCookie('auth-token', response.token, { maxAge: 3600 });
    
    return response;
  }

  async signUp(data: SignUpDto): Promise<SignInResponseDto> {
    return (await Axios.post<SignInResponseDto>("/auth/sign-up", data)).data;
  }

  async generateOTP(email: string): Promise<void> {
    await Axios.post<void>("/auth/otp/generate", { email });
  }

  async verifyOTP(data: VerifyOTPDto): Promise<void> {
    await Axios.post<void>("/auth/otp/verify", data);
  }
}