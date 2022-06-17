import { createContext, useContext } from "react";
import { LinkedRef } from "../structures/LinkedRef";
import { Evento } from '../data/Evento';
import { AVL } from "../structures/AVL";

export type GlobalList = {
  arbol:AVL<number>
  setArbol:(c: AVL<number>) => void
}
export const ArbolContext = createContext<GlobalList>({
    arbol: new AVL<number>, // set a default value
    setArbol: () => {},
})

export const useArbol = () => useContext(ArbolContext)