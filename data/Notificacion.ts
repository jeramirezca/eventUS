
export class Notificacion {
    private id:string;
    private fecha:Date;
    private descripcion?:string;

    //Constructor

    public constructor(i:string,  f:Date, d?:string){
        this.id = i;
        this.fecha = f;
        if(d!=undefined){
            this.descripcion = d;
        }else{
            this.descripcion="este evento no tiene descripcion";
        }
        
    }
    public getId():string{
        return this.id;
    }
    public setId(id:string):void{
        this.id=id;
    }
    public geFecha():Date{
        return this.fecha;
    }
    public setFecha(fecha:Date):void{
        this.fecha=fecha;
    }
    public getDescription():string|undefined{
        return this.descripcion;
    }
    public setDescription(description:string|undefined):void{
        this.descripcion=description;
    }


    
    public toString():string{
        let c: string = "";
        c+= "\n"+"ID: "+this.id+"\n"+"FECHA: "+this.fecha+"\n"+"DESCRIPCION "+this.descripcion;
        return c;
    }

}