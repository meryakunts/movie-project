import { createContext } from "react";

export const userLogin = {
  name: "",
  email: "",
  isLogged: false,
  signOut: () => {},
};

export const AuthContext = createContext(userLogin);

// export const AuthContext = createContext({
//   isLoggedIn: false,
//   token: null,
//   //login: () => {},
//   //logout: () => {},
// });
