"use strict";
exports.__esModule = true;
exports.CargarDatos = void 0;
var Creador_1 = require("./Creador");
var Estudiante_1 = require("./Estudiante");
var Evento_1 = require("./Evento");
var Administrador_1 = require("./Administrador");
var CargarDatos = /** @class */ (function () {
    function CargarDatos() {
        this.user1 = new Estudiante_1.Estudiante("E01", "Yenifer Mora", "ymoras@unal.edu.co", "Yenifer123", "Ingenieria de Sistemas");
        this.user2 = new Estudiante_1.Estudiante("E02", "Laura Mora", "lmoras@unal.edu.co", "Laura123", "Ingenieria de Sistemas");
        this.userCrea1 = new Creador_1.Creador("C01", "creador prog. Sistemas", "sistemas@unal.edu.co", "creador123", true, "Sistemas");
        this.userCrea2 = new Creador_1.Creador("C02", "creador prog. Sistemas", "sistemas@unal.edu.co", "creador123", true, "Sistemas");
        this.evento1 = new Evento_1.Evento("Ev01", "Evento 1", "1234", "2345", "Unal", "descripcion", this.userCrea1, "Ingenieria", this.user1, 3, ["et1", "et2", "et3", "et4", "et5"]);
        this.evento2 = new Evento_1.Evento("Ev02", "Evento 2", "1234", "2345", "Unal", "descripcion", this.userCrea1, "Ingenieria", this.user1, 3, ["et1", "et2", "et3", "et4", "et5"]);
        this.evento3 = new Evento_1.Evento("Ev03", "Evento 3", "1234", "2345", "Unal", "descripcion", this.userCrea1, "Ingenieria", this.user1, 3, ["et1", "et2", "et3", "et4", "et5"]);
        this.evento4 = new Evento_1.Evento("Ev04", "Evento 4", "1234", "2345", "Unal", "descripcion", this.userCrea1, "Ingenieria", this.user1, 3, ["et1", "et2", "et3", "et4", "et5"]);
        this.evento5 = new Evento_1.Evento("Ev05", "Evento 5", "1234", "2345", "Unal", "descripcion", this.userCrea1, "Ingenieria", this.user1, 3, ["et1", "et2", "et3", "et4", "et5"]);
    }
    CargarDatos.admin1 = new Administrador_1.Administrador("01", "Administrador principal", "correo@unal.edu.co", "admin123", true);
    return CargarDatos;
}());
exports.CargarDatos = CargarDatos;
var datosCargados = function cargarDatos(pruebaY) {
    var pruebaW = JSON.parse(pruebaY);
    console.log("Función: Cargar Datos.");
};
var datosGenerados = function generarDatos() {
    var pruebaX = JSON.stringify(CargarDatos.admin1);
    return pruebaX;
};
console.log("Datos Cargados: ", datosCargados);
console.log("Datos generados: ", datosGenerados);
