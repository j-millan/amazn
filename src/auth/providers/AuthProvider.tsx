"use client";

import { createContext, useState } from "react";

interface AuthContextProps {
  error: string[];
  setError: (error: string[]) => void;
}

const AuthContext = createContext<AuthContextProps>({
  error: [],
  setError: () => {},
});

interface AuthProviderProps {
  children: React.ReactNode;
}

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [ error, setError ] = useState<string[]>([]);

  return (
    <AuthContext.Provider value={{ error, setError }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };