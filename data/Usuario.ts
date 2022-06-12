import { LinkedRef } from "../structures/LinkedRef";
import { QueueRef } from "../structures/QueueRef";
import { StackRef } from "../structures/StackRef";
import { Notificacion } from "./Notificacion";

export class Usuario{

    private id: string;
    private nombre:string;
    private usuario:string;
    private correo:string;
    private contrasena:string;
    private notificaciones:StackRef<Notificacion> ;
    private autorizado:boolean;
    public rol: "ADMINISTRADOR"|"ESTUDIANTE"|"CREADOR"|""= "";

    // contructor

    public fromJson(json:any) {
        this.id = json.id;
        this.nombre = json.nombre;
        this.rol = json.rol;
        this.correo = json.correo;
        this.contrasena = json.contrasena;
        this.autorizado = json.autorizado;
        this.notificaciones = json.notificaciones;
    }

    public constructor(id:string , nombre:string , usuario:string, correo:string , contrasena:string ,autorizado:boolean) {
        this.id = id;
        this.nombre = nombre;
        this.usuario = usuario;
        this.rol = "";
        this.correo = correo;
        this.contrasena = contrasena;
        this.autorizado = autorizado;
        this.notificaciones = new StackRef<Notificacion>();
        this.rol = "";
    }

    // getters and setters
    public getId():string {
        return this.id;
    }

    public setId( id:string) : void{
        this.id = id;
    }

    public getNombre():string  {
        return this.nombre;
    }

    public  setNombre(nombre:string ):void {
        this.nombre = nombre;
    }

    public getUsuario():string {
        return this.usuario;
    }

    public setUsuario( usuario:string) : void{
        this.id = usuario;
    }
    
    public getCorreo():string {
        return this.correo;
    }

    public setCorreo(correo:string ) :void{
        this.correo = correo;
    }

    public getContrasena():string  {
        return this.contrasena;
    }

    public  setContrasena( contrasena:string):void {
        this.contrasena = contrasena;
    }

    public  getNotificaciones():StackRef<Notificacion> {
        return this.notificaciones;
    }

    public  setNotificaciones(notificaciones:StackRef<Notificacion> ) :void{
        this.notificaciones = notificaciones;
    }

    public  getAutorizado():boolean {
        return this.autorizado;
    }

    public  setAutorizado(string:boolean ):void|null {
        this.autorizado = string;
    }

    // metodos

	public fromJSON = function (json: string) : Usuario{
        var obj = JSON.parse (json);
        return new Usuario (obj.id , obj.nombre, obj.rol,  obj.correo, obj.contrasena, obj.autorizado);
    };

    public  eliminarNotificacion():void {
        if(this.notificaciones.empty()){
            console.log("No hay notificaciones por eliminar");
        }else{
            this.notificaciones.pop();
        }
    }

    public  buscarEvento() :void{
        // podria recibir una Linkedref de eventos, junto a un evento a buscar
        // busca atraves de los eventos que se encuentren contenidos en una lista
    }

       
    public toString():string {
        return "[ Usuario:" + this.id + ", Nombre: " + this.nombre + "  Correo: " + this.correo +"]";
    }



}