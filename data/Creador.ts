import { LinkedRef } from "../structures/LinkedRef";
import { QueueRef } from "../structures/QueueRef";
import { Estudiante } from "./Estudiante";
import { Evento } from "./Evento";
import { Notificacion } from "./Notificacion";
import { Usuario } from "./Usuario";

export class Creador extends Usuario {
    public eventosCreados:LinkedRef<Evento>;
    public  propuestasEventos:QueueRef<Evento>;
    public dependenciaAdmin:string;

    //Constructor

    constructor(id:string ,  nombre:string,user: string, correo:string,  contrasenia:string,  estado:boolean, dep:string){
        super(id, nombre,user, correo, contrasenia,estado);
        //el super siempre se debe poner primero para evitar errores
        this.eventosCreados = new LinkedRef<Evento>();
        this.propuestasEventos = new QueueRef<Evento>();
        this.dependenciaAdmin = dep;                 
        this.rol = "CREADOR"
    }

    public toJSON (): string {
        let auxPropEventos : QueueRef<Evento> = this.getPropuestasEventos();
        let eventosPropuestos : string = "[";
        let i: number = 0;
        for ( i ; i < auxPropEventos.size(); i++) {
            eventosPropuestos += auxPropEventos.first()?.toJSON() ; 
            if (i != auxPropEventos.size()-1){
                eventosPropuestos += ',';
            }
            auxPropEventos.enqueue(auxPropEventos.first()!);
            auxPropEventos.dequeue();
        }
        eventosPropuestos += ']';
        
        let auxEventCreados : LinkedRef<Evento> = this.getEventosCreados();
        let eventosCreados : string = "[";
        let k: number = 0;
        for ( k ; k < auxEventCreados.size(); k++) {
            eventosCreados += auxEventCreados.getFirst()?.toJSON() ; 
            //eventPendientes += JSON.stringify(auxEventPendientes.getFirst());
            if (k != auxEventCreados.size()-1){
                eventosCreados += ',';
            }
            auxEventCreados.addLatest(auxEventCreados.getFirst()!);
            auxEventCreados.removeFirst();
        }
        eventosCreados += ']';
        
        let creador = '{'+
        '"rol":"ESTUDIANTE",'+
        '"id":"'+ this.getId() +'",'+
        '"nombre":"'+ this.getNombre() +'",'+
        '"usuario":"'+ this.getUsuario() +'",'+
        '"correo":"'+ this.getCorreo() +'",'+
        '"contrasena":"'+ this.getContrasena() +'",'+
        '"autorizado":'+ this.getAutorizado() +',' +
        '"dependenciaAdmin":"'+ this.getDependenciaAdmin() +'",' +
        '"eventosCreados":'+ eventosCreados +',' +
        '"propuestasEvento":'+ eventosPropuestos +
        '}' ;
        return creador;
    }
    //Getters y Setters
    
    get  getEventosCreados():LinkedRef<Evento> {
        return this.eventosCreados;
    }

    get  getDependenciaAdmin():string {
        return this.dependenciaAdmin;
    }

    public setDependenciaAdmin(dependenciaAdmin:string){
        this.dependenciaAdmin = dependenciaAdmin;
    }

    get  getPropuestasEventos():QueueRef<Evento> {
        return this.propuestasEventos;
    }

    public setPropuestasEventos(propuestasEventos:QueueRef<Evento> ){
        this.propuestasEventos = propuestasEventos;
    }

    public  setEventosCreados(eventosCreados:LinkedRef<Evento>){
        this.eventosCreados = eventosCreados;
    }

    //Metodos

    public crearEvento(id:string , nombre:string, fechaInicio:Date, fechaFinal:Date,lugar:string, descripcion:string,
        creador:Creador, facultad:string, idProponente: string):boolean {
        let  creado:boolean = false;
        if(id != null && nombre !=null && fechaInicio !=null && fechaFinal!=null && descripcion != null &&facultad !=null){
            this.eventosCreados.addLatest(new Evento(id, nombre, fechaInicio, fechaFinal, lugar, descripcion,this.getId(), facultad, idProponente));
            //lo comento para evitar errores por no tener usuario
            creado = true;
        }
        return creado;

    }

    public editarEvento(fechaNuevaIn:Date, fechaNuevaFin:Date, nuevoLugar:string, e:Evento):Evento {
        e.setFechaFinal(fechaNuevaFin);
        e.setFechaInicio(fechaNuevaIn);
        e.setLugar(nuevoLugar);
        if(this.eventosCreados.exists(e)){
            this.eventosCreados.remove(this.eventosCreados.indexOf(e));
            this.eventosCreados.addLatest(e);
        } 
        return e;
        
        //por defecto solo se pueden cambiar las fechas del evento, lugar y etiquetas
    }

    public eliminarEvento( borrar:Evento):boolean{
        let borrado: boolean = false;
        if(this.eventosCreados.exists(borrar)){
            let a:number = this.eventosCreados.indexOf(borrar);
            this.eventosCreados.remove(a);
            borrado = true;
        }
        return borrado;
    }

    public addEvento(e:Evento){
        this.eventosCreados.addLatest(e);
    }

    public  aceptarEvento():Evento{
        //aniade el evento a eventos creados y lo saca de eventos propuestos si existe
        let aceptado:Evento= this.propuestasEventos.dequeue()as unknown as Evento;
        this.eventosCreados.addLatest(aceptado);
        
        /*
        esto lo usabamos cuando eventos propuestos era una lista
        if(propuestasEventos.exists(aceptar)){
            int a = propuestasEventos.indexOf(aceptar);
            propuestasEventos.remove(a);
        }
           */
        
        //mandar una notificacion al estudiante de que su evento fue aceptado
        /*let user: string = aceptado.getProponente();

        user.getNotificaciones().push(new Notificacion(user.getId(), aceptado.getFechaInicio(), "tu evento fue aceptado: ' "+aceptado.getNombre()+" '"));
        */ 
       
        //Debido a las nodificaciones para el manejo de archivo no se pueden obtener directamente los usuarios del evento.
       return aceptado;
    }

    public rechazarEvento():void{
        //si el elemento existe en las propuestas eliminarlo
        let rechazado:Evento= this.propuestasEventos.dequeue()as unknown as Evento;
        
        /*
       if(propuestasEventos.exists(aceptar)){
        int a = propuestasEventos.indexOf(aceptar);
        propuestasEventos.remove(a);
       }
       */
       //Pendiente implementar que al estudiante se le muestre una notificacion 

       /*let user:Usuario = rechazado.getProponente();
       user.getNotificaciones().push(new Notificacion(user.getId(), rechazado.getFechaInicio(), "tu evento fue rechazado: ' "+ rechazado.getNombre()+" '"));
       */
      
        //Debido a las nodificaciones para el manejo de archivo no se pueden obtener directamente los usuarios del evento.

    }

    public  crearEtiquetas(e:string, ev:Evento):void{
        //volvemos minuscula para no tener problemas con mayusculas
        e = e.toLowerCase();
        let arregloEtiquetas:string[] = ev.getEtiquetas();
        switch(e){
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
    }


    
}