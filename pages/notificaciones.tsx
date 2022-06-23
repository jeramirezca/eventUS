import Head from 'next/head'
import React from 'react'
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

  if(user != undefined){
    if(usuario instanceof Administrador){
      notificaciones = admin.notificaciones;
      //usar geters y seters es un problema grave, mejor acceder al atributo
  
    }
    else if(usuario instanceof Estudiante){
        notificaciones = admin.buscarEstudiante(user.id).notificaciones;
    }
  
    else if(usuario instanceof Creador){
      //suponemos que es creador
      notificaciones = admin.buscarCreador(user.id).notificaciones;
  
    }
  }
  
 
  return (
    <>
      <Head>
      
        <title>Notificaciones, tienes {notificaciones.length} sin leer</title>
        
      </Head>
      <Layout>
        <Notificaciones />
        <div>
          <>
          {notificaciones.map((N:Notificacion) => {<Desplegable N={N}></Desplegable>})}
          <Desplegable N={new Notificacion("xd", new Date())}></Desplegable>
          </>
        </div>
         
      </Layout>
    </>
  )
}

export default notificaciones