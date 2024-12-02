import { Axios } from "@/core/config";
import { SignInDto, SignInResponseDto, SignUpDto, VerifyOTPDto } from "..";

export class AuthService {
  async signIn(data: SignInDto): Promise<SignInResponseDto> {
    return await Axios.post("/auth/login", data);
  }

  async signUp(data: SignUpDto): Promise<SignInResponseDto> {
    return await Axios.post("/auth/sign-up", data);
  }

  async generateOTP(email: string): Promise<void> {
    return await Axios.post("/auth/otp/generate", { email });
  }

  async verifyOTP(data: VerifyOTPDto): Promise<void> {
    return await Axios.post("/auth/otp/verify", data);
  }
}