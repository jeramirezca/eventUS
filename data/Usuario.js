"use strict";
exports.__esModule = true;
exports.Usuario = void 0;
var StackRef_1 = require("../structures/StackRef");
var Usuario = /** @class */ (function () {
    function Usuario(id, nombre, usuario, correo, contrasena, autorizado) {
        this.rol = "";
        // metodos
        this.fromJSON = function (json) {
            var obj = JSON.parse(json);
            return new Usuario(obj.id, obj.nombre, obj.rol, obj.correo, obj.contrasena, obj.autorizado);
        };
        this.id = id;
        this.nombre = nombre;
        this.usuario = usuario;
        this.rol = "";
        this.correo = correo;
        this.contrasena = contrasena;
        this.autorizado = autorizado;
        this.notificaciones = new StackRef_1.StackRef();
        this.rol = "";
    }
    // contructor
    Usuario.prototype.fromJson = function (json) {
        this.id = json.id;
        this.nombre = json.nombre;
        this.rol = json.rol;
        this.correo = json.correo;
        this.contrasena = json.contrasena;
        this.autorizado = json.autorizado;
        this.notificaciones = json.notificaciones;
    };
    // getters and setters
    Usuario.prototype.getId = function () {
        return this.id;
    };
    Usuario.prototype.setId = function (id) {
        this.id = id;
    };
    Usuario.prototype.getNombre = function () {
        return this.nombre;
    };
    Usuario.prototype.setNombre = function (nombre) {
        this.nombre = nombre;
    };
    Usuario.prototype.getUsuario = function () {
        return this.usuario;
    };
    Usuario.prototype.setUsuario = function (usuario) {
        this.id = usuario;
    };
    Usuario.prototype.getCorreo = function () {
        return this.correo;
    };
    Usuario.prototype.setCorreo = function (correo) {
        this.correo = correo;
    };
    Usuario.prototype.getContrasena = function () {
        return this.contrasena;
    };
    Usuario.prototype.setContrasena = function (contrasena) {
        this.contrasena = contrasena;
    };
    Usuario.prototype.getNotificaciones = function () {
        return this.notificaciones;
    };
    Usuario.prototype.setNotificaciones = function (notificaciones) {
        this.notificaciones = notificaciones;
    };
    Usuario.prototype.getAutorizado = function () {
        return this.autorizado;
    };
    Usuario.prototype.setAutorizado = function (string) {
        this.autorizado = string;
    };
    Usuario.prototype.eliminarNotificacion = function () {
        if (this.notificaciones.empty()) {
            console.log("No hay notificaciones por eliminar");
        }
        else {
            this.notificaciones.pop();
        }
    };
    Usuario.prototype.buscarEvento = function () {
        // podria recibir una Linkedref de eventos, junto a un evento a buscar
        // busca atraves de los eventos que se encuentren contenidos en una lista
    };
    Usuario.prototype.toString = function () {
        return "[ Usuario:" + this.id + ", Nombre: " + this.nombre + "  Correo: " + this.correo + "]";
    };
    return Usuario;
}());
exports.Usuario = Usuario;
