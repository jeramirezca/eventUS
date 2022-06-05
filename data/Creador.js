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
exports.Creador = void 0;
var LinkedRef_1 = require("../structures/LinkedRef");
var QueueRef_1 = require("../structures/QueueRef");
var Evento_1 = require("./Evento");
var Notificacion_1 = require("./Notificacion");
var Usuario_1 = require("./Usuario");
var Creador = /** @class */ (function (_super) {
    __extends(Creador, _super);
    //Constructor
    function Creador(id, nombre, correo, contrasenia, estado, dep) {
        var _this = _super.call(this, id, nombre, correo, contrasenia, estado) || this;
        //el super siempre se debe poner primero para evitar errores
        _this.eventosCreados = new LinkedRef_1.LinkedRef();
        _this.propuestasEventos = new QueueRef_1.QueueRef();
        _this.dependenciaAdmin = dep;
        return _this;
    }
    //Getters y Setters
    Creador.prototype.getEventosCreados = function () {
        return this.eventosCreados;
    };
    Creador.prototype.getDependenciaAdmin = function () {
        return this.dependenciaAdmin;
    };
    Creador.prototype.setDependenciaAdmin = function (dependenciaAdmin) {
        this.dependenciaAdmin = dependenciaAdmin;
    };
    Creador.prototype.getPropuestasEventos = function () {
        return this.propuestasEventos;
    };
    Creador.prototype.setPropuestasEventos = function (propuestasEventos) {
        this.propuestasEventos = propuestasEventos;
    };
    Creador.prototype.setEventosCreados = function (eventosCreados) {
        this.eventosCreados = eventosCreados;
    };
    //Metodos
    Creador.prototype.crearEvento = function (id, nombre, fechaInicio, fechaFinal, lugar, descripcion, creador, facultad) {
        var creado = false;
        if (id != null && nombre != null && fechaInicio != null && fechaFinal != null && descripcion != null && facultad != null) {
            this.eventosCreados.addLatest(new Evento_1.Evento(id, nombre, fechaInicio, fechaFinal, lugar, descripcion, this, facultad, creador));
            //lo comento para evitar errores por no tener usuario
            creado = true;
        }
        return creado;
    };
    Creador.prototype.editarEvento = function (fechaNuevaIn, fechaNuevaFin, nuevoLugar, e) {
        e.setFechaFinal(fechaNuevaFin);
        e.setFechaInicio(fechaNuevaIn);
        e.setLugar(nuevoLugar);
        if (this.eventosCreados.exists(e)) {
            this.eventosCreados.remove(this.eventosCreados.indexOf(e));
            this.eventosCreados.addLatest(e);
        }
        return e;
        //por defecto solo se pueden cambiar las fechas del evento, lugar y etiquetas
    };
    Creador.prototype.eliminarEvento = function (borrar) {
        var borrado = false;
        if (this.eventosCreados.exists(borrar)) {
            var a = this.eventosCreados.indexOf(borrar);
            this.eventosCreados.remove(a);
            borrado = true;
        }
        return borrado;
    };
    Creador.prototype.aceptarEvento = function () {
        //aniade el evento a eventos creados y lo saca de eventos propuestos si existe
        var aceptado = this.propuestasEventos.dequeue();
        this.eventosCreados.addLatest(aceptado);
        /*
        esto lo usabamos cuando eventos propuestos era una lista
        if(propuestasEventos.exists(aceptar)){
            int a = propuestasEventos.indexOf(aceptar);
            propuestasEventos.remove(a);
        }
           */
        //mandar una notificacion al estudiante de que su evento fue aceptado
        var user = aceptado.getProponente();
        user.getNotificaciones().push(new Notificacion_1.Notificacion(user.getId(), aceptado.getFechaInicio(), "tu evento fue aceptado: ' " + aceptado.getNombre() + " '"));
        return aceptado;
    };
    Creador.prototype.rechazarEvento = function () {
        //si el elemento existe en las propuestas eliminarlo
        var rechazado = this.propuestasEventos.dequeue();
        /*
       if(propuestasEventos.exists(aceptar)){
        int a = propuestasEventos.indexOf(aceptar);
        propuestasEventos.remove(a);
       }
       */
        //Pendiente implementar que al estudiante se le muestre una notificacion 
        var user = rechazado.getProponente();
        user.getNotificaciones().push(new Notificacion_1.Notificacion(user.getId(), rechazado.getFechaInicio(), "tu evento fue rechazado: ' " + rechazado.getNombre() + " '"));
    };
    Creador.prototype.crearEtiquetas = function (e, ev) {
        //volvemos minuscula para no tener problemas con mayusculas
        e = e.toLowerCase();
        var arregloEtiquetas = ev.getEtiquetas();
        switch (e) {
            case "salud":
                arregloEtiquetas[4] = e;
                break;
            case "arte":
                arregloEtiquetas[0] = e;
                break;
            case "entretenimiento":
                arregloEtiquetas[2] = e;
                break;
            case "academia":
                arregloEtiquetas[1] = e;
                break;
            case "deporte":
                arregloEtiquetas[3] = e;
                break;
            default:
                console.log("etiqueta no valida, intente de nuevo");
                break;
        }
    };
    return Creador;
}(Usuario_1.Usuario));
exports.Creador = Creador;
