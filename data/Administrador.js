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
    function Administrador(id, nombre, correo, contrasena, autorizado) {
        return _super.call(this, id, nombre, correo, contrasena, autorizado) || this;
    }
    Administrador.inicializar = function () {
        this.usuariosVerificar = new QueueRef_1.QueueRef();
        this.usuariosRegistrados = new LinkedRef_1.LinkedRef();
    };
    //Getters y Setters
    Administrador.getUsuariosVerificar = function () {
        return this.usuariosVerificar;
    };
    Administrador.setUsuariosVerificar = function (usuariosVerificar) {
        Administrador.usuariosVerificar = usuariosVerificar;
    };
    Administrador.getUsuariosRegistrados = function () {
        return this.usuariosRegistrados;
    };
    Administrador.setUsuariosRegistrados = function (usuariosRegistrados) {
        Administrador.usuariosRegistrados = usuariosRegistrados;
    };
    //Métodos
    Administrador.prototype.autorizarUsuario = function () {
        var user = Administrador.usuariosVerificar.first();
        user.setAutorizado(true);
        // Proceso donde se autoriza (Trabaja sobre usuariosVerificar)
        /*
         * Cuando se autorice un usuario, su estado va a cambiar a autorizado y debera
         * ser
         * casteado a creador.
         */
        Administrador.usuariosRegistrados.addFirst(user);
        Administrador.usuariosVerificar.dequeue(); // desencolar()
    };
    Administrador.prototype.desautorizarUsuario = function () {
        // proceso donde se desautoriza (Trabaja sobre
        var user = Administrador.usuariosVerificar.first();
        user.setAutorizado(false); // usuariosVerificar)
        /*
         * Cuando se desautorice un usuario, su estado va a cambiar a desautorizado y
         * debera ser
         * casteado a estudiante.
         */
        Administrador.usuariosVerificar.dequeue(); // desencolar()
    };
    Administrador.prototype.editarUsuario = function (usuario) {
        // proceso donde se edita (Trabaja sobre usuariosRegistrados)
        // TODO: Se debe cambiar a booleano o anadir excepcion
        /*
         * Va buscar el usuario ingresado dentro de usuariosRegistrados
         * Si no lo encuentra, Imprime "No se encontro al usuario. Imposible editar." y
         * retorna falso
         * Si lo encuentra, prosigue el metodo
         * Retorna verdadero
         */
        var index = Administrador.usuariosRegistrados.indexOf(usuario);
        if (index == -1) {
            console.log("El usuario no existe.");
            return false;
        }
        else {
            Administrador.usuariosRegistrados.add(usuario, index);
            Administrador.usuariosRegistrados.remove(index + 1);
            return true;
        }
    };
    Administrador.prototype.eliminarUsuario = function (usuario) {
        // proceso donde se elimina (Trabaja sobre usuariosRegistrados)
        // TODO: Se debe cambiar a booleano o anadir excepcion
        /*
         * Va a buscar el usuario ingresado dentro de usuariosRegistrados
         * Si no lo encuentra, imprime "No se encontro al usuario. Imposible eliminar."
         * y retorna falso
         * Si lo encuentra, prosigue el metodo
         * Retorna verdadero.
         */
        var index = Administrador.usuariosRegistrados.indexOf(usuario);
        if (index == -1) {
            console.log("El usuario no existe.");
            return false;
        }
        else {
            Administrador.usuariosRegistrados.remove(index); // elimina al usuario
            return true;
        }
    };
    Administrador.prototype.filtrarUsuarios = function (num) {
        if (num == 1) {
            if (Administrador.usuariosRegistrados.getFirst() instanceof Estudiante_1.Estudiante) {
                console.log(Administrador.usuariosRegistrados.getFirst() + "Estudiante");
            }
        }
        else if (num == 2) {
            if (Administrador.usuariosRegistrados.getFirst() instanceof Creador_1.Creador) {
                console.log(Administrador.usuariosRegistrados.getFirst() + "Creador");
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
