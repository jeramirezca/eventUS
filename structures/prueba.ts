import {AVL} from "./AVL"
import { Evento} from "../data/Evento";
import { Creador } from "../data/Creador";
import { Estudiante } from '../data/Estudiante';
export const prueba = () =>{

    let arbol= new AVL<number>();
    let listaEventos= new Array<Evento>();
    let creador_prueba = new Creador("29292","juan carlos","juanda","ajaja@gmail.com","12345",true,"ingenieria");
    let mar = new Estudiante("1234","marx","marx","marx@hotmail","marx","holi")
    let ev_prueba = new Evento("231231","evento de prueba",new Date(2022),new Date(2022),"lugar","este es un evento de prueba, descripcion xd",creador_prueba.getId(),"ingenieria",mar.getId());
    let ev_prueba2 = new Evento("234331","evento de prueba",new Date(2022),new Date(2022),"lugar","este es un evento de prueba, descripcion xd",creador_prueba.getId(),"ingenieria",mar.getId());
    let ev_prueba3 = new Evento("43212","evento de prueba",new Date(2022),new Date(2022),"lugar","este es un evento de prueba, descripcion xd",creador_prueba.getId(),"ingenieria",mar.getId());
    let ev_prueba4 = new Evento("24341","evento de prueba",new Date(2022),new Date(2022),"lugar","este es un evento de prueba, descripcion xd",creador_prueba.getId(),"ingenieria",mar.getId());
    let ev_prueba5= new Evento("772626","evento de prueba",new Date(2022),new Date(2022),"lugar","este es un evento de prueba, descripcion xd",creador_prueba.getId(),"ingenieria",mar.getId());


    const crear=(E:Evento):void=>{
        listaEventos.push(E);
        arbol.insert(parseInt(E.getId()),listaEventos.indexOf(E));
    }

    crear(ev_prueba)
    crear(ev_prueba2)
    crear(ev_prueba3)
    crear(ev_prueba5)
    crear(ev_prueba4)

    console.log(listaEventos[arbol.search(43212)].toString())
    return listaEventos
}

export const pruebaArbol = () =>{

    let arbol= new AVL<number>();
    let listaEventos= new Array<Evento>();
    let creador_prueba = new Creador("29292","juan carlos","juanda","ajaja@gmail.com","12345",true,"ingenieria");
    let mar = new Estudiante("1234","marx","marx","marx@hotmail","marx","holi")
    let ev_prueba = new Evento("231231","evento de prueba",new Date(2022),new Date(2022),"lugar","este es un evento de prueba, descripcion xd",creador_prueba.getId(),"ingenieria",mar.getId());
    let ev_prueba2 = new Evento("234331","evento de prueba",new Date(2022),new Date(2022),"lugar","este es un evento de prueba, descripcion xd",creador_prueba.getId(),"ingenieria",mar.getId());
    let ev_prueba3 = new Evento("43212","evento de prueba",new Date(2022),new Date(2022),"lugar","este es un evento de prueba, descripcion xd",creador_prueba.getId(),"ingenieria",mar.getId());
    let ev_prueba4 = new Evento("24341","evento de prueba",new Date(2022),new Date(2022),"lugar","este es un evento de prueba, descripcion xd",creador_prueba.getId(),"ingenieria",mar.getId());
    let ev_prueba5= new Evento("772626","evento de prueba",new Date(2022),new Date(2022),"lugar","este es un evento de prueba, descripcion xd",creador_prueba.getId(),"ingenieria",mar.getId());


    const crear=(E:Evento):void=>{
        listaEventos.push(E);
        arbol.insert(parseInt(E.getId()),listaEventos.indexOf(E));
    }

    crear(ev_prueba)
    crear(ev_prueba2)
    crear(ev_prueba3)
    crear(ev_prueba5)
    crear(ev_prueba4)

    console.log(listaEventos[arbol.search(43212)].toString())
    return arbol;
}
