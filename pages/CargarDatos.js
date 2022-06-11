"use strict";
exports.__esModule = true;
exports.CargarDatos = void 0;
var Creador_1 = require("../data/Creador");
var Estudiante_1 = require("../data/Estudiante");
var Evento_1 = require("../data/Evento");
var Administrador_1 = require("../data/Administrador");
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
        var user1 = new Estudiante_1.Estudiante("E01", "Yenifer Mora", "ymoras@unal.edu.co", "ESTUDIANTE", "Yenifer123", "Ingenieria de Sistemas");
        var user2 = new Estudiante_1.Estudiante("E02", "Laura Mora", "lmoras@unal.edu.co", "ESTUDIANTE", "Laura123", "Ingenieria de Sistemas");
        var userCrea1 = new Creador_1.Creador("C01", "creador prog. Sistemas", "sistemas@unal.edu.co", "CREADOR", "creador123", true, "Sistemas");
        var userCrea2 = new Creador_1.Creador("C02", "creador prog. Sistemas", "sistemas@unal.edu.co", "CREADOR", "creador123", true, "Sistemas");
        var evento1 = new Evento_1.Evento("Ev01", "Evento 1", new Date("2017-01-26"), new Date("2017-01-26"), "Unal", "descripcion", userCrea1.getId(), "Ingenieria", user1.getId(), 3, ["et1", "et2", "et3", "et4", "et5"]);
        var evento2 = new Evento_1.Evento("Ev02", "Evento 2", new Date("2018-01-26"), new Date("2017-01-26"), "Unal", "descripcion", userCrea1.getId(), "Ingenieria", user1.getId(), 3, ["et1", "et2", "et3", "et4", "et5"]);
        var evento3 = new Evento_1.Evento("Ev03", "Evento 3", new Date("2019-01-26"), new Date("2017-01-26"), "Unal", "descripcion", userCrea1.getId(), "Ingenieria", user1.getId(), 3, ["et1", "et2", "et3", "et4", "et5"]);
        var evento4 = new Evento_1.Evento("Ev04", "Evento 4", new Date("2020-01-26"), new Date("2017-01-26"), "Unal", "descripcion", userCrea1.getId(), "Ingenieria", user1.getId(), 3, ["et1", "et2", "et3", "et4", "et5"]);
        var evento5 = new Evento_1.Evento("Ev05", "Evento 5", new Date("2021-01-26"), new Date("2017-01-26"), "Unal", "descripcion", userCrea1.getId(), "Ingenieria", user1.getId(), 3, ["et1", "et2", "et3", "et4", "et5"]);
        var listaAux = user1.getEventosGuardados();
        listaAux.addLatest(evento1);
        listaAux.addLatest(evento2);
        listaAux.addLatest(evento3);
        user1.setEventosGuardados(listaAux);
        //userCrea1.setEventosCreados(userCrea1.getEventosCreados()!.addLatest(evento1)!);
        console.log(JSON.stringify(user1));
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
