class Creador extends Usuario {
    private eventosCreados:LinkedRef<Evento>;
    private  propuestasEventos:QueueRef<Evento>;
    private dependenciaAdmin:string;

    //Constructor

    public constructor(id:string ,  nombre:string, correo:string,  contrasenia:string,  estado:boolean, dep:string){
        super(id, nombre, correo, contrasenia,estado);
        //el super siempre se debe poner primero para evitar errores
        this.eventosCreados = new LinkedRef<>();
        this.propuestasEventos = new QueueRef<>();
        this.dependenciaAdmin = dep;                 
  
    }

    //Getters y Setters
    
    public  getEventosCreados():LinkedRef<Evento> {
        return this.eventosCreados;
    }

    public  getDependenciaAdmin():string {
        return this.dependenciaAdmin;
    }

    public setDependenciaAdmin(dependenciaAdmin:string):void {
        this.dependenciaAdmin = dependenciaAdmin;
    }

    public  getPropuestasEventos():QueueRef<Evento> {
        return this.propuestasEventos;
    }

    public setPropuestasEventos(propuestasEventos:QueueRef<Evento> ):void{
        this.propuestasEventos = propuestasEventos;
    }

    public  setEventosCreados(eventosCreados:LinkedRef<Evento> ):void{
        this.eventosCreados = eventosCreados;
    }

    //Metodos

    public crearEvento(id:string , nombre:string, fechaInicio:string, fechaFinal:string,lugar:string, descripcion:string,
        creador:Creador, facultad:string):boolean {
        let  creado:boolean = false;
        if(id != null && nombre !=null && fechaInicio !=null && fechaFinal!=null && descripcion != null &&facultad !=null){
            this.eventosCreados.addLatest(new Evento(id, nombre, fechaInicio, fechaFinal, lugar, descripcion,this, facultad,this));
            //lo comento para evitar errores por no tener usuario
            creado = true;
        }
        return creado;

    }

    public editarEvento(fechaNuevaIn:string, fechaNuevaFin:string, nuevoLugar:string, e:Evento):Evento {
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

    public  aceptarEvento():Evento{
        //aniade el evento a eventos creados y lo saca de eventos propuestos si existe
        let aceptado:Evento = this.propuestasEventos.dequeue();
        this.eventosCreados.addLatest(aceptado);
        
        /*
        esto lo usabamos cuando eventos propuestos era una lista
        if(propuestasEventos.exists(aceptar)){
            int a = propuestasEventos.indexOf(aceptar);
            propuestasEventos.remove(a);
           }
           */
        
        //mandar una notificacion al estudiante de que su evento fue aceptado
        let user:Usuario = aceptado.getProponente();
        user.getNotificaciones().push(new Notificacion(user.getId(), aceptado.getFechaInicio(), "tu evento fue aceptado: ' "+aceptado.getNombre()+" '"));
        return aceptado;
    }

    public rechazarEvento():void{
        //si el elemento existe en las propuestas eliminarlo
        let rechazado:Usuario  = this.propuestasEventos.dequeue();
        /*
       if(propuestasEventos.exists(aceptar)){
        int a = propuestasEventos.indexOf(aceptar);
        propuestasEventos.remove(a);
       }
       */
       //Pendiente implementar que al estudiante se le muestre una notificacion 

       let user:Usuario = rechazado.getProponente();
       user.getNotificaciones().push(new Notificacion(user.getId(), rechazado.getFechaInicio(), "tu evento fue rechazado: ' "+ rechazado.getNombre()+" '"));
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