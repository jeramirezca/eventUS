"use strict";
exports.__esModule = true;
exports.Evento = void 0;
var Evento = /** @class */ (function () {
    //Constructor
    function Evento(id, nombre, fechaInicio, fechaFinal, lugar, descripcion, creador, facultad, proponente, aforo, etiquetas) {
        this.fromJSON = function (json) {
            var obj = JSON.parse(json);
            return new Evento(obj.id, obj.nombre, obj.fechaInicio, obj.fechaFinal, obj.lugar, obj.descripcion, obj.creador, obj.facultad, obj.proponente, obj.aforo, obj.etiquetas);
        };
        this.id = id;
        this.nombre = nombre;
        this.fechaInicio = fechaInicio;
        this.fechaFinal = fechaFinal;
        this.lugar = lugar;
        this.facultad = facultad;
        this.descripcion = descripcion;
        this.creador = creador;
        this.proponente = proponente;
        this.estado = undefined;
        this.aforo = aforo;
        if (etiquetas != undefined) {
            this.etiquetas = etiquetas;
        }
        else {
            this.etiquetas = new Array();
        }
        this.toJSON = JSON.stringify(this);
    }
    //Setters y getters
    Evento.prototype.getProponente = function () {
        return this.proponente;
    };
    Evento.prototype.setProponente = function (proponente) {
        this.proponente = proponente;
    };
    Evento.prototype.getId = function () {
        return this.id;
    };
    Evento.prototype.setId = function (id) {
        this.id = id;
    };
    Evento.prototype.getNombre = function () {
        return this.nombre;
    };
    Evento.prototype.setNombre = function (nombre) {
        this.nombre = nombre;
    };
    Evento.prototype.getFechaInicio = function () {
        return this.fechaInicio;
    };
    Evento.prototype.setFechaInicio = function (fechaInicio) {
        this.fechaInicio = fechaInicio;
    };
    Evento.prototype.getFechaFinal = function () {
        return this.fechaFinal;
    };
    Evento.prototype.setFechaFinal = function (fechaFinal) {
        this.fechaFinal = fechaFinal;
    };
    Evento.prototype.getLugar = function () {
        return this.lugar;
    };
    Evento.prototype.setLugar = function (lugar) {
        this.lugar = lugar;
    };
    Evento.prototype.getDescripcion = function () {
        return this.descripcion;
    };
    Evento.prototype.setDescripcion = function (descripcion) {
        this.descripcion = descripcion;
    };
    Evento.prototype.getCreador = function () {
        return this.creador;
    };
    Evento.prototype.setCreador = function (creador) {
        this.creador = creador;
    };
    Evento.prototype.getEstado = function () {
        return this.estado;
    };
    Evento.prototype.setEstado = function (estado) {
        this.estado = estado;
    };
    Evento.prototype.getAforo = function () {
        return this.aforo;
    };
    Evento.prototype.setAforo = function (aforo) {
        this.aforo = aforo;
    };
    Evento.prototype.getEtiquetas = function () {
        return this.etiquetas;
    };
    Evento.prototype.setEtiquetas = function (etiquetas) {
        this.etiquetas = etiquetas;
    };
    //Métodos:
    Evento.prototype.asignarEtiqueta = function (etiqueta, posicion) {
        var insertado = false;
        if (posicion < 5) {
            this.etiquetas[posicion] = etiqueta;
            insertado = true;
        }
        return insertado;
    };
    Evento.prototype.eliminarEtiqueta = function (posicion) {
        var eliminado = false;
        if (posicion < 5) {
            this.etiquetas[posicion] = "";
            eliminado = true;
        }
        return eliminado;
    };
    Evento.prototype.getEtiqueta = function (posicion) {
        return (this.etiquetas[posicion]);
    };
    Evento.prototype.setFacultad = function (f) {
        this.facultad = f;
    };
    Evento.prototype.getFacultad = function () {
        return this.facultad;
    };
    Evento.prototype.toString = function () {
        var cadena = "";
        cadena += "Nombre: " + this.getNombre() + "\n" + "Fi " + this.getFechaInicio() + " Ff " + this.getFechaFinal();
        cadena += "\n" + "Lugar " + this.getLugar() + "\n" + "Descripcion: " + this.getDescripcion() + "\n";
        cadena += "Propone: " + this.creador.getDependenciaAdmin();
        return cadena;
    };
    return Evento;
}());
exports.Evento = Evento;
