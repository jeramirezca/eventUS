import { createContext, useContext } from "react";
import { LinkedRef } from "../structures/LinkedRef";
import { Evento } from '../data/Evento';

export type GlobalList = {
  evento: Evento
  setEvento:(c: Evento) => void
}
export const EventoContext = createContext<GlobalList>({
    evento: new Evento("","",new Date(),"","","","","","","",false,), // set a default value
    setEvento: () => {},
})

export const useEvento = () => useContext(EventoContext)