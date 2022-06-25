import router from 'next/router';
import React, { useRef } from 'react'
import { toast } from 'react-toastify';
import { useAdmin } from '../contexts/admin';
import { useUser } from '../contexts/user';
import { Administrador } from '../data/Administrador';
import { Creador } from '../data/Creador';
import { Estudiante } from '../data/Estudiante';
import { Notificacion } from '../data/Notificacion';
import { Usuario } from '../data/Usuario';


type N ={N:Notificacion};
const Desplegable =   ({N}:N) =>{
  const {user,setUser} = useUser();
  const {admin, setAdmin } = useAdmin();
  const divTexto = useRef<HTMLDivElement>(null);
  
  async function borrarNotificacion(){
    var admiAux = admin;
    var user2 = user;

    if(divTexto.current != null){
      divTexto.current.style.display = "none";
    }
    //buscamos al usuario y le quitamos esa notificacion
    let actual:Usuario = user;
    if(actual instanceof Creador){
      let arr:Notificacion[] = admiAux.buscarCreador(user.id).notificaciones;
      arr = eliminarItem(arr,N);
      admiAux.buscarCreador(user.id).notificaciones = arr;
      user2.notificaciones = arr;
      setUser(user2);
    }
    if(actual instanceof Estudiante){
      let arr:Notificacion[] = admiAux.buscarEstudiante(user.id).notificaciones;
      arr = eliminarItem(arr,N);
      admiAux.buscarEstudiante(user.id).notificaciones = arr;
      user2.notificaciones = arr;
      setUser(user2);
    }
    else {
      let arr:Notificacion[] = admiAux.notificaciones;
      arr = eliminarItem(arr,N);
      admiAux.notificaciones = arr;
      
      user2.notificaciones = arr;
      setUser(user2);
      
    }
    //salvamos la info
    
    setAdmin(admiAux);
    
    try {
       await guardarAdmin();
      toast.success("Notificacion borrada", {
        position: "bottom-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } catch (err) {
      console.log(err);
    }
    
    
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