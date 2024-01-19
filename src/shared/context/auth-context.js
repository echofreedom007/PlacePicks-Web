import { createContext } from "react";

export const AuthContext = createContext({
  isLoggedIn: false,
  // frontend not dealing with userId
  userId: null,
  token: null,
  login: () => {},
  logout: () => {},
});
