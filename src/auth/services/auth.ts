import { Axios } from "@/config";
import { SignInDto, SignInResponseDto } from "../";

export class AuthService {
  async signIn(data: SignInDto): Promise<SignInResponseDto> {
    return await Axios.post('/auth/login', data);
  }
}