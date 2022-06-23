import { Creador } from "./Creador";
import { Estudiante } from "./Estudiante";
import { Usuario } from "./Usuario";

export class Evento {
    public id:string;
    public nombre:string;
    public fecha:Date;
/* 	public HoraInicio: String; //Date */
    public horaInicio: string;
	public horaFin: string; //Date
    public lugar:string;
    public descripcion:string;
	public facultad:string;
    public idCreador:string;
	public idProponente:string;
    public estado?:boolean; //Aprobado o negado.
    public aforo?:number;
    public etiquetas: string[];

	//public toJSON : string;
	
	//Constructor

    constructor(id:string , nombre:string, fecha:Date, horaInicio: string, horaFin: string,lugar:string, descripcion:string,
			idCreador:string, facultad:string, idProponente:string, estado: boolean ,aforo?:number, etiquetas?:string[]) {
		this.id = id;
		this.nombre = nombre;
		this.fecha = fecha;
		this.horaInicio = horaInicio;
		this.horaFin = horaFin;
		this.lugar = lugar;
        this.facultad = facultad
		this.descripcion = descripcion;
		this.idCreador = idCreador;
		this.idProponente= idProponente;
        this.estado = estado;
        this.aforo=aforo;
        if(etiquetas!=undefined){
            this.etiquetas=etiquetas;
        }else{
            this.etiquetas=new Array();
        }
        //this.toJSON = JSON.stringify(this);
	}

	public toJSON(): string{
		let etiq : string = "[";
		let i: number = 0;
		for ( i ; i<this.etiquetas.length-1; i++){
			etiq += '"'+this.etiquetas[i] +'"'
			etiq += ','
		}				
		etiq += '"'+this.etiquetas[this.etiquetas.length-1]+'"'
		etiq += ']'

		let evento = '{'+
		'"id":"'+ this.getId() +'",'+
		'"nombre":"'+ this.getNombre() +'",'+
		'"fecha":"'+ this.getFecha().getFullYear()+'-' +(this.getFecha().getMonth()+1) +'-'+this.getFecha().getDate()+'",'+
		'"horaInicio":"'+ this.getHoraInicio() +'",'+
		'"horaFin":"'+ this.getHoraFin() +'",'+
		'"lugar":"'+ this.getLugar() +'",' +
		'"descripcion":"'+ this.getDescripcion() +'",' +
		'"facultad":"'+ this.getFacultad() +'",' +
		'"idCreador":"'+ this.getCreador() +'",' +
		'"idProponente":"'+ this.getProponente() +'",' +
		'"estado":'+ this.getEstado() +',' +
		'"aforo":'+ this.getAforo() +',' +
		'"etiquetas":'+etiq+
		'}' ;
		return evento;
	}

	public static fromJSON = function (json: string) : Evento{
        var obj = JSON.parse (json);
        return new Evento (obj.id , obj.nombre, new Date(obj.fecha), obj.horaInicio,obj.horaFin, obj.lugar, obj.descripcion,
			obj.creador, obj.facultad, obj.idProponente,  obj.estado, obj.aforo, obj.etiquetas);
		};
	
	//Setters y getters

	public  getProponente():string {
		return this.idProponente;
	}

	public setProponente(proponente:string):void {
		this.idProponente = proponente;
	}
    
	public getId():string{
		return this.id;
	}
	public setId(id:string):void {
		this.id = id;
	}
	public getNombre():string {
		return this.nombre;
	}
	public setNombre(nombre:string):void {
		this.nombre = nombre;
	}
	public getFecha():Date {
		return this.fecha;
	}
	public setFecha(fecha:Date):void {
		this.fecha = fecha;
	}
	public getHoraInicio():string {
		return this.horaInicio;
	}
	public setHoraInicio(horaInicio:string):void {
		this.horaInicio = horaInicio;
	} 
	public getHoraFin():string {
		return this.horaFin;
	}
	public setHoraFin(horaFin:string):void {
		this.horaFin = horaFin;
	} 
	public getLugar(): String  {
		return this.lugar;
	}
	public setLugar(lugar:string):void {
		this.lugar = lugar;
	}
	public getDescripcion():string {
		return this.descripcion;
	}
	public setDescripcion(descripcion:string):void {
		this.descripcion = descripcion;
	}
	public getCreador():string {
		return this.idCreador;
	}
	public setCreador(creador:string):void {
		this.idCreador = creador;
	}
	public getEstado():boolean|undefined {
		return this.estado;
	}
	public setEstado(estado:boolean|undefined) :void{
		this.estado = estado;
	}
	public getAforo():number|undefined {
		return this.aforo;
	}
	public setAforo(aforo:number|undefined):void {
		this.aforo = aforo;
	}
	public  getEtiquetas():string[] {
		return this.etiquetas;
	}
	public setEtiquetas( etiquetas:string[]):void {
		this.etiquetas = etiquetas;
	}

	//Métodos:

    public asignarEtiqueta(etiqueta:string,posicion:number):boolean{
        let insertado:boolean = false;
        if (posicion < 5){
            this.etiquetas[posicion] = etiqueta;
            insertado = true;
        }
        return insertado;
    }

    public eliminarEtiqueta(posicion:number):boolean{
        let eliminado:boolean = false;
        if (posicion < 5){
            this.etiquetas [posicion] = "";
            eliminado = true;
        }
        return eliminado;
    }
	
    public getEtiqueta(posicion:number):string {
        return (this.etiquetas[posicion]);
    }

	public setFacultad( f:string):void{
		this.facultad = f;
	}

	public getFacultad():string{
		return this.facultad;
	}

}