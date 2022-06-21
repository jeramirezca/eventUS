
import { createContext, useContext } from "react";
import { Usuario } from "../data/Usuario";
import { Administrador } from '../data/Administrador';

export type GlobalList = {
  admin: Administrador
  setAdmin:(c: Administrador) => void
}

export const AdminContext = createContext<GlobalList>({
    admin: new Administrador("","","","","",false), // set a default value
    setAdmin: () => {},
})

export const useAdmin = () => useContext(AdminContext);