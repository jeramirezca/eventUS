"use strict";
exports.__esModule = true;
exports.CargarDatos = void 0;
var Creador_1 = require("../data/Creador");
var Estudiante_1 = require("../data/Estudiante");
var Evento_1 = require("../data/Evento");
var Administrador_1 = require("../data/Administrador");
var LinkedRef_1 = require("../structures/LinkedRef");
var QueueRef_1 = require("../structures/QueueRef");
var Notificacion_1 = require("../data/Notificacion");
/*import fsPromises from 'fs/promises';
import path from 'path';

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'datosAdministrados.json');
  const jsonData = await fsPromises.readFile(filePath);
  const objectData = JSON.parse(jsonData.toString());

  return {
    props: objectData
  }
}*/
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
        var evento1 = new Evento_1.Evento("Ev01", "Evento 1", new Date("2017-01-26"), new Date("2017-01-26"), "Unal", "descripcion", userCrea1.getId(), "Ingenieria", user1.getId(), 3, ["et1", "et2", "et3", "et4", "et5"]);
        var evento2 = new Evento_1.Evento("Ev02", "Evento 2", new Date("2018-01-26"), new Date("2017-01-26"), "Unal", "descripcion", userCrea1.getId(), "Ingenieria", user1.getId(), 3, ["et1", "et2", "et3", "et4", "et5"]);
        var evento3 = new Evento_1.Evento("Ev03", "Evento 3", new Date("2019-01-26"), new Date("2017-01-26"), "Unal", "descripcion", userCrea1.getId(), "Ingenieria", user1.getId(), 3, ["et1", "et2", "et3", "et4", "et5"]);
        var evento4 = new Evento_1.Evento("Ev04", "Evento 4", new Date("2020-01-26"), new Date("2017-01-26"), "Unal", "descripcion", userCrea1.getId(), "Ingenieria", user1.getId(), 3, ["et1", "et2", "et3", "et4", "et5"]);
        var evento5 = new Evento_1.Evento("Ev05", "Evento 5", new Date("2021-01-26"), new Date("2017-01-26"), "Unal", "descripcion", userCrea1.getId(), "Ingenieria", user1.getId(), 3, ["et1", "et2", "et3", "et4", "et5"]);
        var evento6 = new Evento_1.Evento("Ev06", "Evento 6", new Date("2021-01-26"), new Date("2017-01-26"), "Unal", "descripcion", userCrea1.getId(), "Ingenieria", user1.getId(), 3, ["et1", "et2", "et3", "et4", "et5"]);
        var evento7 = new Evento_1.Evento("Ev07", "Evento 7", new Date("2021-01-26"), new Date("2017-01-26"), "Unal", "descripcion", userCrea1.getId(), "Ingenieria", user1.getId(), 3, ["et1", "et2", "et3", "et4", "et5"]);
        var auxEventProp = new QueueRef_1.QueueRef();
        auxEventProp.enqueue(evento1);
        auxEventProp.enqueue(evento2);
        auxEventProp.enqueue(evento3);
        userCrea1.setPropuestasEventos(auxEventProp);
        userCrea2.setPropuestasEventos(auxEventProp);
        userCrea3.setPropuestasEventos(auxEventProp);
        userCrea4.setPropuestasEventos(auxEventProp);
        var auxEventCrea = new LinkedRef_1.LinkedRef();
        auxEventCrea.addFirst(evento4);
        auxEventCrea.addFirst(evento5);
        auxEventCrea.addFirst(evento6);
        auxEventCrea.addFirst(evento7);
        userCrea1.setEventosCreados(auxEventCrea);
        userCrea2.setEventosCreados(auxEventCrea);
        userCrea3.setEventosCreados(auxEventCrea);
        userCrea4.setEventosCreados(auxEventCrea);
        var listaAux = user1.getEventosGuardados();
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
        var listaAux2 = user1.getEventosPropuestos();
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
        var cola = user1.getNotificacionesPendientes();
        var not = new Notificacion_1.Notificacion("01", new Date(1234), "descripcion de notificaicon 1");
        var not2 = new Notificacion_1.Notificacion("02", new Date(1234), "descripcion de notificaicon 2");
        var not3 = new Notificacion_1.Notificacion("03", new Date(1234), "descripcion de notificaicon 3");
        var not4 = new Notificacion_1.Notificacion("04", new Date(1234), "descripcion de notificaicon 4");
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
        Administrador_1.Administrador.creadoresVerificar.enqueue(userCrea1);
        Administrador_1.Administrador.creadoresVerificar.enqueue(userCrea2);
        Administrador_1.Administrador.creadoresVerificar.enqueue(userCrea3);
        Administrador_1.Administrador.creadoresRegistrados.addFirst(userCrea1);
        Administrador_1.Administrador.creadoresRegistrados.addFirst(userCrea4);
        Administrador_1.Administrador.creadoresRegistrados.addFirst(userCrea3);
        Administrador_1.Administrador.creadoresRegistrados.addFirst(userCrea2);
        Administrador_1.Administrador.estudiantesRegistrados.addFirst(user1);
        Administrador_1.Administrador.estudiantesRegistrados.addFirst(user2);
        Administrador_1.Administrador.estudiantesRegistrados.addFirst(user3);
        Administrador_1.Administrador.estudiantesRegistrados.addFirst(user4);
        Administrador_1.Administrador.estudiantesRegistrados.addFirst(user5);
        Administrador_1.Administrador.estudiantesRegistrados.addFirst(user6);
        Administrador_1.Administrador.estudiantesRegistrados.addFirst(user7);
        //userCrea1.setEventosCreados(userCrea1.getEventosCreados()!.addLatest(evento1)!);
        //console.log(JSON.stringify(user1));
        console.log(admin.toJSON());
        console.log("*******************************************");
        //console.log(user1.toJSON());
        /*console.log("BIenvenido")
        console.log(this.generarDatos());
        console.log(this.cargarDatos(this.generarDatos()));
        let admin2 = this.cargarDatos(this.generarDatos());
        console.log(typeof(admin2));
        console.log("--------------------------------------------------");
        let evtojson = evento1.toJSON;
        console.log(typeof(evtojson));
        let eventoP : Evento = evento1.fromJSON(evtojson);
        console.log(typeof(evento1));
        console.log(typeof(eventoP));*/
        //console.log(this.cargarDatosAJson());
    }
    CargarDatos.prototype.cargarDatos = function (pruebaY) {
        var pruebaW = JSON.parse(pruebaY);
        return pruebaW;
    };
    CargarDatos.prototype.generarDatos = function () {
        var pruebaX = JSON.stringify(CargarDatos.admin1);
        return pruebaX;
    };
    CargarDatos.admin1 = new Administrador_1.Administrador("01", "Administrador principal", "correo@unal.edu.co", "ADMINISTRADOR", "admin123", true);
    return CargarDatos;
}());
exports.CargarDatos = CargarDatos;
var prueba = new CargarDatos();
exports["default"] = CargarDatos;
