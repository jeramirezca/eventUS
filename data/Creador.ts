import { LinkedRef } from "../structures/LinkedRef";
import { QueueRef } from "../structures/QueueRef";
import { Estudiante } from "./Estudiante";
import { Evento } from "./Evento";
import { Notificacion } from "./Notificacion";
import { Usuario } from "./Usuario";

export class Creador extends Usuario {
    public eventosCreados:Array<Evento>;
    public  propuestasEventos:Array<Evento>;
    public dependenciaAdmin:string;

    //Constructor

    constructor(id:string ,  nombre:string,user: string, correo:string,  contrasenia:string,  estado:boolean, dep:string){
        super(id, nombre,user, correo, contrasenia,estado);
        //el super siempre se debe poner primero para evitar errores
        this.eventosCreados = new Array<Evento>();
        this.propuestasEventos = new Array<Evento>();
        this.dependenciaAdmin = dep;                 
        this.rol = "CREADOR"
    }
    public static fromJSON = function (json: string) : Creador{
        let obj = JSON.parse (json);
        let creadorAux = new Creador (obj.id , obj.nombre, obj.user, obj.correo, obj.contrasena,obj.autorizado, obj.dependenciaAdmin);
        let  auxEventosCreados:Array<Evento> = new Array<Evento>();
        for (let i: number = 0; i < obj.eventosCreados.length; i++){
            let aux = obj.eventosCreados[i];
            let auxEvent : Evento = Evento.fromJSON(JSON.stringify(aux));
            auxEventosCreados.push(auxEvent);
        }
        let  auxPropuestasEventos:Array<Evento> = new Array<Evento>();
        for (let i: number = 0; i < obj.propuestasEvento.length; i++){
            let aux = obj.propuestasEvento[i];
            let auxEvent : Evento = Evento.fromJSON(JSON.stringify(aux));
            auxPropuestasEventos.push(auxEvent);
        }
        
        creadorAux.setEventosCreados(auxEventosCreados);
        creadorAux.setPropuestasEventos(auxPropuestasEventos);
        return creadorAux;
    };

    public toJSON (): string {
        let auxPropEventos : Array<Evento> = this.propuestasEventos;
        let eventosPropuestos : string = "[";
        let i: number = 0;
        for ( i ; i < auxPropEventos.length; i++) {
            eventosPropuestos += auxPropEventos[0].toJSON() ; 
            if (i != auxPropEventos.length-1){
                eventosPropuestos += ',';
            }
        }
        eventosPropuestos += ']';
        
        let auxEventCreados : Array<Evento> = this.eventosCreados;
        let eventosCreados : string = "[";
        let k: number = 0;
        for ( k ; k < auxEventCreados.length; k++) {
            eventosCreados += auxEventCreados[0].toJSON() ; 
            
            if (k != auxEventCreados.length-1){
                eventosCreados += ',';
            }
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
        '"dependenciaAdmin":"'+ this.dependenciaAdmin +'",' +
        '"eventosCreados":'+ eventosCreados +',' +
        '"propuestasEvento":'+ eventosPropuestos +
        '}' ;
        return creador;
    }
    //Getters y Setters
    
    public  getEventosCreados():Array<Evento> {
        return this.eventosCreados;
    }

    public  getDependenciaAdmin():string {
        return this.dependenciaAdmin;
    }

    public setDependenciaAdmin(dependenciaAdmin:string){
        this.dependenciaAdmin = dependenciaAdmin;
    }

    public  getPropuestasEventos():Array<Evento> {
        return this.propuestasEventos;
    }

    public setPropuestasEventos(propuestasEventos:Array<Evento> ){
        this.propuestasEventos = propuestasEventos;
    }

    public  setEventosCreados(eventosCreados:Array<Evento>){
        this.eventosCreados = eventosCreados;
    }

    //Metodos

    public crearEvento(id:string , nombre:string, fechaInicio:Date, fechaFinal:Date,lugar:string, descripcion:string,
        creador:Creador, facultad:string, idProponente: string):boolean {
        let  creado:boolean = false;
        if(id != null && nombre !=null && fechaInicio !=null && fechaFinal!=null && descripcion != null &&facultad !=null){
            this.eventosCreados.push(new Evento(id, nombre, fechaInicio, fechaFinal, lugar, descripcion,this.getId(), facultad, idProponente,true));
            //lo comento para evitar errores por no tener usuario
            creado = true;
        }
        return creado;

    }

    public editarEvento(fechaNuevaIn:Date, fechaNuevaFin:Date, nuevoLugar:string, e:Evento):Evento {
        e.setFechaFinal(fechaNuevaFin);
        e.setFechaInicio(fechaNuevaIn);
        e.setLugar(nuevoLugar);
        if(this.eventosCreados.includes(e)){
            this.eventosCreados.splice((this.eventosCreados.indexOf(e)),1);
            this.eventosCreados.push(e);
        } 
        return e;
        
        //por defecto solo se pueden cambiar las fechas del evento, lugar y etiquetas
    }

    public eliminarEvento( borrar:Evento):boolean{
        let borrado: boolean = false;
        if(this.eventosCreados.includes(borrar)){
            let a:number = this.eventosCreados.indexOf(borrar);
            this.eventosCreados.splice(a,1);
            borrado = true;
        }
        return borrado;
    }

    public addEvento(e:Evento){
        this.eventosCreados.push(e);
    }

    public  aceptarEvento():Evento{
        //aniade el evento a eventos creados y lo saca de eventos propuestos si existe
        let aceptado:Evento= this.propuestasEventos.shift()as unknown as Evento;
        this.eventosCreados.push(aceptado);
        
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
        let rechazado:Evento= this.propuestasEventos.shift()as unknown as Evento;
        
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