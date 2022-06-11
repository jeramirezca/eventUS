import { createContext, useContext } from "react";
import { LinkedRef } from "../structures/LinkedRef";
import { Evento } from '../data/Evento';

export type GlobalList = {
  listaEventos:Array<Evento>
  setListaEventos:(c: Array<Evento>) => void
}
export const ListEventsContext = createContext<GlobalList>({
    listaEventos: new Array(), // set a default value
    setListaEventos: () => {},
})

export const useListEvents = () => useContext(ListEventsContext)