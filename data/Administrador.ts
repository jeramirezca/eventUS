import { json } from "stream/consumers";
import { LinkedRef } from "../structures/LinkedRef";
import { QueueRef } from "../structures/QueueRef";
import { Creador } from "./Creador";
import { Estudiante } from "./Estudiante";
import { Usuario } from "./Usuario";

export class Administrador extends Usuario {
    public static  creadoresVerificar:Array<Creador>;
    public static  estudiantesRegistrados:Array<Estudiante>;
    public static  creadoresRegistrados:Array<Creador>;

        //Constructor

    public constructor(id:string , nombre:string , user:string ,correo:string , contrasena:string ,autorizado:boolean) {
        super(id, nombre,user, correo, contrasena, autorizado);
        this.rol = "ADMINISTRADOR";
    }

    public static fromJSON = function (json: string) : Administrador {
        let obj = JSON.parse (json);
        let adminAux = new Administrador (obj.id , obj.nombre, obj.user, obj.correo, obj.contrasena, true);

        for (let i: number = 0; i < obj.creadoresVerificar.length; i++){
            let aux = obj.creadoresVerificar[i];
            let auxCrea : Creador = Creador.fromJSON(JSON.stringify(JSON.parse(JSON.stringify(aux))));
            console.log(auxCrea);
            Administrador.creadoresVerificar.push(auxCrea);
        }
        
        for (let i: number = 0; i < obj.creadoresRegistrados.length; i++){
            let aux = obj.creadoresRegistrados[i] ;
            let auxCrea : Creador = Creador.fromJSON(JSON.stringify(JSON.parse(JSON.stringify(aux))));
            console.log(auxCrea);
            Administrador.creadoresRegistrados.push(auxCrea);
        }
        
        for (let i: number = 0; i < obj.estudiantesRegistrados.length; i++){
            let aux = obj.estudiantesRegistrados[i] ;
            let auxEst : Estudiante = Estudiante.fromJSON(JSON.stringify(JSON.parse(JSON.stringify(aux))));
            console.log(auxEst);
            Administrador.estudiantesRegistrados.push(auxEst);
        }
        return adminAux
    };
    public static inicializar(){
        this.creadoresVerificar=new Array<Creador>();
        this.estudiantesRegistrados=new Array<Estudiante>();
        this.creadoresRegistrados=new Array<Creador>();
    }
    public toJSON (): string {
        let auxCreaVerificar : Array<Creador> = Administrador.creadoresVerificar;
        let creadoresVerificar : string = "[";
        let i: number = 0;
        for ( i ; i < auxCreaVerificar.length; i++) {
            creadoresVerificar += auxCreaVerificar[0].toJSON() ;
            if (i != auxCreaVerificar.length-1){
                creadoresVerificar += ',';
            }
        }
        creadoresVerificar += ']';

        let auxCreaRegistrados : Array<Creador> = Administrador.creadoresRegistrados;
        let creadoresRegistrados : string = "[";
        let j: number = 0;
        for ( j ; j < auxCreaRegistrados.length; j++) {
            creadoresRegistrados += auxCreaRegistrados[0].toJSON() ; 
            //eventPendientes += JSON.stringify(auxEventPendientes.getFirst());
            if (j != auxCreaRegistrados.length-1){
                creadoresRegistrados += ',';
            }
        }
        creadoresRegistrados += ']';
        
        let auxEstRegistrados : Array<Estudiante> = Administrador.estudiantesRegistrados;
        let estudiantesRegistrados : string = "[";
        let k: number = 0;
        for ( k ; k < auxEstRegistrados.length; k++) {
            estudiantesRegistrados += auxEstRegistrados[0].toJSON() ; 
            
            if (k != auxEstRegistrados.length-1){
                estudiantesRegistrados += ',';
            }
        }
        estudiantesRegistrados += ']';
        
        let administrador = '{'+
        '"rol":"ADMINISTRADOR",'+
        '"id":"'+ this.getId() +'",'+
        '"nombre":"'+ this.getNombre() +'",'+
        '"usuario":"'+ this.getUsuario() +'",'+
        '"correo":"'+ this.getCorreo() +'",'+
        '"contrasena":"'+ this.getContrasena() +'",'+
        '"autorizado":'+ this.getAutorizado() +',' +
        '"estudiantesRegistrados":'+ estudiantesRegistrados +',' +
        '"creadoresRegistrados":'+ creadoresRegistrados +',' +
        '"creadoresVerificar":'+ creadoresVerificar +
        '}' ;
        return administrador;
    }

    //Métodos
    
    public autorizarUsuario():void {

       
        let user:Creador = Administrador.creadoresVerificar[0] as Creador;
        user.setAutorizado(true);
        
        // Proceso donde se autoriza (Trabaja sobre usuariosVerificar)
        /*
         * Cuando se autorice un usuario, su estado va a cambiar a autorizado y debera
         * ser
         * casteado a creador.
         */
        
        Administrador.creadoresRegistrados.unshift(user);
        Administrador.creadoresVerificar.shift(); // desencolar()
        
    }

    public  desautorizarUsuario():void {
        // proceso donde se desautoriza (Trabaja sobre
        let user:Usuario=Administrador.creadoresVerificar[0] as Usuario;   
       user.setAutorizado(false);                                                 // usuariosVerificar)
        /*
         * Cuando se desautorice un usuario, su estado va a cambiar a desautorizado y
         * debera ser
         * casteado a estudiante.
         */
      Administrador.creadoresVerificar.shift(); // desencolar()
    }

    //public editarUsuario(usuario:Usuario):boolean {      ¿Por qué el administrador editaria un usuario?
        // proceso donde se edita (Trabaja sobre usuariosRegistrados)
        // TODO: Se debe cambiar a booleano o anadir excepcion
        /*
         * Va buscar el usuario ingresado dentro de usuariosRegistrados
         * Si no lo encuentra, Imprime "No se encontro al usuario. Imposible editar." y
         * retorna falso
         * Si lo encuentra, prosigue el metodo
         * Retorna verdadero
         */
        /*let index:number =  Administrador.estudiantesRegistrados.indexOf(usuario);
        if (index == -1) {
            console.log("El usuario no existe.");
            return false;
        } else {
            Administrador.estudiantesRegistrados.add(usuario, index);
            Administrador.estudiantesRegistrados.remove(index+1); 
            return true;
        }
    }*/

    public eliminarEstudiante(usuario: Estudiante ):boolean {
        // proceso donde se elimina (Trabaja sobre estudiantesRegistrados)
        // TODO: Se debe cambiar a booleano o anadir excepcion
        /*
         * Va a buscar el usuario ingresado dentro de usuariosRegistrados
         * Si no lo encuentra, imprime "No se encontro al usuario. Imposible eliminar."
         * y retorna falso
         * Si lo encuentra, prosigue el metodo
         * Retorna verdadero.
         */
        let index:number =  Administrador.estudiantesRegistrados.indexOf(usuario);
        if (index == -1) {
            console.log("El estudiante no existe.");
            return false;
        } else {
            Administrador.estudiantesRegistrados.splice(index,1); // elimina al usuario
            return true;
        }
    }
    public eliminarCreador(usuario:Creador ):boolean {
        // proceso donde se elimina (Trabaja sobre creadoresRegistrados)
        // TODO: Se debe cambiar a booleano o anadir excepcion
        /*
         * Va a buscar el usuario ingresado dentro de usuariosRegistrados
         * Si no lo encuentra, imprime "No se encontro al usuario. Imposible eliminar."
         * y retorna falso
         * Si lo encuentra, prosigue el metodo
         * Retorna verdadero.
         */
       let index:number =  Administrador.creadoresRegistrados.indexOf(usuario);
        if (index == -1) {
            console.log("El creador no existe.");
            return false;
        } else {
            Administrador.estudiantesRegistrados.splice(index,1); // elimina al usuario
            return true;
        }
    }
    
    public  filtrarUsuarios (num:number):void{
        if (num == 1){
            if ( Administrador.estudiantesRegistrados[0] instanceof Estudiante){
                console.log( Administrador.estudiantesRegistrados[0] + "Estudiante" );
            }
        }else if (num == 2){
            if ( Administrador.estudiantesRegistrados[0] instanceof Creador){
                console.log( Administrador.estudiantesRegistrados[0]  + "Creador" );
            }
        }else{
            console.log("Tipo de usuario no identificado.");
        }
    }
}
Administrador.inicializar();