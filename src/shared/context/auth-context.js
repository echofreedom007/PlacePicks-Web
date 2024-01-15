import { createContext } from "react";

export const AuthContext = createContext({
  isLoggedIn: false,
  // frontend not dealing with userId
  userId: null,
  login: () => {},
  logout: () => {},
});
