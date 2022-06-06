import React from 'react'
import Layout from "../../layout/Layout";
import Head from 'next/head'
import PerfilCrea from '../../components/perfCreador';
import InfoEvento from '../../components/InfoEvento';
import DivEvento from '../../components/divEvento';
import { Evento } from '../../data/Evento';
import DivPropuesta from '../../components/divPropuesta';
import { pruebas } from '../../structures/Pruebas';
import { Estudiante } from '../../data/Estudiante';
import { Creador } from '../../data/Creador';
import { Usuario } from '../../data/Usuario';
import { useUser } from '../../contexts/user';
import { LinkedRef } from '../../structures/LinkedRef';
import { QueueRef } from '../../structures/QueueRef';



const perfil = () => {

  const {user, setUser} = useUser();
  let _user = user as Creador;
  let listaDelCreador:LinkedRef<Evento> = _user.getEventosCreados();
  let colaDelCreador:QueueRef<Evento> = _user.getPropuestasEventos();
  colaDelCreador as QueueRef<Evento>;
  //convertir a a array
  function convertirArray(l:LinkedRef<Evento>):Evento[]{
      let e:Evento[] = [];
      for(let i=0; i<l.size();i++){
        e.push(l.get(i) as Evento);
      }
      return e;
    
  }

  function obtenerCola(q:QueueRef<Evento>){
    for(let j=0; j<colaDelCreador.size();j++){
      const e :Evento = colaDelCreador.dequeue() as Evento;
      <DivPropuesta E={e}></DivPropuesta>             
    }
  }


  let eventosArray = convertirArray(listaDelCreador); 
  
  return (
    <>
      <Head>
        <title>Bienvenido creador(a)</title>
      </Head>

      <main>
        <Layout>
            <PerfilCrea>
              <section className='flexVert'>
                <div className='cajaIzquierda'>
                  Ultimos eventos creados
                <br></br>
                  {
                    eventosArray.map((e:Evento) => (<DivEvento E={e}></DivEvento>))
                   //y que dios me perdone por lo que voy a hacer 
                  }
                </div>
                <div className='cajaIzquierda'>
                  <button>Crear un evento</button>
                </div>
              </section>
              <section className='flexVert'>
              <div className='cajaDerecha'>
                <strong>Buscar eventos</strong>
                <input id='eventoAbuscar' placeholder='Ingresa el nombre del evento'/>
              
                <button>Buscar</button>
                </div>
                <div className='cajaDerecha'>
                <strong>¿Cómo usar la interfaz?</strong>
                <ul>
                  <li>En la parte de la izquierda puedes ver los ultimos eventos creados</li>
                  <li>Arriba puedes buscar eventos por su nombre</li>
                  <li>Abajo puedes aprovar o denegar propuestas</li>
                  <li></li>
                </ul>
                </div>
              </section>
            </PerfilCrea>
            <PerfilCrea>
              <section className='flexVert'>
                <h1><strong>Propuestas de eventos</strong></h1>
                <br></br>
                <p>Los siguientes eventos han sido propuestos por algun estudiante, por favor revisalas:</p>
                <br></br>
                
                 obtenerCola()
                
         
              </section>

            </PerfilCrea>
        </Layout>
      </main>
      
    </>
  )
}

export default perfil