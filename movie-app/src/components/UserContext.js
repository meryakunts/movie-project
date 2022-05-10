import { createContext } from "react";

export const userLogin = {
  name: "",
  email: "",
  isLogged: false,
  signOut: () => {},
};

export const AuthContext = createContext(userLogin);
