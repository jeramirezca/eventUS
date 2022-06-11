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
	public toJSON : string;

    // CONSTRUCTORES
    

    public constructor (id:string , nombre:string , user:string, correo:string , contrasena:string,programaEstudio:string |""){
        super(id, nombre,user,correo,contrasena,true);
        this.eventosGuardados= new LinkedRef<Evento>();
        this.eventosPropuestos= new LinkedRef<Evento>();
        this.notificacionesPendientes=new QueueRef<Notificacion>();
        this.programaEstudio=programaEstudio;
        this.toJSON = JSON.stringify(this);
        this.rol = "ESTUDIANTE"
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
        e.setProponente(this);
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