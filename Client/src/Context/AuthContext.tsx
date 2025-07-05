import { createContext, useContext, useState, type ReactNode } from "react";
//user Type
type User = {
  email: string;
  password: string;
};

type newUser = {
  name: string;
  email: string;
  password: string;
};

//Context Type
interface AuthContextType {
  user: User | null;
  newuser: newUser | null;
  login: (userData: User) => void;
  signup: (userData: newUser) => void;
  logout: () => void;
  isAuthenticated: boolean;
}

//create context
const AuthContext = createContext<AuthContextType | undefined>(undefined);

//provider props
interface AuthProviderProps {
  children: ReactNode;
}

//AuthProvider Component
export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const login = (userData: User) => {
    setUser(userData);
  };
  const logout = () => {
    setUser(null);
  };

  const [newuser, setNewUser] = useState<newUser | null>(null);
  const signup = (userData: newUser) => {
    setNewUser(userData);
  };
  const isAuthenticated = !!user;

  return (
    <AuthContext.Provider
      value={{ user, newuser, signup, login, logout, isAuthenticated }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used withing an AuthProvider");
  return context;
};
export default AuthContext;
