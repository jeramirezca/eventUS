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
var Evento_1 = require("./Evento");
var Usuario_1 = require("./Usuario");
var Creador = /** @class */ (function (_super) {
    __extends(Creador, _super);
    //Constructor
    function Creador(id, nombre, usuario, correo, contrasenia, estado, dep) {
        var _this = _super.call(this, id, nombre, usuario, correo, contrasenia, estado) || this;
        //el super siempre se debe poner primero para evitar errores
        _this.eventosCreados = new Array();
        _this.propuestasEventos = new Array();
        _this.dependenciaAdmin = dep;
        _this.rol = "CREADOR";
        return _this;
    }
    Creador.prototype.toJSON = function () {
        var auxPropEventos = this.propuestasEventos;
        var eventosPropuestos = "[";
        var i = 0;
        for (i; i < auxPropEventos.length; i++) {
            eventosPropuestos += auxPropEventos[0].toJSON();
            if (i != auxPropEventos.length - 1) {
                eventosPropuestos += ',';
            }
        }
        eventosPropuestos += ']';
        var auxEventCreados = this.eventosCreados;
        var eventosCreados = "[";
        var k = 0;
        for (k; k < auxEventCreados.length; k++) {
            eventosCreados += auxEventCreados[0].toJSON();
            if (k != auxEventCreados.length - 1) {
                eventosCreados += ',';
            }
        }
        eventosCreados += ']';
        var creador = '{' +
            '"rol":"ESTUDIANTE",' +
            '"id":"' + this.getId() + '",' +
            '"nombre":"' + this.getNombre() + '",' +
            '"usuario":"' + this.getUsuario() + '",' +
            '"correo":"' + this.getCorreo() + '",' +
            '"contrasena":"' + this.getContrasena() + '",' +
            '"autorizado":' + this.getAutorizado() + ',' +
            '"dependenciaAdmin":"' + this.dependenciaAdmin + '",' +
            '"eventosCreados":' + eventosCreados + ',' +
            '"propuestasEvento":' + eventosPropuestos +
            '}';
        return creador;
    };
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
    Creador.prototype.crearEvento = function (id, nombre, fecha, horaInicio, horaFin, lugar, descripcion, creador, facultad, idProponente) {
        var creado = false;
        if (id != null && nombre != null && fecha != null && horaInicio != null && descripcion != null && facultad != null) {
            this.eventosCreados.push(new Evento_1.Evento(id, nombre, fecha, horaInicio, horaFin, lugar, descripcion, this.getId(), facultad, idProponente, true));
            //lo comento para evitar errores por no tener usuario
            creado = true;
        }
        return creado;
    };
    Creador.prototype.editarEvento = function (fechaNueva, horaNuevaInicio, horaNuevaFin, nuevoLugar, e) {
        e.setFecha(fechaNueva);
        e.setHoraInicio(horaNuevaInicio);
        e.setHoraFin(horaNuevaFin);
        e.setLugar(nuevoLugar);
        if (this.eventosCreados.includes(e)) {
            this.eventosCreados.splice((this.eventosCreados.indexOf(e)), 1);
            this.eventosCreados.push(e);
        }
        return e;
        //por defecto solo se pueden cambiar las fechas del evento, lugar y etiquetas
    };
    Creador.prototype.eliminarEvento = function (borrar) {
        var borrado = false;
        if (this.eventosCreados.includes(borrar)) {
            var a = this.eventosCreados.indexOf(borrar);
            this.eventosCreados.splice(a, 1);
            borrado = true;
        }
        return borrado;
    };
    Creador.prototype.addEvento = function (e) {
        this.eventosCreados.push(e);
    };
    Creador.prototype.aceptarEvento = function () {
        //aniade el evento a eventos creados y lo saca de eventos propuestos si existe
        var aceptado = this.propuestasEventos.shift();
        this.eventosCreados.push(aceptado);
        /*
        esto lo usabamos cuando eventos propuestos era una lista
        if(propuestasEventos.exists(aceptar)){
            int a = propuestasEventos.indexOf(aceptar);
            propuestasEventos.remove(a);
        }
           */
        //mandar una notificacion al estudiante de que su evento fue aceptado
        /*let usuario: string = aceptado.getProponente();

        usuario.getNotificaciones().push(new Notificacion(usuario.getId(), aceptado.getFechaInicio(), "tu evento fue aceptado: ' "+aceptado.getNombre()+" '"));
        */
        //Debido a las nodificaciones para el manejo de archivo no se pueden obtener directamente los usuarios del evento.
        return aceptado;
    };
    Creador.prototype.rechazarEvento = function () {
        //si el elemento existe en las propuestas eliminarlo
        var rechazado = this.propuestasEventos.shift();
        /*
       if(propuestasEventos.exists(aceptar)){
        int a = propuestasEventos.indexOf(aceptar);
        propuestasEventos.remove(a);
       }
       */
        //Pendiente implementar que al estudiante se le muestre una notificacion 
        /*let usuario:Usuario = rechazado.getProponente();
        usuario.getNotificaciones().push(new Notificacion(usuario.getId(), rechazado.getFechaInicio(), "tu evento fue rechazado: ' "+ rechazado.getNombre()+" '"));
        */
        //Debido a las nodificaciones para el manejo de archivo no se pueden obtener directamente los usuarios del evento.
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
    Creador.fromJSON = function (json) {
        var obj = JSON.parse(json);
        var creadorAux = new Creador(obj.id, obj.nombre, obj.usuario, obj.correo, obj.contrasena, obj.autorizado, obj.dependenciaAdmin);
        var auxEventosCreados = new Array();
        for (var i = 0; i < obj.eventosCreados.length; i++) {
            var aux = obj.eventosCreados[i];
            var auxEvent = Evento_1.Evento.fromJSON(JSON.stringify(aux));
            auxEventosCreados.push(auxEvent);
        }
        var auxPropuestasEventos = new Array();
        for (var i = 0; i < obj.propuestasEvento.length; i++) {
            var aux = obj.propuestasEvento[i];
            var auxEvent = Evento_1.Evento.fromJSON(JSON.stringify(aux));
            auxPropuestasEventos.push(auxEvent);
        }
        creadorAux.setEventosCreados(auxEventosCreados);
        creadorAux.setPropuestasEventos(auxPropuestasEventos);
        return creadorAux;
    };
    return Creador;
}(Usuario_1.Usuario));
exports.Creador = Creador;
