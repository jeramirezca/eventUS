import Head from 'next/head'
import React, { useState } from 'react'
import Layout from '../layout/Layout'
import Notificaciones from '../components/Notificaciones';
import Desplegable from '../components/notificacionDesplegable';
import { useUser } from '../contexts/user';
import { useAuth } from '../contexts/auth';
import { useAdmin } from '../contexts/admin';
import { Usuario } from '../data/Usuario';
import { Notificacion } from '../data/Notificacion';

import { Administrador } from '../data/Administrador';
import { Estudiante } from '../data/Estudiante';
import { Creador } from '../data/Creador';



const notificaciones = () => {
  const {user, setUser} = useUser();
const {auth, setAuth} = useAuth();
const {admin, setAdmin} = useAdmin();

  
  let usuario:Usuario = user;
  let notificaciones:Notificacion[] = [];
  const [contadorNotific,setNot] = useState(notificaciones.length);

  if(user != undefined){
    if(usuario instanceof Administrador){
      notificaciones = user.notificaciones;
    
      
      //usar geters y seters es un problema grave, mejor acceder al atributo

  
    }
    else if(usuario instanceof Estudiante){
      //  notificaciones = admin.buscarEstudiante(user.id).notificaciones;
      notificaciones = user.notificaciones;
    
    }
  
    else if(usuario instanceof Creador){
      //suponemos que es creador
     // notificaciones = admin.buscarCreador(user.id).notificaciones;
     notificaciones = user.notificaciones;
    
  
    }
    
  }

  const checkNumber = () => {
    if(notificaciones.length != 0){
      setNot(notificaciones.length);
    }
  }
 
 
  return (
    <>
      <Head>
      <title>Notificaciones, tienes {notificaciones.length} sin leer</title>
        
        
      </Head>
      <Layout>
       
        <div className='cajaDerecha'>
          <>
          <br></br>
        
        <h2><strong>Tus Notificaciones: </strong>  </h2>
        <div>
          <>
          {notificaciones.map((n:Notificacion) => (n != null ? <Desplegable N={n}></Desplegable>: " "))}
          </>
        </div>
        <br></br>
          </>
        
        </div>
         
      </Layout>
    </>
  )
}

export default notificaciones