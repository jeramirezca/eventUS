import React, { useRef, useState } from 'react'
import Layout from "../../layout/Layout";
import Head from 'next/head'
import PerfilCrea from '../../components/perfCreador';
import InfoEvento from '../../components/InfoEvento';
import DivEvento from '../../components/divEvento';
import { Evento } from '../../data/Evento';
import DivPropuesta from '../../components/divPropuesta';
import { Estudiante } from '../../data/Estudiante';
import { Creador } from '../../data/Creador';
import { Usuario } from '../../data/Usuario';
import { useUser } from '../../contexts/user';
import { useAdmin } from '../../contexts/admin';
import { useAuth } from '../../contexts/auth';
import router from 'next/router';
import Link from 'next/link';
import { toast } from 'react-toastify';



const perfilCreador = () => {

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
    const inputTexto = useRef<HTMLInputElement>(null);
    const {user, setUser} = useUser();
    const {auth, setAuth} = useAuth();
    const {admin, setAdmin} = useAdmin();
    const [eventosCreados, setEventosCreados] = useState(admin.buscarCreador(user.id)? (admin.buscarCreador(user.id).eventosCreados):(new Array<Evento>) );
    const [eventosPropuestos, setEventosPropuestos] = useState(admin.buscarCreador(user.id)? (admin.buscarCreador(user.id).propuestasEventos):(new Array<Evento>));
    const [openDialog, setOpenDialog] = useState(false);


    const eliminarEvento = async (id: string, rol: string)=>{
        //creas una copia del admin
        //var adminAux = admin;
        //Aquí haces las operaciones que quieras con el admin, digamosn en este caso quitarlle al creador registrado el evento

        //vuelves a guardar el admin
        //setAdmin(adminAux);
        //Actualizas los eventos de la pagina
        setEventosCreados(admin.buscarCreador(user.id).eventosCreados);
        //mandas la info a la base de datos para cambiar
        try {
          await guardarAdmin();
          toast.success("Usuario eliminado con exito", {
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
        //recargas página para ver actulizado
        router.push("/creador/perfilCreador");
      }


      function mostrarEvento(){
        if(inputTexto.current != null){
          let id:string = inputTexto.current.value;
          let mostrar:Evento|null = null;
            let crea_tmp:Creador = user as Creador;
              crea_tmp.eventosCreados.map((e:Evento) => {
                if(e.id == id){
                    mostrar = e;
                }
              }
              );
            
              if(mostrar == null){
                /*
                toast.error('El evento no existe o lo escribiste mal', {
                  position: "bottom-center",
                  autoClose: 2000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  });

                  */
                 alert("el evento no existe o lo escribiste mal");
              }
              else{
                //mostramos el evento en un div
                <DivEvento E={mostrar}></DivEvento>
              }
          
          
         
          
        }
      }

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
                    {eventosCreados.map((e:Evento) => (<DivEvento E={e}></DivEvento>))}
                </div>
                <div className='cajaIzquierda'>
                  <button onClick={() => router.push("/creador/crearEvento")}>Crear un evento</button>
                </div>
              </section>
              <section className='flexVert'>
              <div className='cajaDerecha'>
                <strong>Buscar eventos</strong>
                <input ref={inputTexto} placeholder='Ingresa el nombre del evento'/>
              
                <button onClick={mostrarEvento}>Buscar</button>
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
                  {eventosPropuestos.map((c:Evento)=> (<DivPropuesta E={c}></DivPropuesta>))}
              </section>

            </PerfilCrea>
        </Layout>
      </main>
      
    </>
  )
}

export default perfilCreador