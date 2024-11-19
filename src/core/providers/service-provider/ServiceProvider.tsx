import { AuthService } from "@/auth";
import { createContext } from "react";

interface ServiceContextProps {
  authService: AuthService;
}

const services: ServiceContextProps = {
  authService: new AuthService(),
};

const ServiceContext = createContext<ServiceContextProps>(services);

interface ServiceProviderProps {
  children: React.ReactNode;
}

const ServiceProvider = ({ children }: ServiceProviderProps) => {
  return (
    <ServiceContext.Provider value={services}>
      {children}
    </ServiceContext.Provider>
  );
};

export { ServiceContext, ServiceProvider };
