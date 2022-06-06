import { Creador } from "./Creador";
import { Estudiante } from "./Estudiante";
import { Usuario } from "./Usuario";

export class Evento {
    private id:string;
    private nombre:string;
    private fechaInicio:Date; //Date
    private fechaFinal:Date; //Date
    private lugar:string;
    private descripcion:string;
	private facultad:string;
    private creador:Creador;
	private proponente:Estudiante;
    private estado?:boolean; //Aprobado o negado.
    private aforo?:number;
    private etiquetas: string[];

	//Constructor

    constructor(id:string , nombre:string, fechaInicio:Date, fechaFinal:Date,lugar:string, descripcion:string,
			creador:Creador, facultad:string, proponente:Estudiante, aforo?:number, etiquetas?:string[]) {
		
		this.id = id;
		this.nombre = nombre;
		this.fechaInicio = fechaInicio;
		this.fechaFinal = fechaFinal;
		this.lugar = lugar;
        this.facultad=facultad
		this.descripcion = descripcion;
		this.creador = creador;
		this.proponente=proponente;
        this.estado=undefined;
        this.aforo=aforo;
        if(etiquetas!=undefined){
            this.etiquetas=etiquetas;
        }else{
            this.etiquetas=new Array();
        }
        
	}
	//Setters y getters

	public  getProponente():Usuario {
		return this.proponente;
	}

	public setProponente(proponente:Estudiante):void {
		this.proponente = proponente;
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
	public getCreador():Usuario {
		return this.creador;
	}
	public setCreador(creador:Creador):void {
		this.creador = creador;
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

	

	public  toString():string{
		let cadena:string = "";
		cadena+= "Nombre: "+ this.getNombre()+"\n"+"Fi "+this.fechaInicio+" Ff "+this.fechaFinal;
		cadena+= "\n"+"Lugar "+this.getLugar()+ "\n"+"Descripcion: "+this.getDescripcion()+ "\n";
		cadena+="Propone: " + this.creador.getDependenciaAdmin();
		return cadena;
	}

}