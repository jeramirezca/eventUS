import { json } from "stream/consumers";
import { LinkedRef } from "../structures/LinkedRef";
import { QueueRef } from "../structures/QueueRef";
import { Creador } from "./Creador";
import { Estudiante } from "./Estudiante";
import { Usuario } from "./Usuario";

export class Administrador extends Usuario {
    public static  creadoresVerificar:QueueRef<Creador>;
    public static  estudiantesRegistrados:LinkedRef<Estudiante>;
    public static  creadoresRegistrados:LinkedRef<Creador>;

        //Constructor

    public constructor(id:string , nombre:string , user:string ,correo:string , contrasena:string ,autorizado:boolean) {
        super(id, nombre,user, correo, contrasena, autorizado);
        this.rol = "ADMINISTRADOR";
    }

    public static inicializar(){
        this.creadoresVerificar=new QueueRef<Creador>();
        this.estudiantesRegistrados=new LinkedRef<Estudiante>();
        this.creadoresRegistrados=new LinkedRef<Creador>();
    }
    public toJSON (): string {
        let auxCreaVerificar : QueueRef<Creador> = Administrador.creadoresVerificar;
        let creadoresVerificar : string = "[";
        let i: number = 0;
        for ( i ; i < auxCreaVerificar.size(); i++) {
            creadoresVerificar += auxCreaVerificar.first()?.toJSON() ;
            if (i != auxCreaVerificar.size()-1){
                creadoresVerificar += ',';
            }
            auxCreaVerificar.enqueue(auxCreaVerificar.first()!);
            auxCreaVerificar.dequeue();
        }
        creadoresVerificar += ']';

        let auxCreaRegistrados : LinkedRef<Creador> = Administrador.creadoresRegistrados;
        let creadoresRegistrados : string = "[";
        let j: number = 0;
        for ( j ; j < auxCreaRegistrados.size(); j++) {
            creadoresRegistrados += auxCreaRegistrados.getFirst()?.toJSON() ; 
            //eventPendientes += JSON.stringify(auxEventPendientes.getFirst());
            if (j != auxCreaRegistrados.size()-1){
                creadoresRegistrados += ',';
            }
            auxCreaRegistrados.addLatest(auxCreaRegistrados.getFirst()!);
            auxCreaRegistrados.removeFirst();
        }
        creadoresRegistrados += ']';
        
        let auxEstRegistrados : LinkedRef<Estudiante> = Administrador.estudiantesRegistrados;
        let estudiantesRegistrados : string = "[";
        let k: number = 0;
        for ( k ; k < auxEstRegistrados.size(); k++) {
            estudiantesRegistrados += auxEstRegistrados.getFirst()?.toJSON() ; 
            //eventPendientes += JSON.stringify(auxEventPendientes.getFirst());
            if (k != auxEstRegistrados.size()-1){
                estudiantesRegistrados += ',';
            }
            auxEstRegistrados.addLatest(auxEstRegistrados.getFirst()!);
            auxEstRegistrados.removeFirst();
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

       
        let user:Creador = Administrador.creadoresVerificar.first()as Creador;
        user.setAutorizado(true);
        
        // Proceso donde se autoriza (Trabaja sobre usuariosVerificar)
        /*
         * Cuando se autorice un usuario, su estado va a cambiar a autorizado y debera
         * ser
         * casteado a creador.
         */
        
        Administrador.creadoresRegistrados.addFirst(user);
        Administrador.creadoresVerificar.dequeue(); // desencolar()
        
    }

    public  desautorizarUsuario():void {
        // proceso donde se desautoriza (Trabaja sobre
        let user:Usuario=Administrador.creadoresVerificar.first()as Usuario;   
        user.setAutorizado(false);                                                 // usuariosVerificar)
        /*
         * Cuando se desautorice un usuario, su estado va a cambiar a desautorizado y
         * debera ser
         * casteado a estudiante.
         */
        Administrador.creadoresVerificar.dequeue(); // desencolar()
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
            Administrador.estudiantesRegistrados.remove(index); // elimina al usuario
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
            Administrador.estudiantesRegistrados.remove(index); // elimina al usuario
            return true;
        }
    }

    public  filtrarUsuarios (num:number):void{
        if (num == 1){
            if ( Administrador.estudiantesRegistrados.getFirst() instanceof Estudiante){
                console.log( Administrador.estudiantesRegistrados.getFirst() + "Estudiante" );
            }
        }else if (num == 2){
            if ( Administrador.estudiantesRegistrados.getFirst() instanceof Creador){
                console.log( Administrador.estudiantesRegistrados.getFirst()  + "Creador" );
            }
        }else{
            console.log("Tipo de usuario no identificado.");
        }
    }
}
Administrador.inicializar();