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



const perfil = () => {

  let mar = new Estudiante("1234","marx","marx","marx@hotmail","marx","holi");
  let creador_prueba = new Creador("29292","juan carlos","unu123","ajaja@gmail.com","12345",true,"ingenieria");
  let ev_prueba = new Evento("2929jsj","juernes",new Date(2022),new Date(2023),"lugar","este es un evento de prueba, descripcion xd",creador_prueba,"ingenieria",mar);
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
                <DivEvento E={ev_prueba}></DivEvento>
                <DivEvento E={ev_prueba}></DivEvento>
                <DivEvento E={ev_prueba}></DivEvento>
                <DivEvento E={ev_prueba}></DivEvento>
                <DivEvento E={ev_prueba}></DivEvento>
                <DivEvento E={ev_prueba}></DivEvento>
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
                <DivPropuesta E={ev_prueba}></DivPropuesta>
                <DivPropuesta E={ev_prueba}></DivPropuesta>
                <DivPropuesta E={ev_prueba}></DivPropuesta>
                <DivPropuesta E={ev_prueba}></DivPropuesta>
                <DivPropuesta E={ev_prueba}></DivPropuesta>
                <DivPropuesta E={ev_prueba}></DivPropuesta>
                <DivPropuesta E={ev_prueba}></DivPropuesta>
              </section>

            </PerfilCrea>
        </Layout>
      </main>
      
    </>
  )
}

export default perfil