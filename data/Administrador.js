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
var Creador_1 = require("./Creador");
var Estudiante_1 = require("./Estudiante");
var Usuario_1 = require("./Usuario");
var Administrador = /** @class */ (function (_super) {
    __extends(Administrador, _super);
    //Constructor
    function Administrador(id, nombre, usuario, correo, contrasena, autorizado) {
        var _this = _super.call(this, id, nombre, usuario, correo, contrasena, autorizado) || this;
        _this.rol = "ADMINISTRADOR";
        _this.creadoresVerificar = new Array();
        _this.estudiantesRegistrados = new Array();
        _this.creadoresRegistrados = new Array();
        return _this;
    }
    Administrador.prototype.toJSON = function () {
        var auxCreaVerificar = this.creadoresVerificar;
        var creadoresVerificar = "[";
        var i = 0;
        for (i; i < auxCreaVerificar.length; i++) {
            creadoresVerificar += auxCreaVerificar[i].toJSON();
            if (i != auxCreaVerificar.length - 1) {
                creadoresVerificar += ',';
            }
        }
        creadoresVerificar += ']';
        var auxCreaRegistrados = this.creadoresRegistrados;
        var creadoresRegistrados = "[";
        var j = 0;
        for (j; j < auxCreaRegistrados.length; j++) {
            creadoresRegistrados += auxCreaRegistrados[j].toJSON();
            //eventPendientes += JSON.stringify(auxEventPendientes.getFirst());
            if (j != auxCreaRegistrados.length - 1) {
                creadoresRegistrados += ',';
            }
        }
        creadoresRegistrados += ']';
        var auxEstRegistrados = this.estudiantesRegistrados;
        var estudiantesRegistrados = "[";
        var k = 0;
        for (k; k < auxEstRegistrados.length; k++) {
            estudiantesRegistrados += auxEstRegistrados[k].toJSON();
            if (k != auxEstRegistrados.length - 1) {
                estudiantesRegistrados += ',';
            }
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
    Administrador.prototype.autorizarUsuario = function (id) {
        for (var j = 0; j < this.creadoresVerificar.length; j++) {
            if (this.creadoresVerificar[j].id == id) {
                this.creadoresVerificar[j].autorizado = true;
                this.creadoresRegistrados.push(this.creadoresVerificar[j]);
                this.creadoresVerificar.splice(j, 1);
            }
        }
    };
    Administrador.prototype.desautorizarUsuario = function () {
        // proceso donde se desautoriza (Trabaja sobre
        var user = this.creadoresVerificar[0];
        user.setAutorizado(false); // usuariosVerificar)
        /*
         * Cuando se desautorice un usuario, su estado va a cambiar a desautorizado y
         * debera ser
         * casteado a estudiante.
         */
        this.creadoresVerificar.shift(); // desencolar()
    };
    Administrador.prototype.eliminarEstudiante = function (id) {
        var k = 0;
        for (k; k < this.estudiantesRegistrados.length; k++) {
            if (this.estudiantesRegistrados[k].id == id) {
                console.log("encontrado");
                console.log(this.estudiantesRegistrados.length);
                this.estudiantesRegistrados.splice(k, 1);
                console.log(this.estudiantesRegistrados.length);
                return;
            }
        }
    };
    Administrador.prototype.eliminarCreador = function (id) {
        var k = 0;
        for (k; k < this.creadoresRegistrados.length; k++) {
            if (this.creadoresRegistrados[k].id == id) {
                this.creadoresRegistrados.splice(k, 1);
                return;
            }
        }
        k = 0;
        for (k; k < this.creadoresVerificar.length; k++) {
            if (this.creadoresVerificar[k].id == id) {
                this.creadoresVerificar.splice(k, 1);
                return;
            }
        }
    };
    Administrador.prototype.filtrarUsuarios = function (num) {
        if (num == 1) {
            if (this.estudiantesRegistrados[0] instanceof Estudiante_1.Estudiante) {
                console.log(this.estudiantesRegistrados[0] + "Estudiante");
            }
        }
        else if (num == 2) {
            if (this.estudiantesRegistrados[0] instanceof Creador_1.Creador) {
                console.log(this.estudiantesRegistrados[0] + "Creador");
            }
        }
        else {
            console.log("Tipo de usuario no identificado.");
        }
    };
    Administrador.prototype.getListaUsuarios = function () {
        var listaUsuarios = new Array();
        for (var i = 0; i < this.estudiantesRegistrados.length; ++i) {
            listaUsuarios.push(this.estudiantesRegistrados[i]);
        }
        for (var i = 0; i < this.creadoresRegistrados.length; ++i) {
            listaUsuarios.push(this.creadoresRegistrados[i]);
        }
        return listaUsuarios;
    };
    Administrador.prototype.getListaTotalUsuarios = function () {
        var listaUsuarios = new Array();
        for (var i = 0; i < this.estudiantesRegistrados.length; ++i) {
            listaUsuarios.push(this.estudiantesRegistrados[i]);
        }
        for (var i = 0; i < this.creadoresRegistrados.length; ++i) {
            listaUsuarios.push(this.creadoresRegistrados[i]);
        }
        for (var i = 0; i < this.creadoresVerificar.length; ++i) {
            listaUsuarios.push(this.creadoresVerificar[i]);
        }
        return listaUsuarios;
    };
    Administrador.prototype.autenticacion = function (usuario, clave) {
        var listaUsuarios = this.getListaUsuarios();
        if (usuario == this.usuario && clave == this.contrasena) {
            return this;
        }
        for (var i = 0; i < listaUsuarios.length; ++i) {
            if (usuario == listaUsuarios[i].usuario && clave == listaUsuarios[i].contrasena) {
                return listaUsuarios[i];
            }
        }
        return new Usuario_1.Usuario("", "", "", "", "", false);
    };
    Administrador.prototype.creadorNoAutorizado = function (usuario) {
        for (var i = 0; i < this.creadoresVerificar.length; ++i) {
            if (usuario == this.creadoresVerificar[i].usuario) {
                return true;
            }
        }
        return false;
    };
    Administrador.prototype.getListaEventos = function () {
        var listaEventos = new Array();
        for (var i = 0; i < this.creadoresRegistrados.length; ++i) {
            var eventosCreador = this.creadoresRegistrados[i].eventosCreados;
            for (var j = 0; j < eventosCreador.length; ++j) {
                listaEventos.push(eventosCreador[j]);
            }
        }
        console.log(listaEventos);
        return listaEventos;
    };
    Administrador.prototype.agregarEstudiante = function (estudiante) {
        this.estudiantesRegistrados.push(estudiante);
    };
    Administrador.prototype.agregarCreador = function (creador) {
        this.creadoresVerificar.push(creador);
    };
    Administrador.prototype.modificarEstudiante = function (id, nombre, usuario, correo) {
        var k = 0;
        for (k; k < this.estudiantesRegistrados.length; k++) {
            if (this.estudiantesRegistrados[k].id == id) {
                this.estudiantesRegistrados[k].nombre = nombre;
                this.estudiantesRegistrados[k].usuario = usuario;
                this.estudiantesRegistrados[k].correo = correo;
                return;
            }
        }
    };
    Administrador.prototype.modificarCreador = function (id, nombre, usuario, correo) {
        var k = 0;
        for (k; k < this.creadoresRegistrados.length; k++) {
            if (this.creadoresRegistrados[k].id == id) {
                this.creadoresRegistrados[k].nombre = nombre;
                this.creadoresRegistrados[k].usuario = usuario;
                this.creadoresRegistrados[k].correo = correo;
                return;
            }
        }
    };
    Administrador.prototype.buscarCreador = function (id) {
        var k = 0;
        for (k; k < this.creadoresRegistrados.length; k++) {
            if (this.creadoresRegistrados[k].id == id) {
                return this.creadoresRegistrados[k];
            }
        }
        return this.creadoresRegistrados[0];
    };
    Administrador.prototype.buscarEstudiante = function (id) {
        var k = 0;
        for (k; k < this.estudiantesRegistrados.length; k++) {
            if (this.estudiantesRegistrados[k].id == id) {
                return this.estudiantesRegistrados[k];
            }
        }
        return this.estudiantesRegistrados[0];
    };
    Administrador.prototype.guardarEventoEstudiante = function (ev, id) {
        var estudiante = this.buscarEstudiante(id);
    };
    Administrador.fromJSON = function (json) {
        var obj = JSON.parse(json);
        var adminAux = new Administrador(obj.id, obj.nombre, obj.usuario, obj.correo, obj.contrasena, true);
        //console.log( adminAux);
        if (obj.creadoresVerificar != undefined) {
            var auxListaCreadores = new Array();
            for (var i = 0; i < obj.creadoresVerificar.length; i++) {
                var aux = obj.creadoresVerificar[i];
                var auxCrea = Creador_1.Creador.fromJSON(JSON.stringify(JSON.parse(JSON.stringify(aux))));
                auxListaCreadores.push(auxCrea);
                /*  if (auxCrea!=undefined){
                    Administrador.creadoresVerificar.push(auxCrea);
                 } */
            }
            adminAux.creadoresVerificar = auxListaCreadores;
            //console.log(auxListaCreadores);
        }
        if (obj.creadoresRegistrados != undefined) {
            var auxListaRegistrados = new Array();
            for (var i = 0; i < obj.creadoresRegistrados.length; i++) {
                var aux = obj.creadoresRegistrados[i];
                var auxCrea = Creador_1.Creador.fromJSON(JSON.stringify(JSON.parse(JSON.stringify(aux))));
                //console.log(auxCrea);
                /* Administrador.creadoresRegistrados.push(auxCrea); */
                auxListaRegistrados.push(auxCrea);
            }
            adminAux.creadoresRegistrados = auxListaRegistrados;
        }
        if (obj.estudiantesRegistrados != undefined) {
            var auxListaEstudiantes = new Array();
            for (var i = 0; i < obj.estudiantesRegistrados.length; i++) {
                var aux = obj.estudiantesRegistrados[i];
                var auxEst = Estudiante_1.Estudiante.fromJSON(JSON.stringify(JSON.parse(JSON.stringify(aux))));
                //console.log(auxEst);
                /*             Administrador.estudiantesRegistrados.push(auxEst); */
                auxListaEstudiantes.push(auxEst);
            }
            adminAux.estudiantesRegistrados = auxListaEstudiantes;
        }
        //console.log(adminAux);
        return adminAux;
    };
    return Administrador;
}(Usuario_1.Usuario));
exports.Administrador = Administrador;
