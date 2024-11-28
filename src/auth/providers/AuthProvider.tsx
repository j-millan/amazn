"use client";

import { createContext, useState } from "react";
import { SignUpDto } from "../dto/sign-up.dto";

interface AuthContextProps {
  signUpData: SignUpDto | null;
  error: string[];
  setSignUpData: (data: SignUpDto | null) => void;
  setError: (error: string[]) => void;
}

const AuthContext = createContext<AuthContextProps>({
  signUpData: null,
  error: [],
  setSignUpData: () => {},
  setError: () => {},
});

interface AuthProviderProps {
  children: React.ReactNode;
}

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [ error, setError ] = useState<string[]>([]);
  const [ signUpData, setSignUpData ] = useState<SignUpDto | null>(null);

  return (
    <AuthContext.Provider value={{ signUpData, error, setSignUpData, setError }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };