import { createContext, useContext } from "react";
import { LinkedRef } from "../structures/LinkedRef";
import { Usuario } from '../data/Usuario';

export type GlobalList = {
  listaUsuarios: LinkedRef<Usuario>
  setListaUsuarios:(c: LinkedRef<Usuario>) => void
}
export const ListUsersContext = createContext<GlobalList>({
    listaUsuarios: new LinkedRef, // set a default value
    setListaUsuarios: () => {},
})

export const useListUsers = () => useContext(ListUsersContext)