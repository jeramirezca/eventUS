"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Administrador = void 0;
var Creador_1 = require("./Creador");
var Estudiante_1 = require("./Estudiante");
var Usuario_1 = require("./Usuario");
var Administrador = /** @class */ (function (_super) {
    __extends(Administrador, _super);
    //Constructor
    function Administrador(id, nombre, user, correo, contrasena, autorizado) {
        var _this = _super.call(this, id, nombre, user, correo, contrasena, autorizado) || this;
        _this.rol = "ADMINISTRADOR";
        return _this;
    }
    Administrador.inicializar = function () {
        this.creadoresVerificar = new Array();
        this.estudiantesRegistrados = new Array();
        this.creadoresRegistrados = new Array();
    };
    Administrador.prototype.toJSON = function () {
        var auxCreaVerificar = Administrador.creadoresVerificar;
        var creadoresVerificar = "[";
        var i = 0;
        for (i; i < auxCreaVerificar.length; i++) {
            creadoresVerificar += auxCreaVerificar[0].toJSON();
            if (i != auxCreaVerificar.length - 1) {
                creadoresVerificar += ',';
            }
        }
        creadoresVerificar += ']';
        var auxCreaRegistrados = Administrador.creadoresRegistrados;
        var creadoresRegistrados = "[";
        var j = 0;
        for (j; j < auxCreaRegistrados.length; j++) {
            creadoresRegistrados += auxCreaRegistrados[0].toJSON();
            //eventPendientes += JSON.stringify(auxEventPendientes.getFirst());
            if (j != auxCreaRegistrados.length - 1) {
                creadoresRegistrados += ',';
            }
        }
        creadoresRegistrados += ']';
        var auxEstRegistrados = Administrador.estudiantesRegistrados;
        var estudiantesRegistrados = "[";
        var k = 0;
        for (k; k < auxEstRegistrados.length; k++) {
            estudiantesRegistrados += auxEstRegistrados[0].toJSON();
            if (k != auxEstRegistrados.length - 1) {
                estudiantesRegistrados += ',';
            }
        }
        estudiantesRegistrados += ']';
        var administrador = '{' +
            '"rol":"ADMINISTRADOR",' +
            '"id":"' + this.getId() + '",' +
            '"nombre":"' + this.getNombre() + '",' +
            '"usuario":"' + this.getUsuario() + '",' +
            '"correo":"' + this.getCorreo() + '",' +
            '"contrasena":"' + this.getContrasena() + '",' +
            '"autorizado":' + this.getAutorizado() + ',' +
            '"estudiantesRegistrados":' + estudiantesRegistrados + ',' +
            '"creadoresRegistrados":' + creadoresRegistrados + ',' +
            '"creadoresVerificar":' + creadoresVerificar +
            '}';
        return administrador;
    };
    //Métodos
    Administrador.prototype.autorizarUsuario = function () {
        var user = Administrador.creadoresVerificar[0];
        user.setAutorizado(true);
        // Proceso donde se autoriza (Trabaja sobre usuariosVerificar)
        /*
         * Cuando se autorice un usuario, su estado va a cambiar a autorizado y debera
         * ser
         * casteado a creador.
         */
        Administrador.creadoresRegistrados.unshift(user);
        Administrador.creadoresVerificar.shift(); // desencolar()
    };
    Administrador.prototype.desautorizarUsuario = function () {
        // proceso donde se desautoriza (Trabaja sobre
        var user = Administrador.creadoresVerificar[0];
        user.setAutorizado(false); // usuariosVerificar)
        /*
         * Cuando se desautorice un usuario, su estado va a cambiar a desautorizado y
         * debera ser
         * casteado a estudiante.
         */
        Administrador.creadoresVerificar.shift(); // desencolar()
    };
    //public editarUsuario(usuario:Usuario):boolean {      ¿Por qué el administrador editaria un usuario?
    // proceso donde se edita (Trabaja sobre usuariosRegistrados)
    // TODO: Se debe cambiar a booleano o anadir excepcion
    /*
     * Va buscar el usuario ingresado dentro de usuariosRegistrados
     * Si no lo encuentra, Imprime "No se encontro al usuario. Imposible editar." y
     * retorna falso
     * Si lo encuentra, prosigue el metodo
     * Retorna verdadero
     */
    /*let index:number =  Administrador.estudiantesRegistrados.indexOf(usuario);
    if (index == -1) {
        console.log("El usuario no existe.");
        return false;
    } else {
        Administrador.estudiantesRegistrados.add(usuario, index);
        Administrador.estudiantesRegistrados.remove(index+1);
        return true;
    }
}*/
    Administrador.prototype.eliminarEstudiante = function (usuario) {
        // proceso donde se elimina (Trabaja sobre estudiantesRegistrados)
        // TODO: Se debe cambiar a booleano o anadir excepcion
        /*
         * Va a buscar el usuario ingresado dentro de usuariosRegistrados
         * Si no lo encuentra, imprime "No se encontro al usuario. Imposible eliminar."
         * y retorna falso
         * Si lo encuentra, prosigue el metodo
         * Retorna verdadero.
         */
        var index = Administrador.estudiantesRegistrados.indexOf(usuario);
        if (index == -1) {
            console.log("El estudiante no existe.");
            return false;
        }
        else {
            Administrador.estudiantesRegistrados.splice(index, 1); // elimina al usuario
            return true;
        }
    };
    Administrador.prototype.eliminarCreador = function (usuario) {
        // proceso donde se elimina (Trabaja sobre creadoresRegistrados)
        // TODO: Se debe cambiar a booleano o anadir excepcion
        /*
         * Va a buscar el usuario ingresado dentro de usuariosRegistrados
         * Si no lo encuentra, imprime "No se encontro al usuario. Imposible eliminar."
         * y retorna falso
         * Si lo encuentra, prosigue el metodo
         * Retorna verdadero.
         */
        var index = Administrador.creadoresRegistrados.indexOf(usuario);
        if (index == -1) {
            console.log("El creador no existe.");
            return false;
        }
        else {
            Administrador.estudiantesRegistrados.splice(index, 1); // elimina al usuario
            return true;
        }
    };
    Administrador.prototype.filtrarUsuarios = function (num) {
        if (num == 1) {
            if (Administrador.estudiantesRegistrados[0] instanceof Estudiante_1.Estudiante) {
                console.log(Administrador.estudiantesRegistrados[0] + "Estudiante");
            }
        }
        else if (num == 2) {
            if (Administrador.estudiantesRegistrados[0] instanceof Creador_1.Creador) {
                console.log(Administrador.estudiantesRegistrados[0] + "Creador");
            }
        }
        else {
            console.log("Tipo de usuario no identificado.");
        }
    };
    Administrador.fromJSON = function (json) {
        var obj = JSON.parse(json);
        var adminAux = new Administrador(obj.id, obj.nombre, obj.user, obj.correo, obj.contrasena, true);
        for (var i = 0; i < obj.creadoresVerificar.length; i++) {
            var aux = obj.creadoresVerificar[i];
            var auxCrea = Creador_1.Creador.fromJSON(JSON.stringify(JSON.parse(JSON.stringify(aux))));
            console.log(auxCrea);
            Administrador.creadoresVerificar.push(auxCrea);
        }
        for (var i = 0; i < obj.creadoresRegistrados.length; i++) {
            var aux = obj.creadoresRegistrados[i];
            var auxCrea = Creador_1.Creador.fromJSON(JSON.stringify(JSON.parse(JSON.stringify(aux))));
            console.log(auxCrea);
            Administrador.creadoresRegistrados.push(auxCrea);
        }
        for (var i = 0; i < obj.estudiantesRegistrados.length; i++) {
            var aux = obj.estudiantesRegistrados[i];
            var auxEst = Estudiante_1.Estudiante.fromJSON(JSON.stringify(JSON.parse(JSON.stringify(aux))));
            console.log(auxEst);
            Administrador.estudiantesRegistrados.push(auxEst);
        }
        return adminAux;
    };
    return Administrador;
}(Usuario_1.Usuario));
exports.Administrador = Administrador;
Administrador.inicializar();
