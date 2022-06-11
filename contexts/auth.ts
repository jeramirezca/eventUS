import { createContext, useContext } from "react";

export type GlobalList = {
  auth: boolean
  setAuth:(c: boolean) => void
}
export const AuthContext = createContext<GlobalList>({
    auth: false, // set a default value
    setAuth: () => {},
})

export const useAuth = () => useContext(AuthContext)