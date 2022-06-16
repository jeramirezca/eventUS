import { LinkedRef } from "../structures/LinkedRef";
import { QueueRef } from "../structures/QueueRef";
import { Creador } from "./Creador";
import { Evento } from "./Evento";
import { Notificacion } from "./Notificacion";
import { Usuario } from "./Usuario";
export class Estudiante extends Usuario{
    public programaEstudio:string;
    public eventosGuardados:Array<Evento>;
    public eventosPropuestos:Array<Evento>;
    public notificacionesPendientes:Array<Notificacion>;
	//public toJSON : string;

    // CONSTRUCTORES
    

    public constructor (id:string , nombre:string , user:string, correo:string , contrasena:string,programaEstudio:string |""){
        super(id, nombre,user,correo,contrasena,true);
        this.eventosGuardados= new Array<Evento>();
        this.eventosPropuestos= new Array<Evento>();
        this.notificacionesPendientes=new Array<Notificacion>();
        this.programaEstudio=programaEstudio;
        this.rol = "ESTUDIANTE"
        //this.toJSON = JSON.stringify(this);
    }
    public static fromJSON = function (json: string) : Estudiante{
        let obj = JSON.parse (json);
        let estudianteAux = new Estudiante (obj.id , obj.nombre, obj.user, obj.correo, obj.contrasena, obj.programaEstudio);
        let  auxEventosGuardados:Array<Evento> = new Array<Evento>();
        for (let i: number = 0; i < obj.eventosGuardados.length; i++){
            let aux =  obj.eventosGuardados[i];
            let auxEvent : Evento = Evento.fromJSON(JSON.stringify(aux));
            auxEventosGuardados.push(auxEvent);
        }
        let  auxEventosPendientes:Array<Evento> = new Array<Evento>();
        for (let i: number = 0; i < obj.eventosPendientes.length; i++){
            let aux = obj.eventosPendientes[i];
            let auxEvent : Evento = Evento.fromJSON(JSON.stringify(aux));
            auxEventosPendientes.push(auxEvent);
        }
        let  auxNotificacionesPendientes:Array<Notificacion> = new Array<Notificacion>();
        for (let i: number = 0; i < obj.notificacionesPendientes.length; i++){
            let aux = obj.notificacionesPendientes[i];
            let auxNot : Notificacion = Notificacion.fromJSON(JSON.stringify(aux));
            auxNotificacionesPendientes.push(auxNot);
        }
        
        estudianteAux.setNotificacionesPendientes(auxNotificacionesPendientes);
        estudianteAux.setEventosPropuestos(auxEventosPendientes);
        estudianteAux.setEventosGuardados(auxEventosGuardados);
        return estudianteAux;
    };

    public toJSON (): string {
        let auxNotificaiones : Array<Notificacion> = this.getNotificacionesPendientes();
        let notPendientes : string = "[";
        let i: number = 0;
        for ( i ; i < auxNotificaiones.length; i++) {
            notPendientes += JSON.stringify(auxNotificaiones[i])
            if (i != auxNotificaiones.length-1){
                notPendientes += ',';
            }
        }
        notPendientes += ']';

        
        let auxEventGuardados : Array<Evento> = this.getEventosGuardados();
        let eventosGuardados : string = "[";
        let j: number = 0;
        for ( j ; j < auxEventGuardados.length; j++) {
            eventosGuardados += auxEventGuardados[0].toJSON() ;
            if (j != auxEventGuardados.length-1){
                eventosGuardados += ',';
            }
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
    
    public  getNotificacionesPendientes():Array<Notificacion> {
        return this.notificacionesPendientes;
    }

    public  setNotificacionesPendientes( notificacionesPendientes:Array<Notificacion>):void {
        this.notificacionesPendientes = notificacionesPendientes;
    }

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
            c.getPropuestasEventos().unshift(e);
           
            // pendiente poder enviar ese evento al creador para que lo pueda autorizar
        }
      
    public guardarEvento(nuevoEvento:Evento):void{
        this.eventosGuardados.push(nuevoEvento);
    }
    
}