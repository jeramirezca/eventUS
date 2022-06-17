import { LinkedRef } from "../structures/LinkedRef";
import { QueueRef } from "../structures/QueueRef";
import { Creador } from "./Creador";
import { Evento } from "./Evento";
import { Notificacion } from "./Notificacion";
import { Usuario } from "./Usuario";
import { Queue } from "../structures/Queue";
export class Estudiante extends Usuario{
    public programaEstudio:string;
    public eventosGuardados: Array<Evento>;
    public eventosPropuestos: Array<Evento>;
    public notificacionesPendientes:Queue<Notificacion>;
	//public toJSON : string;

    // CONSTRUCTORES
    

    public constructor (id:string , nombre:string , user:string, correo:string , contrasena:string,programaEstudio:string |""){
        super(id, nombre,user,correo,contrasena,true);
        this.eventosGuardados= new Array<Evento>();
        this.eventosPropuestos= new Array<Evento>();
        this.notificacionesPendientes=new Queue<Notificacion>();
        this.programaEstudio=programaEstudio;
        this.rol = "ESTUDIANTE"
        //this.toJSON = JSON.stringify(this);
    }

    public toJSON (): string {
        let auxNotificaiones = this.notificacionesPendientes;
        let notPendientes : string = "[";
        let i: number = 0;
        for ( i ; i < auxNotificaiones.size(); i++) {
            notPendientes += JSON.stringify(auxNotificaiones.first())
            if (i != auxNotificaiones.size()-1){
                notPendientes += ',';
            }
            auxNotificaiones.enqueue(auxNotificaiones.first()!);
            auxNotificaiones.dequeue();
        }
        notPendientes += ']';

        let auxEventGuardados = this.eventosGuardados;
        let eventosGuardados : string = "[";
        let j: number = 0;
        for ( j ; j < auxEventGuardados.length; j++) {
            eventosGuardados += auxEventGuardados[0]?.toJSON() ;
            //eventosGuardados += JSON.stringify(auxEventGuardados.getFirst());
            if (j != auxEventGuardados.length-1){
                eventosGuardados += ',';
            }
            auxEventGuardados.push(auxEventGuardados[0]);
            auxEventGuardados.shift();
        }
        eventosGuardados += ']';
        
        let auxEventPendientes : Array<Evento> = this.getEventosPropuestos();
        let eventPendientes : string = "[";
        let k: number = 0;
        for ( k ; k < auxEventPendientes.length; k++) {
            eventPendientes += auxEventPendientes[0].toJSON() ; 
            //eventPendientes += JSON.stringify(auxEventPendientes.getFirst());
            if (k != auxEventPendientes.length-1){
                eventPendientes += ',';
            }
            auxEventPendientes.push(auxEventPendientes[0]);
            auxEventPendientes.shift();
        }
        eventPendientes += ']';
        
        let estudiante = '{'+
        '"rol":"ESTUDIANTE",'+
        '"id":"'+ this.getId() +'",'+
        '"nombre":"'+ this.getNombre() +'",'+
        '"usuario":"'+ this.getUsuario() +'",'+
        '"correo":"'+ this.getCorreo() +'",'+
        '"contrasena":"'+ this.getContrasena() +'",'+
        '"autorizado":'+ this.getAutorizado() +',' +
        '"programaEstudio":"'+ this.getProgramaEstudio() +'",' +
        '"notificacionesPendientes":'+ notPendientes +',' +
        '"eventosGuardados":'+ eventosGuardados +',' +
        '"eventosPendientes":'+ eventPendientes +
        '}' ;
        return estudiante;
    }
    //GETTERS AND SETTERS
    
  /*   public  getNotificacionesPendientes(): Array<Notificacion> {
        return this.notificacionesPendientes;
    }

    public  setNotificacionesPendientes( notificacionesPendientes:Array<Notificacion>):void {
        this.notificacionesPendientes = notificacionesPendientes;
    } */

    public  getEventosGuardados():Array<Evento> {
        return this.eventosGuardados;
    }

    public  setEventosGuardados( eventosGuardados:Array<Evento>):void {
        this.eventosGuardados = eventosGuardados;
    }

    public  getEventosPropuestos():Array<Evento> {
        return this.eventosPropuestos;
    }

    public  setEventosPropuestos(eventosPropuestos:Array<Evento>):void {
        this.eventosPropuestos = eventosPropuestos;
    }

    public  getProgramaEstudio():string {
        return this.programaEstudio;
    }

    public setProgramaEstudio(programaEstudio: string):void {
        this.programaEstudio = programaEstudio;
    }

    //METODOS
    public  editarContrasena( pinActual:string, pinNuevo:string):boolean{
        let cambiado: boolean= false;
        if(this.getContrasena() == pinActual){
            this.setContrasena(pinNuevo)
            cambiado = true;
            return cambiado;
        }else{
            return cambiado;
        }
    }

    public sugerirEvento( e:Evento, c:Creador):void {
        e.setProponente(this.getId());
            this.eventosPropuestos.push(e);
            c.getPropuestasEventos().push(e);
           
            // pendiente poder enviar ese evento al creador para que lo pueda autorizar
        }
      
    public guardarEvento(nuevoEvento:Evento):void{
        this.eventosGuardados.push(nuevoEvento);
    }

    public fromJSON = function (json: string) : Estudiante{
        let obj = JSON.parse (json);
        let estudianteAux = new Estudiante (obj.id , obj.nombre, obj.rol, obj.correo, obj.contrasena, obj.programaEstudio);
        let  eventosGuardados:Array<Evento> = new Array<Evento>();
        /*for (let i = 0; i < eventosGuardados.length ; i++) {
            obj.eventosGuardados;
        }*/
        return estudianteAux;
    };
    
}