import { Usuario } from "../data/Usuario";
import { LinkedRef } from "./LinkedRef";
import { Administrador } from '../data/Administrador';
import { Estudiante } from '../data/Estudiante';
import { Evento } from '../data/Evento';
import { Creador } from '../data/Creador';

export const pruebasEventos = () =>{
    let mar = new Creador("1234","marx","marx","marx@hotmail","marx",true,"depi");
    let mar2 = new Estudiante("1234","marx2","marx2","marx2@hotmail","marx2","holi")
    let evento1 = new Evento("12" , "evento1",new Date("2017-01-26") , new Date("2017-01-26"),"aquí", "descripcion:string",mar, "arte", mar2, 2, ["x","y"]); 
    let evento2 = new Evento("12" , "evento1",new Date("2017-01-26") , new Date("2017-01-26"),"aquí", "descripcion:string",mar, "arte", mar2, 2, ["x","y"]); 
    let evento3 = new Evento("12" , "evento1",new Date("2017-01-26") , new Date("2017-01-26"),"aquí", "descripcion:string",mar, "arte", mar2, 2, ["x","y"]); 
    let evento4 = new Evento("12" , "evento1",new Date("2017-01-26") , new Date("2017-01-26"),"aquí", "descripcion:string",mar, "arte", mar2, 2, ["x","y"]); 
    let evento5 = new Evento("12" , "evento1",new Date("2017-01-26") , new Date("2017-01-26"),"aquí", "descripcion:string",mar, "arte", mar2, 2, ["x","y"]); 

    let ListaEventos = new LinkedRef<Evento>;
    ListaEventos.addLatest(evento1);
    ListaEventos.addLatest(evento2);
    ListaEventos.addLatest(evento3);
    ListaEventos.addLatest(evento4);
    let ListaEventos2 = new Array();
    ListaEventos2.push(evento1);
    ListaEventos2.push(evento2);
    ListaEventos2.push(evento3);
    ListaEventos2.push(evento4);
    //ListaUsuarios.remove(1);
    return ListaEventos2;
}





