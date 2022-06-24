"use strict";
exports.__esModule = true;
var Administrador_1 = require("../data/Administrador");
var fs = require('fs');
function cargarDatos() {
    var datos = require('../data/datosAdministrador.json');
    var admin = Administrador_1.Administrador.fromJSON(JSON.stringify(JSON.parse(JSON.stringify(datos))));
    console.log(admin);
    return admin.toJSON();
}
function guardarDatos(datos) {
    // Aquí se deben obtener los datos del admministrador y pasarlos por toJSON
    fs.writeFileSync('../data/datosAdministrador.json', datos);
}
cargarDatos();
