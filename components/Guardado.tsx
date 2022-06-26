import React, { useState } from 'react'
import Link  from 'next/link';
import { useAdmin } from '../contexts/admin';
import { useUser } from '../contexts/user';
import Card from './Card';
import { Evento } from '../data/Evento';
import { toast } from 'react-toastify';
import { Estudiante } from '../data/Estudiante';

const Guardado = () => {
 
    const { admin, setAdmin } = useAdmin();
    const {user, setUser} = useUser();
    const [listaGuardados, setListaGuardados] = useState(admin.buscarEstudiante(user.id).getEventosGuardados());
    const [listaPropuestos, setListaPropuestos]=useState(admin.buscarEstudiante(user.id).eventosPropuestos);
    
    let xd:Estudiante = user as Estudiante;
    console.log(`Este 
    son los eventos propuestos 
    ${ xd.eventosPropuestos}`)
    console.log(xd.eventosPropuestos)

    var adminAux = admin;
    const eliminarPropuesta=async (e:Evento)=>{
        var listaAux=listaPropuestos;
        listaAux.splice(listaAux.indexOf(e),1);
        setListaPropuestos(listaAux);
        var listaEventosPropuestosAlCreador=adminAux.buscarCreador(e.idCreador).propuestasEventos;
        listaEventosPropuestosAlCreador.splice(listaEventosPropuestosAlCreador.indexOf(e),1);
        adminAux.buscarCreador(e.idCreador).propuestasEventos=listaEventosPropuestosAlCreador;
        setAdmin(adminAux)

        try {
            await guardarAdmin();
            toast.success("Evento Eliminado", {
              position: "bottom-center",
              autoClose: 3009,
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
    const eliminarEvento=async (e:Evento)=>{
        var listaAux=listaGuardados;
        listaAux.splice(listaAux.indexOf(e),1);
        setListaGuardados(listaAux);
        try {
            await guardarAdmin();
            toast.success("Evento Eliminado", {
              position: "bottom-center",
              autoClose: 3009,
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
    
    return (
       <div>
        <div className=" rounded-3xl grid grid-cols-1 md:grid-cols-2  gap-x-12 flex space-x-14 > * + * ">
          
          <div className=''>
              <h1 className="titulo font-semibold">
                  Proximos eventos
              </h1>
              <div className='flex'>

                  <Card information={"Lunes"} />
                  <Card information={"Martes"}/>
                  <Card information={"Miercoles"}/>
                  <Card information={"Jueves"}/>
                  <Card information={"Viernes"}/>
              </div>
                <div>
                    <h1 className='titulo'>Eventos Propuestos</h1>
                </div>
                <div className='propuestos'>
                {listaPropuestos ? (
                    <>
                    {listaPropuestos.map((e:Evento)=>{
                    let indice:number=listaPropuestos.indexOf(e);
                    if(indice%2==0){
                        return(
                            <div className='bg-azul rounded-3xl flex space-x-12 > * + * px-5 grid grid-cols-2'>
                            <div>
                                <h1 className="text-2xl font-semibold">{e.nombre}</h1>
                                <h1 className=''> 
                                    <span className='font-semibold text-xl'>Fecha:</span>{e.fecha.getDate()}/{e.fecha.getMonth()}/{e.fecha.getFullYear()}
                                </h1>

                                <h1><span className='font-semibold text-xl'>Hora: </span>{e.horaInicio}-{e.horaFin}</h1>
                                <h1><span className='font-semibold text-xl'>Creador Encargado </span>{adminAux.buscarCreador(e.idCreador).nombre}</h1>
                            </div>
                            <div className='grid grid-cols-1'>
                                <div className='justify-center'>
                                <h1 className='font-semibold'>Estado</h1>
                                {e.estado==true ?(
                                    <>
                                        <div 
                                        className=" bg-verde-light text-blanco py-1 rounded-md text-lg font-medium my-2"
                                    >Aprobado
                                    </div>
                                    </>
                                ): (
                                    <></>
                                )}
                                {e.estado==false ?(
                                    <>
                                    <div 
                                        className=" bg-naranja-light text-blanco py-1 rounded-md text-lg font-medium my-2"
                                    >En Espera
                                    </div>
                                    </>
                                ): (
                                    <></>
                                )}


                                
                                </div>
                                <div className='justify-center'>
                                <Link href="">
                                    <div 
                                        className="cursor-pointer bg-red-light text-blanco hover:bg-negro px-3 py-1 rounded-md text-lg font-medium  px-1 my-2"
                                        onClick={()=>{
                                            eliminarPropuesta(e)}}
                                    >eliminar
                                    </div>
                                </Link>

                                </div>

                            </div>
                            
                            
                        </div>
                    )
                    }else{
                        return(
                            <div className='bg-azul-light3 rounded-3xl flex space-x-12 > * + * px-5 grid grid-cols-2'>
                            <div>
                                <h1 className="text-2xl font-semibold">{e.nombre}</h1>
                                <h1 className=''> 
                                    <span className='font-semibold text-xl'>Fecha:</span>{e.fecha.getDate()}/{e.fecha.getMonth()}/{e.fecha.getFullYear()}
                                </h1>

                                <h1><span className='font-semibold text-xl'>Hora: </span>{e.horaInicio}-{e.horaFin}</h1>
                                <h1><span className='font-semibold text-xl'>Creador Encargado </span>{adminAux.buscarCreador(e.idCreador).nombre}</h1>
                            </div>
                            <div className='grid grid-cols-1'>
                                <div className='justify-center'>
                                <h1 className='font-semibold'>Estado</h1>
                                {e.estado==true ?(
                                    <>
                                        <div 
                                        className=" bg-naranja-light text-blanco py-1 rounded-md text-lg font-medium my-2"
                                    >Aprobado
                                    </div>
                                    </>
                                ): (
                                    <></>
                                )}
                                {e.estado==false ?(
                                    <>
                                    <div 
                                        className=" bg-naranja-light text-blanco py-1 rounded-md text-lg font-medium my-2"
                                    >En Espera
                                    </div>
                                    </>
                                ): (
                                    <></>
                                )}


                                
                                </div>
                                <div className='justify-center'>
                                <Link href="">
                                    <div 
                                        className="cursor-pointer bg-red-light text-blanco hover:bg-negro px-3 py-1 rounded-md text-lg font-medium  px-1 my-2"
                                        onClick={()=>{
                                            eliminarPropuesta(e)}}
                                    >eliminar
                                    </div>
                                </Link>

                                </div>

                            </div>
                            
                            
                        </div>
                        )
                        
                    }
                   
                })}</>

                ): (
                    <></>
                  )
                }

                </div>
              

          </div>
          <div className=''>
            <div className=''>
              <h1 className="titulo font-semibold">
                  Eventos Guardados
              </h1>
            </div>
            <div className='eventos '>
            
                {listaGuardados ? (
                    <>
                    {listaGuardados.map((e:Evento)=>{
                    let indice:number=listaGuardados.indexOf(e);
                    if(indice%2==0){
                        return(
                        
                        <div className='bg-azul rounded-3xl flex space-x-12 > * + * px-5 grid grid-cols-2'>
                            <div>
                                <h1 className="text-2xl font-semibold">{e.nombre}</h1>
                                <h1 className=''> 
                                    <span className='font-semibold text-xl'>Fecha:</span>{e.fecha.getDate()}/{e.fecha.getMonth()}/{e.fecha.getFullYear()}
                                </h1>

                                <h1><span className='font-semibold text-xl'>Hora: </span>{e.horaInicio}-{e.horaFin}</h1>
                                <h1><span className='font-semibold text-xl'>Lugar </span>{e.lugar}</h1>
                            </div>
                            <div className='justify-center'>
                                <Link href="">
                                    <div 
                                        className="cursor-pointer bg-red-light text-blanco hover:bg-negro px-3 py-2 rounded-md text-lg font-medium  px-1 my-7"
                                        onClick={()=>{
                                            eliminarEvento(e)}}
                                    >eliminar
                                    </div>
                                </Link>
                            </div>
                            
                        </div>
                    )
                    }else{
                        return(
                            <div className='bg-azul-light3 rounded-3xl flex space-x-12 > * + * px-5 grid grid-cols-2'>
                                <div>
                                    <h1 className="text-2xl font-semibold">{e.nombre}</h1>
                                    <h1 className=''> 
                                        <span className='font-semibold text-xl'>Fecha:a</span>{e.fecha.getDate()}/{e.fecha.getMonth()}/{e.fecha.getFullYear()}
                                    </h1>

                                    <h1><span className='font-semibold text-xl'>Hora: </span>{e.horaInicio}-{e.horaFin}</h1>
                                    <h1><span className='font-semibold text-xl'>Lugar </span>{e.lugar}</h1>
                                </div>
                                <div className='justify-center'>
                                    <Link href="">
                                        <div 
                                            className="cursor-pointer bg-red-light text-blanco hover:bg-negro px-3 py-2 rounded-md text-lg font-medium  px-1 my-7"
                                            onClick={()=>{
                                                eliminarEvento(e)}}
                                        >eliminar
                                        </div>
                                    </Link>
                                </div>
                                
                            </div>
                        )
                        
                    }
                   
                })}</>

                ): (
                    <></>
                  )
                }
                
                 
                    
                
            </div>
                

          </div>
         
        

      </div>
      
      
       </div>
    )
}

export default Guardado