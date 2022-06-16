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
var LinkedRef_1 = require("../structures/LinkedRef");
var QueueRef_1 = require("../structures/QueueRef");
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
        this.creadoresVerificar = new QueueRef_1.QueueRef();
        this.estudiantesRegistrados = new LinkedRef_1.LinkedRef();
        this.creadoresRegistrados = new LinkedRef_1.LinkedRef();
    };
    Administrador.prototype.toJSON = function () {
        var _a, _b, _c;
        var auxCreaVerificar = Administrador.creadoresVerificar;
        var creadoresVerificar = "[";
        var i = 0;
        for (i; i < auxCreaVerificar.size(); i++) {
            creadoresVerificar += (_a = auxCreaVerificar.first()) === null || _a === void 0 ? void 0 : _a.toJSON();
            if (i != auxCreaVerificar.size() - 1) {
                creadoresVerificar += ',';
            }
            auxCreaVerificar.enqueue(auxCreaVerificar.first());
            auxCreaVerificar.dequeue();
        }
        creadoresVerificar += ']';
        var auxCreaRegistrados = Administrador.creadoresRegistrados;
        var creadoresRegistrados = "[";
        var j = 0;
        for (j; j < auxCreaRegistrados.size(); j++) {
            creadoresRegistrados += (_b = auxCreaRegistrados.getFirst()) === null || _b === void 0 ? void 0 : _b.toJSON();
            //eventPendientes += JSON.stringify(auxEventPendientes.getFirst());
            if (j != auxCreaRegistrados.size() - 1) {
                creadoresRegistrados += ',';
            }
            auxCreaRegistrados.addLatest(auxCreaRegistrados.getFirst());
            auxCreaRegistrados.removeFirst();
        }
        creadoresRegistrados += ']';
        var auxEstRegistrados = Administrador.estudiantesRegistrados;
        var estudiantesRegistrados = "[";
        var k = 0;
        for (k; k < auxEstRegistrados.size(); k++) {
            estudiantesRegistrados += (_c = auxEstRegistrados.getFirst()) === null || _c === void 0 ? void 0 : _c.toJSON();
            //eventPendientes += JSON.stringify(auxEventPendientes.getFirst());
            if (k != auxEstRegistrados.size() - 1) {
                estudiantesRegistrados += ',';
            }
            auxEstRegistrados.addLatest(auxEstRegistrados.getFirst());
            auxEstRegistrados.removeFirst();
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
        var user = Administrador.creadoresVerificar.first();
        user.setAutorizado(true);
        // Proceso donde se autoriza (Trabaja sobre usuariosVerificar)
        /*
         * Cuando se autorice un usuario, su estado va a cambiar a autorizado y debera
         * ser
         * casteado a creador.
         */
        Administrador.creadoresRegistrados.addFirst(user);
        Administrador.creadoresVerificar.dequeue(); // desencolar()
    };
    Administrador.prototype.desautorizarUsuario = function () {
        // proceso donde se desautoriza (Trabaja sobre
        var user = Administrador.creadoresVerificar.first();
        user.setAutorizado(false); // usuariosVerificar)
        /*
         * Cuando se desautorice un usuario, su estado va a cambiar a desautorizado y
         * debera ser
         * casteado a estudiante.
         */
        Administrador.creadoresVerificar.dequeue(); // desencolar()
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
            Administrador.estudiantesRegistrados.remove(index); // elimina al usuario
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
            Administrador.estudiantesRegistrados.remove(index); // elimina al usuario
            return true;
        }
    };
    Administrador.prototype.filtrarUsuarios = function (num) {
        if (num == 1) {
            if (Administrador.estudiantesRegistrados.getFirst() instanceof Estudiante_1.Estudiante) {
                console.log(Administrador.estudiantesRegistrados.getFirst() + "Estudiante");
            }
        }
        else if (num == 2) {
            if (Administrador.estudiantesRegistrados.getFirst() instanceof Creador_1.Creador) {
                console.log(Administrador.estudiantesRegistrados.getFirst() + "Creador");
            }
        }
        else {
            console.log("Tipo de usuario no identificado.");
        }
    };
    return Administrador;
}(Usuario_1.Usuario));
exports.Administrador = Administrador;
Administrador.inicializar();
