import React, { useState } from 'react'
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


  //convertir a a array
  function convertirArray(l:LinkedRef<Evento>):Evento[]{
      let e:Evento[] = [];
      //let d:LinkedRef<Evento> = new LinkedRef();
      let tamanio:number = l.size();
      for(let i=0; i<tamanio;i++){
        e.push(l.get(i) as Evento);
      }
      return e;
    
  }

  function obtenerCola(q:QueueRef<Evento>){
    for(let j=0; j<q.size();j++){
      const e :Evento = q.dequeue() as Evento;
      <DivPropuesta E={e}></DivPropuesta>             
    }
  }
  


  

const perfil = () => {

  
  //Queda pendiente arreglar esto, que reciba el usuario global
  const {user, setUser} = useUser();
  //const [usuario, setUsuario] = useState(user);
  var _user = user as Creador;
  let listaDelCreador:Array<Evento> = [];
  listaDelCreador = _user.eventosCreados;
  let colaDelCreador:Array<Evento> = [];
  colaDelCreador = _user.propuestasEventos;
  colaDelCreador as Evento[];

 
  
  let mar = new Estudiante("1234","marx","marx","marx@hotmail","marx","holi")
  let creador_prueba = new Creador("29292","juan carlos","unu123","ajaja@gmail.com","12345",true,"ingenieria");
  //let ev_prueba = new Evento("2929","evento de prueba",new Date(2022),new Date(2023),"lugar","este es un evento de prueba, descripcion xd",creador_prueba,"ingenieria",mar);
  //let ev_prueba2 = new Evento("2930","evento de prueba 2",new Date(2022),new Date(2023),"lugar","esta es una descripcion medianamente larga",creador_prueba,"ingenieria",mar);
  //let ev_prueba3 = new Evento("2931","evento de prueba 3",new Date(2022),new Date(2023),"lugar","esta descripcion es corta",creador_prueba,"ingenieria",mar);
  //let ev_prueba4 = new Evento("2932","evento de prueba 4 ",new Date(2022),new Date(2023),"lugar","un evento de verdad debe tener descripcion xd",creador_prueba,"ingenieria",mar);
  //listaDelCreador.push(ev_prueba);
  //listaDelCreador.push(ev_prueba2);
  //listaDelCreador.push(ev_prueba3);
  //listaDelCreador.push(ev_prueba4);
  let eventosArray = listaDelCreador ;
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
                  
                    {eventosArray != undefined ? eventosArray.map((e:Evento) => (<DivEvento E={e}></DivEvento>)): <div></div>}
                  {/* //y que dios me perdone por lo que voy a hacer */}
    {               /*<DivEvento E={ev_prueba}></DivEvento>
                   <DivEvento E={ev_prueba2}></DivEvento>
                   <DivEvento E={ev_prueba3}></DivEvento>
  <DivEvento E={ev_prueba4}></DivEvento> */}
                  
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
                
                { /* obtenerCola()
                - Pendiente: convertir la cola a un arreglo de una forma u otra
                - que los botones de aprovar y denegar realmente hagan lo mismo en el objeto creador
                */}
          
            
                  {
                   colaDelCreador != undefined ? colaDelCreador.map((c:Evento)=> (<DivPropuesta E={c}></DivPropuesta>)) : <div></div>
                   //si es undefines retornamos un div vacio
                  }
                
        
                  
               
                
         
              </section>

            </PerfilCrea>
        </Layout>
      </main>
      
    </>
  )
}

export default perfil