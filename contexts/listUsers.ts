import { createContext, useContext } from "react";
import { LinkedRef } from "../structures/LinkedRef";
import { Usuario } from '../data/Usuario';

export type GlobalList = {
  listaUsuarios: Array<Usuario>
  setListaUsuarios:(c: Array<Usuario>) => void
}
export const ListUsersContext = createContext<GlobalList>({
    listaUsuarios: new Array<Usuario>, // set a default value
    setListaUsuarios: () => {},
})

export const useListUsers = () => useContext(ListUsersContext)