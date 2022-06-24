import { Creador } from "../data/Creador";
import { Estudiante } from "../data/Estudiante";
import { Usuario } from "../data/Usuario";
import { Evento} from "../data/Evento";
import { Administrador as admin, Administrador } from "../data/Administrador";
import { parse } from "path";
import { LinkedRef } from "../structures/LinkedRef";
import { QueueRef } from "../structures/QueueRef";
import { Notificacion } from "../data/Notificacion";

export class CargarDatos {
    static admin1 : Administrador = new Administrador("01","Administrador principal", "correo@unal.edu.co","ADMINISTRADOR","admin123",true);

    constructor (){
        let admin: Administrador = new Administrador("A01","Administrador","admin","admin@unal.edu.co","admin123",true);

        let user1 : Estudiante = new Estudiante ("E01","Yenifer Mora", "user1", "ymoras@unal.edu.co","Yenifer123","Ingenieria");
        let user2 : Estudiante = new Estudiante ("E02","Laura Mora", "user2", "lmoras@unal.edu.co","Laura123","Artes");
        let user3 : Estudiante = new Estudiante ("E03","Estudiante3", "user3", "lmoras@unal.edu.co","Laura123","Ingenieria de Sistemas");
        let user4 : Estudiante = new Estudiante ("E04","Estudiante4", "user4", "lmoras@unal.edu.co","Laura123","Ingenieria de Sistemas");
        let user5 : Estudiante = new Estudiante ("E05","Estudiante5", "user5", "lmoras@unal.edu.co","Laura123","Ingenieria de Sistemas");
        let user6 : Estudiante = new Estudiante ("E06","Estudiante6", "user6", "lmoras@unal.edu.co","Laura123","Ingenieria de Sistemas");
        let user7 : Estudiante = new Estudiante ("E07","Estudiante7", "user7", "lmoras@unal.edu.co","Laura123","Ingenieria de Sistemas");
        let user8 : Estudiante = new Estudiante ("E08","Estudiante8", "user8", "lmoras@unal.edu.co","Laura123","Ingenieria de Sistemas");
        
        let userCrea1 : Creador = new Creador("C01","creador prog. Sistemas","userCrea1", "sistemas@unal.edu.co","creador123",true,"Sistemas");
        let userCrea2 : Creador = new Creador("C02","creador prog. Sistemas","userCrea1", "sistemas@unal.edu.co","creador123",true,"Sistemas");
        let userCrea3 : Creador = new Creador("C03","creador prog. Sistemas","userCrea1", "sistemas@unal.edu.co","creador123",true,"Sistemas");
        let userCrea4 : Creador = new Creador("C04","creador prog. Sistemas","userCrea1", "sistemas@unal.edu.co","creador123",true,"Sistemas");
        
        let evento1 : Evento = new Evento("Ev01","Evento 1",new Date("2017-4-26"), "08:00","16:00","Unal","descripcion",userCrea1.getId(),"Ingenieria",user1.getId(),false, 3,["et1","et2","et3","et4","et5"]);
        let evento2 : Evento = new Evento("Ev02","Evento 2",new Date("2018-5-26"), "08:00","16:00","Unal","descripcion",userCrea1.getId(),"Artes",user1.getId(),false, 3,["et1","et2","et3","et4","et5"]);
        let evento3 : Evento = new Evento("Ev03","Evento 3",new Date("2019-6-26"), "08:00","16:00","Unal","descripcion",userCrea1.getId(),"Ingenieria",user1.getId(),false, 3,["et1","et2","et3","et4","et5"]);
        let evento4 : Evento = new Evento("Ev04","Evento 4",new Date("2020-7-26"), "08:00","16:00","Unal","descripcion",userCrea1.getId(),"Artes",user1.getId(),false, 3,["et1","et2","et3","et4","et5"]);
        let evento5 : Evento = new Evento("Ev05","Evento 5",new Date("2021-8-26"), "08:00","16:00","Unal","descripcion",userCrea1.getId(),"Ingenieria",user1.getId(),false, 3,["et1","et2","et3","et4","et5"]);
        let evento6 : Evento = new Evento("Ev06","Evento 6",new Date("2022-9-26"), "08:00","16:00","Unal","descripcion",userCrea1.getId(),"Ingenieria",user1.getId(),false, 3,["et1","et2","et3","et4","et5"]);
        let evento7 : Evento = new Evento("Ev07","Evento 7",new Date("2023-10-26"), "08:00","16:00","Unal","descripcion",userCrea1.getId(),"Ingenieria",user1.getId(),false, 3,["et1","et2","et3","et4","et5"]);
    
        let eventString: string = evento1.toJSON();
        let eventoPrueba : Evento = Evento.fromJSON(eventString);
        /*console.log(eventString);
        console.log(eventoPrueba.toString());
        console.log(eventoPrueba.getFecha().getFullYear());
        console.log(eventoPrueba.getFecha().getMonth());
        console.log(eventoPrueba.getFecha().getDate());*/


        let auxEventProp : Array<Evento> = new Array<Evento>();
        auxEventProp.push(evento1);
        auxEventProp.push(evento2);
        auxEventProp.push(evento3);
        userCrea1.setPropuestasEventos(auxEventProp);
        userCrea2.setPropuestasEventos(auxEventProp);
        userCrea3.setPropuestasEventos(auxEventProp);
        userCrea4.setPropuestasEventos(auxEventProp);

        let auxEventCrea : Array<Evento> = new Array<Evento>();
        auxEventCrea.unshift(evento4);
        auxEventCrea.unshift(evento5);
        auxEventCrea.unshift(evento6);
        auxEventCrea.unshift(evento7);
        userCrea1.setEventosCreados(auxEventCrea);
        //userCrea2.setEventosCreados(auxEventCrea);
        //userCrea3.setEventosCreados(auxEventCrea);
        //userCrea4.setEventosCreados(auxEventCrea);

        let listaAux : Array<Evento> = user1.getEventosGuardados();
        listaAux.push(evento1);
        listaAux.push(evento2);
        listaAux.push(evento3);
        user1.setEventosGuardados(listaAux);
        user2.setEventosGuardados(listaAux);
        user3.setEventosGuardados(listaAux);
        user5.setEventosGuardados(listaAux);
        user6.setEventosGuardados(listaAux);
        user7.setEventosGuardados(listaAux);
        user8.setEventosGuardados(listaAux);

        let listaAux2 : Array<Evento> = user1.getEventosPropuestos();
        listaAux2.push(evento2);
        listaAux2.push(evento1);
        user1.setEventosPropuestos(listaAux2);
        user2.setEventosPropuestos(listaAux2);
        user3.setEventosPropuestos(listaAux2);
        user4.setEventosPropuestos(listaAux2);
        user5.setEventosPropuestos(listaAux2);
        user6.setEventosPropuestos(listaAux2);
        user7.setEventosPropuestos(listaAux2);
        user8.setEventosPropuestos(listaAux2);


        let cola: Array<Notificacion> = user1.getNotificacionesPendientes();
        let not: Notificacion = new Notificacion("01",new Date(1234),"descripcion de notificaicon 1")
        let not2: Notificacion = new Notificacion("02",new Date(1234),"descripcion de notificaicon 2")
        let not3: Notificacion = new Notificacion("03",new Date(1234),"descripcion de notificaicon 3")
        let not4: Notificacion = new Notificacion("04",new Date(1234),"descripcion de notificaicon 4")
        cola.push(not);
        cola.push(not4);
        cola.push(not2);
        cola.push(not3);

        user1.setNotificacionesPendientes(cola);
        user2.setNotificacionesPendientes(cola);
        user3.setNotificacionesPendientes(cola);
        user4.setNotificacionesPendientes(cola);
        user5.setNotificacionesPendientes(cola);
        user6.setNotificacionesPendientes(cola);
        user7.setNotificacionesPendientes(cola);
        user8.setNotificacionesPendientes(cola);

        admin.creadoresVerificar.push(userCrea1);
        admin.creadoresVerificar.push(userCrea2);
        admin.creadoresVerificar.push(userCrea3);

        admin.creadoresRegistrados.unshift(userCrea1);
        admin.creadoresRegistrados.unshift(userCrea4);
        admin.creadoresRegistrados.unshift(userCrea3);
        admin.creadoresRegistrados.unshift(userCrea2);

        admin.estudiantesRegistrados.unshift(user1);
        admin.estudiantesRegistrados.unshift(user2);
        admin.estudiantesRegistrados.unshift(user3);
        admin.estudiantesRegistrados.unshift(user4);
        admin.estudiantesRegistrados.unshift(user5);
        admin.estudiantesRegistrados.unshift(user6);
        admin.estudiantesRegistrados.unshift(user7);
    
        console.log("Usuario 1");
        console.log(user1.getEventosSugeridos(admin.getListaEventos()));
        console.log("Usuario 2");
        console.log(user2.getEventosSugeridos(admin.getListaEventos()));
        console.log();

    let datos : string = admin.toJSON()

    }

}
  
var prueba : CargarDatos = new CargarDatos();

export default CargarDatos;