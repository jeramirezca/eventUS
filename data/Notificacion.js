"use strict";
exports.__esModule = true;
exports.Notificacion = void 0;
var Notificacion = /** @class */ (function () {
    //Constructor
    function Notificacion(i, f, d) {
        this.fromJSON = function (json) {
            var obj = JSON.parse(json);
            return new Notificacion(obj.id, obj.fecha, obj.descripcion);
        };
        this.id = i;
        this.fecha = f;
        if (d != undefined) {
            this.descripcion = d;
        }
        else {
            this.descripcion = "este evento no tiene descripcion";
        }
        this.toJSON = JSON.stringify(this);
    }
    Notificacion.prototype.getId = function () {
        return this.id;
    };
    Notificacion.prototype.setId = function (id) {
        this.id = id;
    };
    Notificacion.prototype.geFecha = function () {
        return this.fecha;
    };
    Notificacion.prototype.setFecha = function (fecha) {
        this.fecha = fecha;
    };
    Notificacion.prototype.getDescription = function () {
        return this.descripcion;
    };
    Notificacion.prototype.setDescription = function (description) {
        this.descripcion = description;
    };
    Notificacion.prototype.toString = function () {
        var c = "";
        c += "\n" + "ID: " + this.id + "\n" + "FECHA: " + this.fecha + "\n" + "DESCRIPCION " + this.descripcion;
        return c;
    };
    return Notificacion;
}());
exports.Notificacion = Notificacion;
