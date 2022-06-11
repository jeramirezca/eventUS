import { Creador } from "./Creador";
import { Estudiante } from "./Estudiante";
import { Usuario } from "./Usuario";

export class Evento {
    public id:string;
    public nombre:string;
    public fechaInicio:Date; //Date
    public fechaFinal:Date; //Date
    public lugar:string;
    public descripcion:string;
	public facultad:string;
    public idCreador:string;
	public idProponente:string;
    public estado?:boolean; //Aprobado o negado.
    public aforo?:number;
    public etiquetas: string[];

	public toJSON : string;
	
	//Constructor

    constructor(id:string , nombre:string, fechaInicio:Date, fechaFinal:Date,lugar:string, descripcion:string,
			idCreador:string, facultad:string, idProponente:string, aforo?:number, etiquetas?:string[]) {
		
		this.id = id;
		this.nombre = nombre;
		this.fechaInicio = fechaInicio;
		this.fechaFinal = fechaFinal;
		this.lugar = lugar;
        this.facultad=facultad
		this.descripcion = descripcion;
		this.idCreador = idCreador;
		this.idProponente= idProponente;
        this.estado=undefined;
        this.aforo=aforo;
        if(etiquetas!=undefined){
            this.etiquetas=etiquetas;
        }else{
            this.etiquetas=new Array();
        }
        this.toJSON = JSON.stringify(this);
	}
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
	public getFechaInicio():Date {
		return this.fechaInicio;
	}
	public setFechaInicio(fechaInicio:Date):void {
		this.fechaInicio = fechaInicio;
	}
	public getFechaFinal():Date {
		return this.fechaFinal;
	}
	public setFechaFinal(fechaFinal:Date):void {
		this.fechaFinal = fechaFinal;
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

	public fromJSON = function (json: string) : Evento{
        var obj = JSON.parse (json);
        return new Evento (obj.id , obj.nombre, obj.fechaInicio, obj.fechaFinal,obj.lugar, obj.descripcion,
			obj.creador, obj.facultad, obj.proponente, obj.aforo, obj.etiquetas);
    };

	public  toString():string{
		let cadena:string = "";
		cadena+= "Nombre: "+ this.getNombre()+"\n"+"Fi "+this.fechaInicio+" Ff "+this.fechaFinal;
		cadena+= "\n"+"Lugar "+this.getLugar()+ "\n"+"Descripcion: "+this.getDescripcion()+ "\n";
		cadena+="Propone: " + this.getId();
		return cadena;
	}

}