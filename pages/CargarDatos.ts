import { Creador } from "../data/Creador";
import { Estudiante } from "../data/Estudiante";
import { Usuario } from "../data/Usuario";
import { Evento} from "../data/Evento";
import { Administrador } from "../data/Administrador";
import { parse } from "path";
import { LinkedRef } from "../structures/LinkedRef";
import { QueueRef } from "../structures/QueueRef";
import { Notificacion } from "../data/Notificacion";

export class CargarDatos {
    static admin1 : Administrador = new Administrador("01","Administrador principal", "correo@unal.edu.co","ADMINISTRADOR","admin123",true);

    constructor (){
        let admin: Administrador = new Administrador("A01","Administrador","admin","admin@unal.edu.co","admin123",true);

        let user1 : Estudiante = new Estudiante ("E01","Yenifer Mora","ymoras@unal.edu.co","ESTUDIANTE","Yenifer123","Ingenieria de Sistemas");
        let user2 : Estudiante = new Estudiante ("E02","Laura Mora","lmoras@unal.edu.co","ESTUDIANTE","Laura123","Ingenieria de Sistemas");
        let user3 : Estudiante = new Estudiante ("E03","Estudiante3","lmoras@unal.edu.co","ESTUDIANTE","Laura123","Ingenieria de Sistemas");
        let user4 : Estudiante = new Estudiante ("E04","Estudiante4","lmoras@unal.edu.co","ESTUDIANTE","Laura123","Ingenieria de Sistemas");
        let user5 : Estudiante = new Estudiante ("E05","Estudiante5","lmoras@unal.edu.co","ESTUDIANTE","Laura123","Ingenieria de Sistemas");
        let user6 : Estudiante = new Estudiante ("E06","Estudiante6","lmoras@unal.edu.co","ESTUDIANTE","Laura123","Ingenieria de Sistemas");
        let user7 : Estudiante = new Estudiante ("E07","Estudiante7","lmoras@unal.edu.co","ESTUDIANTE","Laura123","Ingenieria de Sistemas");
        let user8 : Estudiante = new Estudiante ("E08","Estudiante8","lmoras@unal.edu.co","ESTUDIANTE","Laura123","Ingenieria de Sistemas");
        
        let userCrea1 : Creador = new Creador("C01","creador prog. Sistemas","sistemas@unal.edu.co","CREADOR","creador123",true,"Sistemas");
        let userCrea2 : Creador = new Creador("C02","creador prog. Sistemas","sistemas@unal.edu.co","CREADOR","creador123",true,"Sistemas");
        let userCrea3 : Creador = new Creador("C03","creador prog. Sistemas","sistemas@unal.edu.co","CREADOR","creador123",true,"Sistemas");
        let userCrea4 : Creador = new Creador("C04","creador prog. Sistemas","sistemas@unal.edu.co","CREADOR","creador123",true,"Sistemas");
        
        let evento1 : Evento = new Evento("Ev01","Evento 1",new Date("2017-01-26"),new Date("2017-01-26"),"Unal","descripcion",userCrea1.getId(),"Ingenieria",user1.getId(),3,["et1","et2","et3","et4","et5"]);
        let evento2 : Evento = new Evento("Ev02","Evento 2",new Date("2018-01-26"),new Date("2017-01-26"),"Unal","descripcion",userCrea1.getId(),"Ingenieria",user1.getId(),3,["et1","et2","et3","et4","et5"]);
        let evento3 : Evento = new Evento("Ev03","Evento 3",new Date("2019-01-26"),new Date("2017-01-26"),"Unal","descripcion",userCrea1.getId(),"Ingenieria",user1.getId(),3,["et1","et2","et3","et4","et5"]);
        let evento4 : Evento = new Evento("Ev04","Evento 4",new Date("2020-01-26"),new Date("2017-01-26"),"Unal","descripcion",userCrea1.getId(),"Ingenieria",user1.getId(),3,["et1","et2","et3","et4","et5"]);
        let evento5 : Evento = new Evento("Ev05","Evento 5",new Date("2021-01-26"),new Date("2017-01-26"),"Unal","descripcion",userCrea1.getId(),"Ingenieria",user1.getId(),3,["et1","et2","et3","et4","et5"]);
        let evento6 : Evento = new Evento("Ev06","Evento 6",new Date("2021-01-26"),new Date("2017-01-26"),"Unal","descripcion",userCrea1.getId(),"Ingenieria",user1.getId(),3,["et1","et2","et3","et4","et5"]);
        let evento7 : Evento = new Evento("Ev07","Evento 7",new Date("2021-01-26"),new Date("2017-01-26"),"Unal","descripcion",userCrea1.getId(),"Ingenieria",user1.getId(),3,["et1","et2","et3","et4","et5"]);
        
        
        let auxEventProp : QueueRef<Evento> = new QueueRef<Evento>();
        auxEventProp.enqueue(evento1);
        auxEventProp.enqueue(evento2);
        auxEventProp.enqueue(evento3);
        userCrea1.setPropuestasEventos(auxEventProp);
        userCrea2.setPropuestasEventos(auxEventProp);
        userCrea3.setPropuestasEventos(auxEventProp);
        userCrea4.setPropuestasEventos(auxEventProp);

        let auxEventCrea : LinkedRef<Evento> = new LinkedRef<Evento>();
        auxEventCrea.addFirst(evento4);
        auxEventCrea.addFirst(evento5);
        auxEventCrea.addFirst(evento6);
        auxEventCrea.addFirst(evento7);
        userCrea1.setEventosCreados(auxEventCrea);
        userCrea2.setEventosCreados(auxEventCrea);
        userCrea3.setEventosCreados(auxEventCrea);
        userCrea4.setEventosCreados(auxEventCrea);

        let listaAux : LinkedRef<Evento> = user1.getEventosGuardados();
        listaAux.addLatest(evento1);
        listaAux.addLatest(evento2);
        listaAux.addLatest(evento3);
        user1.setEventosGuardados(listaAux);
        user2.setEventosGuardados(listaAux);
        user3.setEventosGuardados(listaAux);
        user5.setEventosGuardados(listaAux);
        user6.setEventosGuardados(listaAux);
        user7.setEventosGuardados(listaAux);
        user8.setEventosGuardados(listaAux);

        let listaAux2 : LinkedRef<Evento> = user1.getEventosPropuestos();
        listaAux2.addLatest(evento2);
        listaAux2.addLatest(evento1);
        user1.setEventosPropuestos(listaAux2);
        user2.setEventosPropuestos(listaAux2);
        user3.setEventosPropuestos(listaAux2);
        user4.setEventosPropuestos(listaAux2);
        user5.setEventosPropuestos(listaAux2);
        user6.setEventosPropuestos(listaAux2);
        user7.setEventosPropuestos(listaAux2);
        user8.setEventosPropuestos(listaAux2);


        let cola: QueueRef<Notificacion> = user1.getNotificacionesPendientes();
        let not: Notificacion = new Notificacion("01",new Date(1234),"descripcion de notificaicon 1")
        let not2: Notificacion = new Notificacion("02",new Date(1234),"descripcion de notificaicon 2")
        let not3: Notificacion = new Notificacion("03",new Date(1234),"descripcion de notificaicon 3")
        let not4: Notificacion = new Notificacion("04",new Date(1234),"descripcion de notificaicon 4")
        cola.enqueue(not);
        cola.enqueue(not4);
        cola.enqueue(not2);
        cola.enqueue(not3);

        user1.setNotificacionesPendientes(cola);
        user2.setNotificacionesPendientes(cola);
        user3.setNotificacionesPendientes(cola);
        user4.setNotificacionesPendientes(cola);
        user5.setNotificacionesPendientes(cola);
        user6.setNotificacionesPendientes(cola);
        user7.setNotificacionesPendientes(cola);
        user8.setNotificacionesPendientes(cola);

        Administrador.creadoresVerificar.enqueue(userCrea1);
        Administrador.creadoresVerificar.enqueue(userCrea2);
        Administrador.creadoresVerificar.enqueue(userCrea3);

        Administrador.creadoresRegistrados.addFirst(userCrea1);
        Administrador.creadoresRegistrados.addFirst(userCrea4);
        Administrador.creadoresRegistrados.addFirst(userCrea3);
        Administrador.creadoresRegistrados.addFirst(userCrea2);

        Administrador.estudiantesRegistrados.addFirst(user1);
        Administrador.estudiantesRegistrados.addFirst(user2);
        Administrador.estudiantesRegistrados.addFirst(user3);
        Administrador.estudiantesRegistrados.addFirst(user4);
        Administrador.estudiantesRegistrados.addFirst(user5);
        Administrador.estudiantesRegistrados.addFirst(user6);
        Administrador.estudiantesRegistrados.addFirst(user7);
    
    console.log(admin.toJSON());
    }
    public cargarDatos(pruebaY : string) : JSON  {
        let pruebaW = JSON.parse(pruebaY);
        return pruebaW;
    }
    public generarDatos() : string {
        var pruebaX  = JSON.stringify(CargarDatos.admin1);
        return pruebaX ;
    }
    
}
  
var prueba : CargarDatos = new CargarDatos();

export default CargarDatos;