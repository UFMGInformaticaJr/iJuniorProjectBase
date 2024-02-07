import { createContext, useContext, useState, useEffect } from "react";
import { api } from "../../api";

export type UserRole = "admin" | "worker" | "commonUser" | "premiumUser";

export interface LoginData {
  email: string;
  password: string;
}
export interface UserData {
  name: string;
  email: string;
  password: string;
  state: string;
  neighborhood: string;
  street: string;
  addressNumber: string;
  cpf_cnpj: string;
  role: UserRole;
  plan: string;
  cep: string;
  receiveNewsletter: string;
}

export interface UserLogged {
  name: string;
  role: string;
}

interface AuthContextState {
  user: UserData;
  isAuthenticated: boolean;
  isAdmin: boolean;
  userL: UserLogged;
  signIn({ email, password }: LoginData): Promise<void>;
  userLogged(): Promise<UserData | false>;
}

const AuthContext = createContext<AuthContextState>({} as AuthContextState);

type Props = {
  children: React.ReactNode;
};

const AuthProvider: React.FC<Props> = ({ children }) => {
  const [user, setUser] = useState<UserData>({} as UserData);
  const [userL, setUserL] = useState<UserLogged>({} as UserLogged);
  const [isAuthenticated, setIsAuthenticated] = useState(false as boolean);
  const [isAdmin, setIsAdmin] = useState(false as boolean);

  useEffect(() => {
    // Check if the user is already authenticated and fetch user data
    async function checkUserAuthentication() {
      try {
        const res = await api.post("/users/myAccount");
        const maybeUser: any = res.data;
        setUser(maybeUser);
        setIsAuthenticated(true);
      } catch (err) {
        setUser({} as UserData);
        setIsAuthenticated(false);
      }
    }

    checkUserAuthentication();
  }, []);

  const signIn = async ({ email, password }: LoginData) => {
    await api.post("/users/login", { email, password });
    setIsAuthenticated(true);
    localStorage.setItem("isAuthenticated", "true");
  };

  const userLogged = async function (): Promise<UserData | false> {
    try {
      const res = await api.post("/users/myAccount");
      const maybeUser: any = res.data;
      if (maybeUser.role === "admin") {
        setIsAdmin(true);
      }
      setUser(maybeUser);
      setUserL({ name: maybeUser.name, role: maybeUser.role });

      return maybeUser as UserData;
    } catch (err: any) {
      setUserL({} as UserLogged);
      return false;
    }
  };

  const values: AuthContextState = {
    user,
    isAuthenticated,
    userL,
    signIn,
    userLogged,
    isAdmin,
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

function useAuth(): AuthContextState {
  const context = useContext(AuthContext);
  return context;
}
export { AuthProvider, useAuth };
