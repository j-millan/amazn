import { UserResponseDto } from "@/core";

export interface SignInDto {
  email: string;
  password: string;
}

export interface SignInResponseDto {
  token: string;
  user: UserResponseDto;
}