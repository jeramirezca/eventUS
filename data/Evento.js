"use strict";
exports.__esModule = true;
exports.Evento = void 0;
var Evento = /** @class */ (function () {
    //public toJSON : string;
    //Constructor
    function Evento(id, nombre, fecha, horaInicio, horaFin, lugar, descripcion, idCreador, facultad, idProponente, estado, aforo, etiquetas) {
        this.id = id;
        this.nombre = nombre;
        this.fecha = fecha;
        this.horaInicio = horaInicio;
        this.horaFin = horaFin;
        this.lugar = lugar;
        this.facultad = facultad;
        this.descripcion = descripcion;
        this.idCreador = idCreador;
        this.idProponente = idProponente;
        this.estado = estado;
        this.aforo = aforo;
        if (etiquetas != undefined) {
            this.etiquetas = etiquetas;
        }
        else {
            this.etiquetas = new Array();
        }
        this.priority = 0;
    }
    Evento.prototype.toJSON = function () {
        var etiq = "[";
        var i = 0;
        for (i; i < this.etiquetas.length - 1; i++) {
            etiq += '"' + this.etiquetas[i] + '"';
            etiq += ',';
        }
        etiq += '"' + this.etiquetas[this.etiquetas.length - 1] + '"';
        etiq += ']';
        var evento = '{' +
            '"id":"' + this.getId() + '",' +
            '"nombre":"' + this.getNombre() + '",' +
            '"fecha":"' + this.getFecha().getFullYear() + '-' + (this.getFecha().getMonth() + 1) + '-' + this.getFecha().getDate() + '",' +
            '"horaInicio":"' + this.getHoraInicio() + '",' +
            '"horaFin":"' + this.getHoraFin() + '",' +
            '"lugar":"' + this.getLugar() + '",' +
            '"descripcion":"' + this.getDescripcion() + '",' +
            '"facultad":"' + this.getFacultad() + '",' +
            '"idCreador":"' + this.getCreador() + '",' +
            '"idProponente":"' + this.getProponente() + '",' +
            '"estado":' + this.getEstado() + ',' +
            '"aforo":' + this.getAforo() + ',' +
            '"etiquetas":' + etiq +
            '}';
        return evento;
    };
    //Setters y getters
    Evento.prototype.getPriority = function (facultad) {
        var aux = '';
        console.log(facultad + "  " + this.facultad);
        if (facultad == this.facultad) {
            aux += '0';
        }
        else {
            if (facultad == 'Bienestar') {
                aux += '1';
            }
            else {
                aux += '2';
            }
        }
        aux += this.fecha.getFullYear().toString();
        if (this.fecha.getMonth().toString().length == 1) {
            aux += '0';
            aux += this.fecha.getMonth().toString();
        }
        else {
            aux += this.fecha.getMonth().toString();
        }
        if (this.fecha.getDate().toString().length == 1) {
            aux += '0';
            aux += this.fecha.getDate().toString();
        }
        else {
            aux += this.fecha.getDate().toString();
        }
        this.priority = parseInt(aux);
        return this.priority;
    };
    Evento.prototype.getProponente = function () {
        return this.idProponente;
    };
    Evento.prototype.setProponente = function (proponente) {
        this.idProponente = proponente;
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
    Evento.prototype.getFecha = function () {
        return this.fecha;
    };
    Evento.prototype.setFecha = function (fecha) {
        this.fecha = fecha;
    };
    Evento.prototype.getHoraInicio = function () {
        return this.horaInicio;
    };
    Evento.prototype.setHoraInicio = function (horaInicio) {
        this.horaInicio = horaInicio;
    };
    Evento.prototype.getHoraFin = function () {
        return this.horaFin;
    };
    Evento.prototype.setHoraFin = function (horaFin) {
        this.horaFin = horaFin;
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
        return this.idCreador;
    };
    Evento.prototype.setCreador = function (creador) {
        this.idCreador = creador;
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
    Evento.fromJSON = function (json) {
        var obj = JSON.parse(json);
        return new Evento(obj.id, obj.nombre, new Date(obj.fecha), obj.horaInicio, obj.horaFin, obj.lugar, obj.descripcion, obj.creador, obj.facultad, obj.idProponente, obj.estado, obj.aforo, obj.etiquetas);
    };
    return Evento;
}());
exports.Evento = Evento;
