import { createContext, useContext } from "react";
import { LinkedRef } from "../structures/LinkedRef";
import { Evento } from '../data/Evento';

export type GlobalList = {
  listaEventos: LinkedRef<Evento>
  setListaEventos:(c: LinkedRef<Evento>) => void
}
export const ListEventsContext = createContext<GlobalList>({
    listaEventos: new LinkedRef, // set a default value
    setListaEventos: () => {},
})

export const useListEvents = () => useContext(ListEventsContext)