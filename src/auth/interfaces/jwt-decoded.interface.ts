export interface JwtDecodedInterface {
  sub: string;
  email: string;
  aud: string;
  exp: number;
  iat: number;
}