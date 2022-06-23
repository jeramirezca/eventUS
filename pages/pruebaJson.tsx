import { Administrador } from "../data/Administrador";

const fs = require('fs');

function cargarDatos(): string{
    let datos = require('../data/datosAdministrador.json');
    var admin : Administrador = Administrador.fromJSON(JSON.stringify(JSON.parse(JSON.stringify(datos))));
    console.log(admin)
    return admin.toJSON();
}

function guardarDatos(datos : string) {
    // Aquí se deben obtener los datos del admministrador y pasarlos por toJSON
    fs.writeFileSync('../data/datosAdministrador.json', datos);
}

cargarDatos()
export {}