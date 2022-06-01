class Notificacion {
    private id:string;
    private fecha:string;
    private descripcion?:string;

    //Constructor

    public constructor(i:string,  f:string, d?:string){
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
    public geFecha():string{
        return this.fecha;
    }
    public setFecha(fecha:string):void{
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