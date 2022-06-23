
import { createContext, useContext } from "react";
import { Usuario } from "../data/Usuario";
import { Administrador } from '../data/Administrador';

export type GlobalList = {
  guardar: boolean;
  setGuardar:(c: boolean) => void
}

export const GuardarContext = createContext<GlobalList>({
    guardar: false, // set a default value
    setGuardar: () => {},
})

export const useGuardar = () => useContext(GuardarContext);