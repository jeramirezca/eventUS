import { LinkedRef } from "../structures/LinkedRef";
import { QueueRef } from "../structures/QueueRef";
import { Creador } from "./Creador";
import { Evento } from "./Evento";
import { Notificacion } from "./Notificacion";
import { Usuario } from "./Usuario";
export class Estudiante extends Usuario{
    private programaEstudio:string;
    private eventosGuardados:LinkedRef<Evento>;
    private eventosPropuestos:LinkedRef<Evento>;
    private notificacionesPendientes:QueueRef<Notificacion>;
	//public toJSON : string;

    // CONSTRUCTORES
    

    public constructor (id:string , nombre:string , user:string, correo:string , contrasena:string,programaEstudio:string |""){
        super(id, nombre,user,correo,contrasena,true);
        this.eventosGuardados= new LinkedRef<Evento>();
        this.eventosPropuestos= new LinkedRef<Evento>();
        this.notificacionesPendientes=new QueueRef<Notificacion>();
        this.programaEstudio=programaEstudio;
        this.rol = "ESTUDIANTE"
        //this.toJSON = JSON.stringify(this);
    }

    public toJSON (): string {
        let auxNotificaiones : QueueRef<Notificacion> = this.getNotificacionesPendientes();
        let notPendientes : string = "[";
        let i: number = 0;
        for ( i ; i < auxNotificaiones.size(); i++) {
            notPendientes += JSON.stringify(auxNotificaiones.first())
            notPendientes += ',';
            auxNotificaiones.enqueue(auxNotificaiones.first()!);
            auxNotificaiones.dequeue();
        }
        notPendientes += ']';

        let auxEventGuardados : LinkedRef<Evento> = this.getEventosGuardados();
        let eventosGuardados : string = "[";
        let j: number = 0;
        for ( j ; j < auxEventGuardados.size(); i++) {
            eventosGuardados += auxEventGuardados.getFirst()?.toJSON() ;
            eventosGuardados += ',';
            auxEventGuardados.addLatest(auxEventGuardados.getFirst()!);
            auxEventGuardados.removeFirst();
        }
        eventosGuardados += ']';
        
        let auxEventPendientes : LinkedRef<Evento> = this.getEventosPropuestos();
        let eventPendientes : string = "[";
        let k: number = 0;
        for ( k ; k < auxEventPendientes.size(); i++) {
            eventPendientes += auxEventPendientes.getFirst()?.toJSON() ; 
            eventPendientes += ',';
            auxEventPendientes.addLatest(auxEventGuardados.getFirst()!);
            auxEventPendientes.removeFirst();
        }
        eventPendientes += ']';
        
        let estudiante = '{'+
        '"rol":"'+ this.rol +'",'+
        '"id":"'+ this.getId() +'",'+
        '"nombre":"'+ this.getNombre() +'",'+
        '"correo":"'+ this.getCorreo() +'",'+
        '"autorizado":'+ this.getAutorizado() +',' +
        '"programaEstudio":"'+ this.getProgramaEstudio() +'",' +
        /*'"notificacionesPendientes":'+ notPendientes +',' +
        '"eventosGuardados":'+ eventosGuardados +',' +
        '"eventosPendientes":'+ eventPendientes +*/
        '}' ;
        return estudiante;
    }
    //GETTERS AND SETTERS
    
    public  getNotificacionesPendientes():QueueRef<Notificacion> {
        return this.notificacionesPendientes;
    }

    public  setNotificacionesPendientes( notificacionesPendientes:QueueRef<Notificacion>):void {
        this.notificacionesPendientes = notificacionesPendientes;
    }

    public  getEventosGuardados():LinkedRef<Evento> {
        return this.eventosGuardados;
    }

    public  setEventosGuardados( eventosGuardados:LinkedRef<Evento>):void {
        this.eventosGuardados = eventosGuardados;
    }

    public  getEventosPropuestos():LinkedRef<Evento> {
        return this.eventosPropuestos;
    }

    public  setEventosPropuestos(eventosPropuestos:LinkedRef<Evento>):void {
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
            this.eventosPropuestos.addLatest(e);
            c.getPropuestasEventos().enqueue(e);
           
            // pendiente poder enviar ese evento al creador para que lo pueda autorizar
        }
      
    public guardarEvento(nuevoEvento:Evento):void{
        this.eventosGuardados.addLatest(nuevoEvento);
    }

    public fromJSON = function (json: string) : Estudiante{
        let obj = JSON.parse (json);
        let estudianteAux = new Estudiante (obj.id , obj.nombre, obj.rol, obj.correo, obj.contrasena, obj.programaEstudio);
        let  eventosGuardados:LinkedRef<Evento> = new LinkedRef<Evento>();
        /*for (let i = 0; i < eventosGuardados.size() ; i++) {
            obj.eventosGuardados;
        }*/
        return estudianteAux;
    };
    
}