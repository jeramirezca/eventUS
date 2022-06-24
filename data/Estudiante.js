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
exports.Estudiante = void 0;
var Evento_1 = require("./Evento");
var Notificacion_1 = require("./Notificacion");
var Usuario_1 = require("./Usuario");
var MinHeap_1 = require("../structures/MinHeap");
var Estudiante = /** @class */ (function (_super) {
    __extends(Estudiante, _super);
    function Estudiante(id, nombre, usuario, correo, contrasena, programaEstudio) {
        var _this = _super.call(this, id, nombre, usuario, correo, contrasena, true) || this;
        _this.eventosGuardados = new Array();
        _this.eventosPropuestos = new Array();
        _this.notificacionesPendientes = new Array();
        _this.programaEstudio = programaEstudio;
        _this.rol = "ESTUDIANTE";
        return _this;
    }
    Estudiante.prototype.toJSON = function () {
        var auxNotificaiones = this.getNotificacionesPendientes();
        var notPendientes = "[";
        var i = 0;
        for (i; i < auxNotificaiones.length; i++) {
            notPendientes += JSON.stringify(auxNotificaiones[i]);
            if (i != auxNotificaiones.length - 1) {
                notPendientes += ',';
            }
        }
        notPendientes += ']';
        var auxEventGuardados = this.getEventosGuardados();
        var eventosGuardados = "[";
        var j = 0;
        for (j; j < auxEventGuardados.length; j++) {
            eventosGuardados += auxEventGuardados[0].toJSON();
            if (j != auxEventGuardados.length - 1) {
                eventosGuardados += ',';
            }
        }
        eventosGuardados += ']';
        var auxEventPendientes = this.getEventosPropuestos();
        var eventPendientes = "[";
        var k = 0;
        for (k; k < auxEventPendientes.length; k++) {
            eventPendientes += auxEventPendientes[0].toJSON();
            //eventPendientes += JSON.stringify(auxEventPendientes.getFirst());
            if (k != auxEventPendientes.length - 1) {
                eventPendientes += ',';
            }
        }
        eventPendientes += ']';
        var estudiante = '{' +
            '"rol":"ESTUDIANTE",' +
            '"id":"' + this.getId() + '",' +
            '"nombre":"' + this.getNombre() + '",' +
            '"usuario":"' + this.getUsuario() + '",' +
            '"correo":"' + this.getCorreo() + '",' +
            '"contrasena":"' + this.getContrasena() + '",' +
            '"autorizado":' + this.getAutorizado() + ',' +
            '"programaEstudio":"' + this.getProgramaEstudio() + '",' +
            '"notificacionesPendientes":' + notPendientes + ',' +
            '"eventosGuardados":' + eventosGuardados + ',' +
            '"eventosPendientes":' + eventPendientes +
            '}';
        return estudiante;
    };
    //GETTERS AND SETTERS
    Estudiante.prototype.getNotificacionesPendientes = function () {
        return this.notificacionesPendientes;
    };
    Estudiante.prototype.setNotificacionesPendientes = function (notificacionesPendientes) {
        this.notificacionesPendientes = notificacionesPendientes;
    };
    Estudiante.prototype.getEventosGuardados = function () {
        return this.eventosGuardados;
    };
    Estudiante.prototype.setEventosGuardados = function (eventosGuardados) {
        this.eventosGuardados = eventosGuardados;
    };
    Estudiante.prototype.getEventosPropuestos = function () {
        return this.eventosPropuestos;
    };
    Estudiante.prototype.setEventosPropuestos = function (eventosPropuestos) {
        this.eventosPropuestos = eventosPropuestos;
    };
    Estudiante.prototype.getProgramaEstudio = function () {
        return this.programaEstudio;
    };
    Estudiante.prototype.setProgramaEstudio = function (programaEstudio) {
        this.programaEstudio = programaEstudio;
    };
    //METODOS
    Estudiante.prototype.editarContrasena = function (pinActual, pinNuevo) {
        var cambiado = false;
        if (this.getContrasena() == pinActual) {
            this.setContrasena(pinNuevo);
            cambiado = true;
            return cambiado;
        }
        else {
            return cambiado;
        }
    };
    Estudiante.prototype.sugerirEvento = function (e, c) {
        e.setProponente(this.getId());
        this.eventosPropuestos.push(e);
        c.getPropuestasEventos().unshift(e);
        // pendiente poder enviar ese evento al creador para que lo pueda autorizar
    };
    Estudiante.prototype.guardarEvento = function (nuevoEvento) {
        this.eventosGuardados.push(nuevoEvento);
    };
    Estudiante.prototype.getEventosSugeridos = function (eventos) {
        var heap = new MinHeap_1.MinHeap(this.programaEstudio);
        for (var i = 0; i < eventos.length; i++) {
            eventos[i].getPriority(this.programaEstudio);
            heap.insert(eventos[i]);
        }
        var eventosSugeridos = new Array();
        for (var j = 0; j < eventos.length; j++) {
            eventosSugeridos.push(heap.extractMin());
        }
        return eventosSugeridos;
    };
    Estudiante.fromJSON = function (json) {
        var obj = JSON.parse(json);
        var estudianteAux = new Estudiante(obj.id, obj.nombre, obj.usuario, obj.correo, obj.contrasena, obj.programaEstudio);
        var auxEventosGuardados = new Array();
        for (var i = 0; i < obj.eventosGuardados.length; i++) {
            var aux = obj.eventosGuardados[i];
            var auxEvent = Evento_1.Evento.fromJSON(JSON.stringify(aux));
            auxEventosGuardados.push(auxEvent);
        }
        var auxEventosPendientes = new Array();
        for (var i = 0; i < obj.eventosPendientes.length; i++) {
            var aux = obj.eventosPendientes[i];
            var auxEvent = Evento_1.Evento.fromJSON(JSON.stringify(aux));
            auxEventosPendientes.push(auxEvent);
        }
        var auxNotificacionesPendientes = new Array();
        for (var i = 0; i < obj.notificacionesPendientes.length; i++) {
            var aux = obj.notificacionesPendientes[i];
            var auxNot = Notificacion_1.Notificacion.fromJSON(JSON.stringify(aux));
            auxNotificacionesPendientes.push(auxNot);
        }
        estudianteAux.setNotificacionesPendientes(auxNotificacionesPendientes);
        estudianteAux.setEventosPropuestos(auxEventosPendientes);
        estudianteAux.setEventosGuardados(auxEventosGuardados);
        return estudianteAux;
    };
    return Estudiante;
}(Usuario_1.Usuario));
exports.Estudiante = Estudiante;
