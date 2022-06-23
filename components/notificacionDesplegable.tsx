import React, { useRef } from 'react'
import { useAdmin } from '../contexts/admin';
import { useUser } from '../contexts/user';
import { Administrador } from '../data/Administrador';
import { Creador } from '../data/Creador';
import { Estudiante } from '../data/Estudiante';
import { Notificacion } from '../data/Notificacion';
import { Usuario } from '../data/Usuario';


type N ={N:Notificacion};
const Desplegable =  ({N}:N) =>{
  const {user,setUser} = useUser();
  const {admin, setAdmin } = useAdmin();
  function borrarNotificacion(){
    let admiAux:Administrador = admin;

    if(divTexto.current != null){
      divTexto.current.style.display = "none";
    }
    //buscamos al usuario y le quitamos esa notificacion
    let actual:Usuario = user;
    if(actual instanceof Creador){
      let arr:Notificacion[] = admiAux.buscarCreador(user.id).notificaciones;
      arr = eliminarItem(arr,N);
      admiAux.buscarCreador(user.id).notificaciones = arr;
    }
    if(actual instanceof Estudiante){
      let arr:Notificacion[] = admiAux.buscarEstudiante(user.id).notificaciones;
      arr = eliminarItem(arr,N);
      admiAux.buscarEstudiante(user.id).notificaciones = arr;
    }
    else {
      let arr:Notificacion[] = admiAux.notificaciones;
      arr = eliminarItem(arr,N);
      admiAux.notificaciones = arr;
      
    }
    //salvamos la info
    setAdmin(admiAux);
    guardarAdmin();
    
    
  }

  function eliminarItem(arr:Notificacion[], n:Notificacion):Notificacion[]{
    for(let i = 0; i<arr.length; i++){
      if(arr[i] == n){
        //borramos el elemento
        arr.splice(i,1);
      }

    }
    return arr;
  }

  async function guardarAdmin() {
    console.log(admin.toJSON());
    const response = await fetch("/api/datos", {
      method: "PATCH",
      body: admin.toJSON(),
    });
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return await response.json();
}

  const divTexto = useRef<HTMLDivElement>(null);
    return(
        <div ref={divTexto}>
        
        <div className='barraNotificaciones'>
          <p > 
          {N.id}
            { //pendiente estilizar esta parte de notificaciones
        }</p>
        <p>{N.fecha.toDateString()}</p>
        <p>Descripcion: {N.descripcion != undefined ? N.descripcion: "No hay descripcion disponible"}</p>
         <button onClick={borrarNotificacion}>Aceptar</button>
        
        </div>
      </div>
    );
}





export default Desplegable;