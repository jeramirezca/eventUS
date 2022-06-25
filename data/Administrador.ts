import { LinkedRef } from "../structures/LinkedRef";
import { QueueRef } from "../structures/QueueRef";
import { Creador } from './Creador';
import { Estudiante } from "./Estudiante";
import { Usuario } from "./Usuario";
import { Evento } from "./Evento";

export class Administrador extends Usuario {
    public creadoresVerificar: Array<Creador>;
    public estudiantesRegistrados: Array<Estudiante>;
    public creadoresRegistrados: Array<Creador>;

    //Constructor

    public constructor(id: string, nombre: string, usuario: string, correo: string, contrasena: string, autorizado: boolean) {
        super(id, nombre, usuario, correo, contrasena, autorizado);
        this.rol = "ADMINISTRADOR";
        this.creadoresVerificar = new Array<Creador>();
        this.estudiantesRegistrados = new Array<Estudiante>();
        this.creadoresRegistrados = new Array<Creador>();
    }

    public static fromJSON = (json: string): Administrador => {
        let obj = JSON.parse(json);
        let adminAux = new Administrador(obj.id, obj.nombre, obj.usuario, obj.correo, obj.contrasena, true);
        //console.log( adminAux);

        if (obj.creadoresVerificar != undefined) {
            let auxListaCreadores = new Array<Creador>();
            for (let i: number = 0; i < obj.creadoresVerificar.length; i++) {
                let aux = obj.creadoresVerificar[i];
                let auxCrea: Creador = Creador.fromJSON(JSON.stringify(JSON.parse(JSON.stringify(aux))));
                auxListaCreadores.push(auxCrea);
                /*  if (auxCrea!=undefined){
                    Administrador.creadoresVerificar.push(auxCrea); 
                 } */

            }
            adminAux.creadoresVerificar = auxListaCreadores;
            //console.log(auxListaCreadores);
        }

        if (obj.creadoresRegistrados != undefined) {
            let auxListaRegistrados = new Array<Creador>();
            for (let i: number = 0; i < obj.creadoresRegistrados.length; i++) {

                let aux = obj.creadoresRegistrados[i];
                let auxCrea: Creador = Creador.fromJSON(JSON.stringify(JSON.parse(JSON.stringify(aux))));
                //console.log(auxCrea);
                /* Administrador.creadoresRegistrados.push(auxCrea); */
                auxListaRegistrados.push(auxCrea);
            }
            adminAux.creadoresRegistrados = auxListaRegistrados;
        }

        if (obj.estudiantesRegistrados != undefined) {
            let auxListaEstudiantes = new Array<Estudiante>();
            for (let i: number = 0; i < obj.estudiantesRegistrados.length; i++) {
                let aux = obj.estudiantesRegistrados[i];
                let auxEst: Estudiante = Estudiante.fromJSON(JSON.stringify(JSON.parse(JSON.stringify(aux))));
                //console.log(auxEst);
                /*             Administrador.estudiantesRegistrados.push(auxEst); */
                auxListaEstudiantes.push(auxEst);
            }
            adminAux.estudiantesRegistrados = auxListaEstudiantes;
        }
        //console.log(adminAux);
        return adminAux
    };

    public toJSON(): string {
        let auxCreaVerificar: Array<Creador> = this.creadoresVerificar;
        let creadoresVerificar: string = "[";
        let i: number = 0;
        for (i; i < auxCreaVerificar.length; i++) {
            creadoresVerificar += auxCreaVerificar[i].toJSON();
            if (i != auxCreaVerificar.length - 1) {
                creadoresVerificar += ',';
            }
        }
        creadoresVerificar += ']';

        let auxCreaRegistrados: Array<Creador> = this.creadoresRegistrados;
        let creadoresRegistrados: string = "[";
        let j: number = 0;
        for (j; j < auxCreaRegistrados.length; j++) {
            creadoresRegistrados += auxCreaRegistrados[j].toJSON();
            //eventPendientes += JSON.stringify(auxEventPendientes.getFirst());
            if (j != auxCreaRegistrados.length - 1) {
                creadoresRegistrados += ',';
            }
        }
        creadoresRegistrados += ']';

        let auxEstRegistrados: Array<Estudiante> = this.estudiantesRegistrados;
        let estudiantesRegistrados: string = "[";
        let k: number = 0;
        for (k; k < auxEstRegistrados.length; k++) {
            estudiantesRegistrados += auxEstRegistrados[k].toJSON();

            if (k != auxEstRegistrados.length - 1) {
                estudiantesRegistrados += ',';
            }
        }
        estudiantesRegistrados += ']';

        let administrador = '{' +
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
    }

    //Métodos

    public autorizarUsuario(id: string): void {
        for (var j=0; j < this.creadoresVerificar.length; j++) {
            if(this.creadoresVerificar[j].id == id){
                this.creadoresVerificar[j].autorizado = true;
                this.creadoresRegistrados.push(this.creadoresVerificar[j]);
                this.creadoresVerificar.splice(j, 1);
            }
        }
    }

    public desautorizarUsuario(): void {
        // proceso donde se desautoriza (Trabaja sobre
        let user: Usuario = this.creadoresVerificar[0] as Usuario;
        user.setAutorizado(false);                                                 // usuariosVerificar)
        /*
         * Cuando se desautorice un usuario, su estado va a cambiar a desautorizado y
         * debera ser
         * casteado a estudiante.
         */
        this.creadoresVerificar.shift(); // desencolar()
    }

    public eliminarEstudiante(id: string): void {
        let k: number = 0;
        for (k; k < this.estudiantesRegistrados.length; k++) {
            if (this.estudiantesRegistrados[k].id == id) {
                console.log("encontrado")
                console.log(this.estudiantesRegistrados.length)
                this.estudiantesRegistrados.splice(k, 1);
                console.log(this.estudiantesRegistrados.length)
                return;
            }
        }
    }
    public eliminarCreador(id: string): void {
        let k: number = 0;
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
    }
    public filtrarUsuarios(num: number): void {
        if (num == 1) {
            if (this.estudiantesRegistrados[0] instanceof Estudiante) {
                console.log(this.estudiantesRegistrados[0] + "Estudiante");
            }
        } else if (num == 2) {
            if (this.estudiantesRegistrados[0] instanceof Creador) {
                console.log(this.estudiantesRegistrados[0] + "Creador");
            }
        } else {
            console.log("Tipo de usuario no identificado.");
        }
    }
    public getListaUsuarios(): Array<Usuario> {
        var listaUsuarios = new Array<Usuario>();
        for(var i=0; i<this.estudiantesRegistrados.length; ++i) { 
            listaUsuarios.push(this.estudiantesRegistrados[i]);
        }
        for(var i=0; i<this.creadoresRegistrados.length; ++i) { 
            listaUsuarios.push(this.creadoresRegistrados[i]);
        }
        return listaUsuarios;
    }
    public getListaTotalUsuarios(): Array<Usuario> {
        var listaUsuarios = new Array<Usuario>();
        for(var i=0; i<this.estudiantesRegistrados.length; ++i) { 
            listaUsuarios.push(this.estudiantesRegistrados[i]);
        }
        for(var i=0; i<this.creadoresRegistrados.length; ++i) { 
            listaUsuarios.push(this.creadoresRegistrados[i]);
        }
        for(var i=0; i<this.creadoresVerificar.length; ++i) { 
            listaUsuarios.push(this.creadoresVerificar[i]);
        }
        return listaUsuarios;
    }
    public autenticacion(usuario: string, clave: string): Usuario {
        var listaUsuarios = this.getListaUsuarios();
        if (usuario == this.usuario && clave == this.contrasena) {
            return this;
        }
        for(var i=0; i<listaUsuarios.length; ++i) { 
            if (usuario == listaUsuarios[i].usuario && clave == listaUsuarios[i].contrasena) {
                return listaUsuarios[i];
            }
        }
        return new Usuario("", "", "", "", "", false);

    }

    public creadorNoAutorizado(usuario: string): boolean {
        for(var i=0; i<this.creadoresVerificar.length; ++i) { 
            if (usuario == this.creadoresVerificar[i].usuario) {
                return true;
            }
        }
        return false
    }

    public getListaEventos(): Array<Evento> {
        var listaEventos = new Array<Evento>();
        for(var i=0; i<this.creadoresRegistrados.length; ++i) { 
            var eventosCreador = this.creadoresRegistrados[i].eventosCreados;
            for(var j=0; j< eventosCreador.length; ++j) { 
                listaEventos.push(eventosCreador[j]);
            }
        }
        return listaEventos;
    }

    public getListaEventosFiltrados(): Array<Evento> {
        var listaEventos = new Array<Evento>;
        listaEventos = this.getListaEventos();
        var eventosAux = new Array<Evento>;
        var hoy = new Date(Date.now());
        for(var i=0; i<listaEventos.length; ++i) { 
            if ( listaEventos[i].fecha.getFullYear() > hoy.getFullYear()){
                eventosAux.push(listaEventos[i]);
            }else if(listaEventos[i].fecha.getFullYear() == hoy.getFullYear() && listaEventos[i].fecha.getMonth()+1 > hoy.getMonth()+1){
                eventosAux.push(listaEventos[i]);
            }else if(listaEventos[i].fecha.getFullYear() == hoy.getFullYear() == listaEventos[i].fecha.getMonth()+1 > hoy.getMonth()+1 && listaEventos[i].fecha.getDate() > hoy.getDate()){
                eventosAux.push(listaEventos[i]);
            }
        }
        return eventosAux;
    }

    public agregarEstudiante(estudiante: Estudiante){
        this.estudiantesRegistrados.push(estudiante);
    }
    public agregarCreador(creador: Creador){
        this.creadoresVerificar.push(creador);
    }
    public modificarEstudiante(id: string, nombre : string, usuario: string,  correo: string){
        let k: number = 0;
        for (k; k < this.estudiantesRegistrados.length; k++) {
            if (this.estudiantesRegistrados[k].id == id) {
                this.estudiantesRegistrados[k].nombre = nombre;
                this.estudiantesRegistrados[k].usuario = usuario;
                this.estudiantesRegistrados[k].correo = correo;
                return;
            }
        }
    }
    public modificarCreador(id: string, nombre : string, usuario: string,  correo: string){
        let k: number = 0;
        for (k; k < this.creadoresRegistrados.length; k++) {
            if (this.creadoresRegistrados[k].id == id) {
                this.creadoresRegistrados[k].nombre = nombre;
                this.creadoresRegistrados[k].usuario = usuario;
                this.creadoresRegistrados[k].correo = correo;
                return;
            }
        }
    }

    public buscarCreador(id:string): Creador{
        let k: number = 0;
        for (k; k < this.creadoresRegistrados.length; k++) {
            if (this.creadoresRegistrados[k].id == id) {
                return this.creadoresRegistrados[k];
            }
        }
        return new Creador("","","","","",true,"");
    }

    public buscarEstudiante(id:string): Estudiante{
        let k: number = 0;
        for (k; k < this.estudiantesRegistrados.length; k++) {
            if (this.estudiantesRegistrados[k].id == id) {
                return this.estudiantesRegistrados[k];
            }
        }
        return new Estudiante("","","","","","");
    }

    
    public guardarEventoEstudiante(ev: Evento,id: string){
        
        var estudiante = this.buscarEstudiante(id);
        

    }
   /*  public getListaEventosGuardados(id: string):Array<Evento>{

        let estudiante = this.buscarEstudiante(id);
        var listaEventos = new Array<Evento>;
        for(var i=0; i<estudiante.eventosGuardados.length; ++i) { 
            listaEventos[i]=estudiante.eventosGuardados[i];
        }
        return listaEventos;
        

    } */
}