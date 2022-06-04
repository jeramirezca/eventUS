import { createContext, useContext } from "react";
import { Usuario } from "../data/Usuario";

export type GlobalList = {
  user: Usuario
  setUser:(c: Usuario) => void
}
export const UserContext = createContext<GlobalList>({
    user: new Usuario("","","","","",false), // set a default value
    setUser: () => {},
})

export const useUser = () => useContext(UserContext)