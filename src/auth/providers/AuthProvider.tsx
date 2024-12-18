"use client";

import { createContext, useState } from "react";
import { SignUpDto } from "../dto/sign-up.dto";

interface AuthContextProps {
  success: boolean;
  signUpData: SignUpDto | null;
  error: string[];
  setSignUpData: (data: SignUpDto | null) => void;
  setError: (error: string[]) => void;
}

const AuthContext = createContext<AuthContextProps>({
  success: false,
  signUpData: null,
  error: [],
  setSignUpData: () => {},
  setError: () => {},
});

interface AuthProviderProps {
  children: React.ReactNode;
}

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [error, setError] = useState<string[]>([]);
  const [signUpData, setSignUpData] = useState<SignUpDto | null>(null);
  const success = false;

  return (
    <AuthContext.Provider
      value={{ success, signUpData, error, setSignUpData, setError }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
