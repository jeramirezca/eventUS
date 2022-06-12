import { Usuario } from "../data/Usuario";
import { LinkedRef } from "./LinkedRef";
import { Administrador } from '../data/Administrador';
import { Estudiante } from '../data/Estudiante';
import { Evento } from '../data/Evento';
import { Creador } from '../data/Creador';
import { AVL } from "./AVL";

export const pruebasEventos = () =>{
    let arbol= new AVL<number>();
    let listaEventos= new Array<Evento>();
    let creador_prueba = new Creador("29292","juan carlos","juanda","ajaja@gmail.com","12345",true,"ingenieria");
    let mar = new Estudiante("1234","marx","marx","marx@hotmail","marx","holi")
    let ev_prueba = new Evento("231231","evento1",new Date(2022),new Date(2022),"unal","este es un evento de prueba, descripcion xd",creador_prueba,"ingenieria",mar,2,["arte","ejercicio","gg"]);
    let ev_prueba2 = new Evento("234331","evento2",new Date(2022),new Date(2022),"lugar2","este es un evento de prueba, descripcion xd",creador_prueba,"humanas",mar);
    let ev_prueba3 = new Evento("43212","evento3",new Date(2022),new Date(2022),"playa","este es un evento de prueba, descripcion xd",creador_prueba,"arte",mar);
    let ev_prueba4 = new Evento("24341","evento4",new Date(2022),new Date(2022),"cocina","este es un evento de prueba, descripcion xd",creador_prueba,"ingenieria",mar);
    let ev_prueba5= new Evento("772626","evento5",new Date(2022),new Date(2022),"lugar","este es un evento de prueba, descripcion xd",creador_prueba,"arte",mar);
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
    return listaEventos;
}

export const pruebasArbol = () =>{
    let arbol= new AVL<number>();
    let listaEventos= new Array<Evento>();
    let creador_prueba = new Creador("29292","juan carlos","juanda","ajaja@gmail.com","12345",true,"ingenieria");
    let mar = new Estudiante("1234","marx","marx","marx@hotmail","marx","holi")
    let ev_prueba = new Evento("231231","evento1",new Date(2022),new Date(2022),"unal","este es un evento de prueba, descripcion xd",creador_prueba,"ingenieria",mar,2,["arte"]);
    let ev_prueba2 = new Evento("234331","evento2",new Date(2022),new Date(2022),"lugar2","este es un evento de prueba, descripcion xd",creador_prueba,"humanas",mar);
    let ev_prueba3 = new Evento("43212","evento3",new Date(2022),new Date(2022),"playa","este es un evento de prueba, descripcion xd",creador_prueba,"arte",mar);
    let ev_prueba4 = new Evento("24341","evento4",new Date(2022),new Date(2022),"cocina","este es un evento de prueba, descripcion xd",creador_prueba,"ingenieria",mar);
    let ev_prueba5= new Evento("772626","evento5",new Date(2022),new Date(2022),"lugar","este es un evento de prueba, descripcion xd",creador_prueba,"arte",mar);


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






