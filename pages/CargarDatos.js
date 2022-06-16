"use strict";
exports.__esModule = true;
exports.CargarDatos = void 0;
var Creador_1 = require("../data/Creador");
var Estudiante_1 = require("../data/Estudiante");
var Evento_1 = require("../data/Evento");
var Administrador_1 = require("../data/Administrador");
var Notificacion_1 = require("../data/Notificacion");
var CargarDatos = /** @class */ (function () {
    function CargarDatos() {
        var admin = new Administrador_1.Administrador("A01", "Administrador", "admin", "admin@unal.edu.co", "admin123", true);
        var user1 = new Estudiante_1.Estudiante("E01", "Yenifer Mora", "ymoras@unal.edu.co", "ESTUDIANTE", "Yenifer123", "Ingenieria de Sistemas");
        var user2 = new Estudiante_1.Estudiante("E02", "Laura Mora", "lmoras@unal.edu.co", "ESTUDIANTE", "Laura123", "Ingenieria de Sistemas");
        var user3 = new Estudiante_1.Estudiante("E03", "Estudiante3", "lmoras@unal.edu.co", "ESTUDIANTE", "Laura123", "Ingenieria de Sistemas");
        var user4 = new Estudiante_1.Estudiante("E04", "Estudiante4", "lmoras@unal.edu.co", "ESTUDIANTE", "Laura123", "Ingenieria de Sistemas");
        var user5 = new Estudiante_1.Estudiante("E05", "Estudiante5", "lmoras@unal.edu.co", "ESTUDIANTE", "Laura123", "Ingenieria de Sistemas");
        var user6 = new Estudiante_1.Estudiante("E06", "Estudiante6", "lmoras@unal.edu.co", "ESTUDIANTE", "Laura123", "Ingenieria de Sistemas");
        var user7 = new Estudiante_1.Estudiante("E07", "Estudiante7", "lmoras@unal.edu.co", "ESTUDIANTE", "Laura123", "Ingenieria de Sistemas");
        var user8 = new Estudiante_1.Estudiante("E08", "Estudiante8", "lmoras@unal.edu.co", "ESTUDIANTE", "Laura123", "Ingenieria de Sistemas");
        var userCrea1 = new Creador_1.Creador("C01", "creador prog. Sistemas", "sistemas@unal.edu.co", "CREADOR", "creador123", true, "Sistemas");
        var userCrea2 = new Creador_1.Creador("C02", "creador prog. Sistemas", "sistemas@unal.edu.co", "CREADOR", "creador123", true, "Sistemas");
        var userCrea3 = new Creador_1.Creador("C03", "creador prog. Sistemas", "sistemas@unal.edu.co", "CREADOR", "creador123", true, "Sistemas");
        var userCrea4 = new Creador_1.Creador("C04", "creador prog. Sistemas", "sistemas@unal.edu.co", "CREADOR", "creador123", true, "Sistemas");
        var evento1 = new Evento_1.Evento("Ev01", "Evento 1", new Date("2017-4-26"), new Date("2017-01-26"), "Unal", "descripcion", userCrea1.getId(), "Ingenieria", user1.getId(), false, 3, ["et1", "et2", "et3", "et4", "et5"]);
        var evento2 = new Evento_1.Evento("Ev02", "Evento 2", new Date("2018-5-26"), new Date("2017-01-26"), "Unal", "descripcion", userCrea1.getId(), "Ingenieria", user1.getId(), false, 3, ["et1", "et2", "et3", "et4", "et5"]);
        var evento3 = new Evento_1.Evento("Ev03", "Evento 3", new Date("2019-6-26"), new Date("2017-01-26"), "Unal", "descripcion", userCrea1.getId(), "Ingenieria", user1.getId(), false, 3, ["et1", "et2", "et3", "et4", "et5"]);
        var evento4 = new Evento_1.Evento("Ev04", "Evento 4", new Date("2020-7-26"), new Date("2017-01-26"), "Unal", "descripcion", userCrea1.getId(), "Ingenieria", user1.getId(), false, 3, ["et1", "et2", "et3", "et4", "et5"]);
        var evento5 = new Evento_1.Evento("Ev05", "Evento 5", new Date("2021-8-26"), new Date("2017-01-26"), "Unal", "descripcion", userCrea1.getId(), "Ingenieria", user1.getId(), false, 3, ["et1", "et2", "et3", "et4", "et5"]);
        var evento6 = new Evento_1.Evento("Ev06", "Evento 6", new Date("2021-9-26"), new Date("2017-01-26"), "Unal", "descripcion", userCrea1.getId(), "Ingenieria", user1.getId(), false, 3, ["et1", "et2", "et3", "et4", "et5"]);
        var evento7 = new Evento_1.Evento("Ev07", "Evento 7", new Date("2021-10-26"), new Date("2017-01-26"), "Unal", "descripcion", userCrea1.getId(), "Ingenieria", user1.getId(), false, 3, ["et1", "et2", "et3", "et4", "et5"]);
        var eventString = evento1.toJSON();
        var eventoPrueba = Evento_1.Evento.fromJSON(eventString);
        console.log(eventString);
        console.log(eventoPrueba.toString());
        console.log(eventoPrueba.getFechaFinal().getFullYear());
        console.log(eventoPrueba.getFechaFinal().getMonth());
        console.log(eventoPrueba.getFechaFinal().getDay());
        var auxEventProp = new Array();
        auxEventProp.push(evento1);
        auxEventProp.push(evento2);
        auxEventProp.push(evento3);
        userCrea1.setPropuestasEventos(auxEventProp);
        userCrea2.setPropuestasEventos(auxEventProp);
        userCrea3.setPropuestasEventos(auxEventProp);
        userCrea4.setPropuestasEventos(auxEventProp);
        var auxEventCrea = new Array();
        auxEventCrea.unshift(evento4);
        auxEventCrea.unshift(evento5);
        auxEventCrea.unshift(evento6);
        auxEventCrea.unshift(evento7);
        userCrea1.setEventosCreados(auxEventCrea);
        userCrea2.setEventosCreados(auxEventCrea);
        userCrea3.setEventosCreados(auxEventCrea);
        userCrea4.setEventosCreados(auxEventCrea);
        var listaAux = user1.getEventosGuardados();
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
        var listaAux2 = user1.getEventosPropuestos();
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
        var cola = user1.getNotificacionesPendientes();
        var not = new Notificacion_1.Notificacion("01", new Date(1234), "descripcion de notificaicon 1");
        var not2 = new Notificacion_1.Notificacion("02", new Date(1234), "descripcion de notificaicon 2");
        var not3 = new Notificacion_1.Notificacion("03", new Date(1234), "descripcion de notificaicon 3");
        var not4 = new Notificacion_1.Notificacion("04", new Date(1234), "descripcion de notificaicon 4");
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
        Administrador_1.Administrador.creadoresVerificar.push(userCrea1);
        Administrador_1.Administrador.creadoresVerificar.push(userCrea2);
        Administrador_1.Administrador.creadoresVerificar.push(userCrea3);
        Administrador_1.Administrador.creadoresRegistrados.unshift(userCrea1);
        Administrador_1.Administrador.creadoresRegistrados.unshift(userCrea4);
        Administrador_1.Administrador.creadoresRegistrados.unshift(userCrea3);
        Administrador_1.Administrador.creadoresRegistrados.unshift(userCrea2);
        Administrador_1.Administrador.estudiantesRegistrados.unshift(user1);
        Administrador_1.Administrador.estudiantesRegistrados.unshift(user2);
        Administrador_1.Administrador.estudiantesRegistrados.unshift(user3);
        Administrador_1.Administrador.estudiantesRegistrados.unshift(user4);
        Administrador_1.Administrador.estudiantesRegistrados.unshift(user5);
        Administrador_1.Administrador.estudiantesRegistrados.unshift(user6);
        Administrador_1.Administrador.estudiantesRegistrados.unshift(user7);
        /*
                console.log("****************************************")
                console.log(JSON.stringify(userCrea1));
                console.log("****************************************")
                console.log(JSON.parse(JSON.stringify(userCrea1)));
                console.log("****************************************")
                let y = JSON.parse(JSON.parse(JSON.stringify(userCrea1)))
                console.log(JSON.stringify(JSON.parse(JSON.stringify(y))));*/
        /*let sAdmin : string = admin.toJSON();
        let pAdmin = Administrador.fromJSON(sAdmin);*/
        // let sCrea : string = JSON.stringify(userCrea1);
        // let pCrea = Creador.fromJSON(sCrea);
        // console.log(pCrea);
        /*let pEvent : string = evento1.toJSON();
        console.log(pEvent);
        let pOEvent : Evento = Evento.fromJSON(pEvent);
        pOEvent.descripcion = "Esta es una descripcion que prueba que funciona";
        console.log(pOEvent);
        console.log(pOEvent.toString());*/
        /*
        let sEsct = user1.toJSON();
        console.log(sEsct);
        let pEst : Estudiante = Estudiante.fromJSON(sEsct);
        console.log(pEst);*/
        /*
        let not1 = new Notificacion("N01",new Date ("2022-6-16"),"Notificacion 1");
        let sNot = JSON.stringify(not1);
        console.log(sNot);
        let pNot : Notificacion = Notificacion.fromJSON(sNot);
        console.log(pNot);
        console.log(pNot.toString());

        let x = '[{"id":"01","fecha":"1970-01-01T00:00:01.234Z","descripcion":"descripcion de notificaicon 1"},{"id":"04","fecha":"1970-01-01T00:00:01.234Z","descripcion":"descripcion de notificaicon 4"},{"id":"02","fecha":"1970-01-01T00:00:01.234Z","descripcion":"descripcion de notificaicon 2"},{"id":"03","fecha":"1970-01-01T00:00:01.234Z","descripcion":"descripcion de notificaicon 3"}]';
        let obj = JSON.parse(x);
        console.log(obj);
       // console.log(obj.length);
        for( let d in obj){
            let aux = obj[d];
            let pNot : Notificacion = Notificacion.fromJSON(JSON.stringify(aux));
            console.log(pNot.toString());
        }*/
        /*
                for (let i: number = 0; i < obj.length; i++){
                    console.log(Notificacion.fromJSON(obj[i]).toString());
                }
                let  auxNotificacionesPendientes:Array<Notificacion> = new Array<Notificacion>();
                */
        /*for (let i: number = 0; i < obj.length; i++){
            console.log(Notificacion.fromJSON(obj[i]).toString());
            auxNotificacionesPendientes.push(Notificacion.fromJSON(obj[i]));
        }*/
        var datos = admin.toJSON();
        //console.log(datos);
        var admin2 = Administrador_1.Administrador.fromJSON(datos);
        admin2.nombre = "Admin funcionando :)";
        console.log(admin2);
    }
    CargarDatos.admin1 = new Administrador_1.Administrador("01", "Administrador principal", "correo@unal.edu.co", "ADMINISTRADOR", "admin123", true);
    return CargarDatos;
}());
exports.CargarDatos = CargarDatos;
var prueba = new CargarDatos();
exports["default"] = CargarDatos;
