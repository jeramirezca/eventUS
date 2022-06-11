import { Creador } from "../data/Creador";
import { Estudiante } from "../data/Estudiante";
import { Usuario } from "../data/Usuario";
import { Evento} from "../data/Evento";
import { Administrador } from "../data/Administrador";
import { parse } from "path";
import { LinkedRef } from "../structures/LinkedRef";
/*import fsPromises from 'fs/promises';
import path from 'path';

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'datosAdministrados.json');
  const jsonData = await fsPromises.readFile(filePath);
  const objectData = JSON.parse(jsonData.toString());

  return {
    props: objectData
  }
}*/
export class CargarDatos {
    static admin1 : Administrador = new Administrador("01","Administrador principal", "correo@unal.edu.co","ADMINISTRADOR","admin123",true);

    constructor (){
        let user1 : Estudiante = new Estudiante ("E01","Yenifer Mora","ymoras@unal.edu.co","ESTUDIANTE","Yenifer123","Ingenieria de Sistemas");
        let user2 : Estudiante = new Estudiante ("E02","Laura Mora","lmoras@unal.edu.co","ESTUDIANTE","Laura123","Ingenieria de Sistemas");
        
        let userCrea1 : Creador = new Creador("C01","creador prog. Sistemas","sistemas@unal.edu.co","CREADOR","creador123",true,"Sistemas");
        let userCrea2 : Creador = new Creador("C02","creador prog. Sistemas","sistemas@unal.edu.co","CREADOR","creador123",true,"Sistemas");
        
        let evento1 : Evento = new Evento("Ev01","Evento 1",new Date("2017-01-26"),new Date("2017-01-26"),"Unal","descripcion",userCrea1.getId(),"Ingenieria",user1.getId(),3,["et1","et2","et3","et4","et5"]);
        let evento2 : Evento = new Evento("Ev02","Evento 2",new Date("2018-01-26"),new Date("2017-01-26"),"Unal","descripcion",userCrea1.getId(),"Ingenieria",user1.getId(),3,["et1","et2","et3","et4","et5"]);
        let evento3 : Evento = new Evento("Ev03","Evento 3",new Date("2019-01-26"),new Date("2017-01-26"),"Unal","descripcion",userCrea1.getId(),"Ingenieria",user1.getId(),3,["et1","et2","et3","et4","et5"]);
        let evento4 : Evento = new Evento("Ev04","Evento 4",new Date("2020-01-26"),new Date("2017-01-26"),"Unal","descripcion",userCrea1.getId(),"Ingenieria",user1.getId(),3,["et1","et2","et3","et4","et5"]);
        let evento5 : Evento = new Evento("Ev05","Evento 5",new Date("2021-01-26"),new Date("2017-01-26"),"Unal","descripcion",userCrea1.getId(),"Ingenieria",user1.getId(),3,["et1","et2","et3","et4","et5"]);
        
        let listaAux : LinkedRef<Evento> = user1.getEventosGuardados();
        listaAux.addLatest(evento1);
        listaAux.addLatest(evento2);
        listaAux.addLatest(evento3);
        user1.setEventosGuardados(listaAux);
        //userCrea1.setEventosCreados(userCrea1.getEventosCreados()!.addLatest(evento1)!);
    console.log(JSON.stringify(user1));
    console.log("*******************************************");  
    //console.log(user1.toJSON());
    /*console.log("BIenvenido")    
    console.log(this.generarDatos());
    console.log(this.cargarDatos(this.generarDatos()));
    let admin2 = this.cargarDatos(this.generarDatos());
    console.log(typeof(admin2));
    console.log("--------------------------------------------------");
    let evtojson = evento1.toJSON;
    console.log(typeof(evtojson));
    let eventoP : Evento = evento1.fromJSON(evtojson);
    console.log(typeof(evento1));
    console.log(typeof(eventoP));*/
    //console.log(this.cargarDatosAJson());
    }
    public cargarDatos(pruebaY : string) : JSON  {
        let pruebaW = JSON.parse(pruebaY);
        return pruebaW;
    }
    public generarDatos() : string {
        var pruebaX  = JSON.stringify(CargarDatos.admin1);
        return pruebaX ;
    }
    /*public cargarDatosAJson() : JSON {
        var pruebaX: JSON = require("c:/Users/yenim/OneDrive/Documentos/UNAL/Estructuras de Datos/Proyecto/eventUS/data/datosAdministrador.json");
        return pruebaX ;
    }*/
    /*let eventoAux Evento = function (json: string) : Evento{
        var obj = JSON.parse (json);
        return new Evento (obj.id , obj.nombre, obj.fechaInicio, obj.fechaFinal,obj.lugar, obj.descripcion,
			obj.creador, obj.facultad, obj.proponente, obj.aforo, obj.etiquetas) );
    };*/
    
}
  
var prueba : CargarDatos = new CargarDatos();

export default CargarDatos;