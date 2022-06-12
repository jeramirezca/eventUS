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
var LinkedRef_1 = require("../structures/LinkedRef");
var QueueRef_1 = require("../structures/QueueRef");
var Usuario_1 = require("./Usuario");
var Estudiante = /** @class */ (function (_super) {
    __extends(Estudiante, _super);
    //public toJSON : string;
    // CONSTRUCTORES
    function Estudiante(id, nombre, user, correo, contrasena, programaEstudio) {
        var _this = _super.call(this, id, nombre, user, correo, contrasena, true) || this;
        _this.fromJSON = function (json) {
            var obj = JSON.parse(json);
            var estudianteAux = new Estudiante(obj.id, obj.nombre, obj.rol, obj.correo, obj.contrasena, obj.programaEstudio);
            var eventosGuardados = new LinkedRef_1.LinkedRef();
            /*for (let i = 0; i < eventosGuardados.size() ; i++) {
                obj.eventosGuardados;
            }*/
            return estudianteAux;
        };
        _this.eventosGuardados = new LinkedRef_1.LinkedRef();
        _this.eventosPropuestos = new LinkedRef_1.LinkedRef();
        _this.notificacionesPendientes = new QueueRef_1.QueueRef();
        _this.programaEstudio = programaEstudio;
        _this.rol = "ESTUDIANTE";
        return _this;
        //this.toJSON = JSON.stringify(this);
    }
    Estudiante.prototype.toJSON = function () {
        var _a, _b;
        var auxNotificaiones = this.getNotificacionesPendientes();
        var notPendientes = "[";
        var i = 0;
        for (i; i < auxNotificaiones.size(); i++) {
            notPendientes += JSON.stringify(auxNotificaiones.first());
            if (i != auxNotificaiones.size() - 1) {
                notPendientes += ',';
            }
            auxNotificaiones.enqueue(auxNotificaiones.first());
            auxNotificaiones.dequeue();
        }
        notPendientes += ']';
        var auxEventGuardados = this.getEventosGuardados();
        var eventosGuardados = "[";
        var j = 0;
        for (j; j < auxEventGuardados.size(); j++) {
            eventosGuardados += (_a = auxEventGuardados.getFirst()) === null || _a === void 0 ? void 0 : _a.toJSON();
            //eventosGuardados += JSON.stringify(auxEventGuardados.getFirst());
            if (j != auxEventGuardados.size() - 1) {
                eventosGuardados += ',';
            }
            auxEventGuardados.addLatest(auxEventGuardados.getFirst());
            auxEventGuardados.removeFirst();
        }
        eventosGuardados += ']';
        var auxEventPendientes = this.getEventosPropuestos();
        var eventPendientes = "[";
        var k = 0;
        for (k; k < auxEventPendientes.size(); k++) {
            eventPendientes += (_b = auxEventPendientes.getFirst()) === null || _b === void 0 ? void 0 : _b.toJSON();
            //eventPendientes += JSON.stringify(auxEventPendientes.getFirst());
            if (k != auxEventPendientes.size() - 1) {
                eventPendientes += ',';
            }
            auxEventPendientes.addLatest(auxEventPendientes.getFirst());
            auxEventPendientes.removeFirst();
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
        this.eventosPropuestos.addLatest(e);
        c.getPropuestasEventos().enqueue(e);
        // pendiente poder enviar ese evento al creador para que lo pueda autorizar
    };
    Estudiante.prototype.guardarEvento = function (nuevoEvento) {
        this.eventosGuardados.addLatest(nuevoEvento);
    };
    return Estudiante;
}(Usuario_1.Usuario));
exports.Estudiante = Estudiante;
