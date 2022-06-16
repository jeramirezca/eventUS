"use strict";
/*
function cargarJSON(){
    fetch('datosAdministrador.json')
    .then(function(res){
        return res;
    })
    .then(function(datos){
        console.log(datos)
    })
}
cargarJSON()
export default cargarJSON;*/
exports.__esModule = true;
var Administrador_1 = require("../data/Administrador");
/*
window.onload = function(){
    var archivo = new XMLHttpRequest();
    archivo.open('GET', 'datosAdministrador.json');
    archivo.onload = function(){
        if (archivo.status == 200){
            var datos = archivo.responseText;
            console.log(datos);
        }
    };
    archivo.send();
};
export {}
*/
var fs = require('fs');
// users in JSON file for simplicity, store in a db for production applications
function cargarDatos() {
    var datos = require('../data/datosAdministrador.json');
    var admin = Administrador_1.Administrador.fromJSON(JSON.stringify(JSON.parse(JSON.stringify(datos))));
    return admin.toJSON();
    //console.log(admin.toJSON());
}
function guardarDatos(datos) {
    fs.writeFileSync('../data/datosAdministra.json', datos);
}
guardarDatos(cargarDatos());
