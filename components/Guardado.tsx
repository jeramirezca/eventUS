import React, { useState } from 'react'
import Link  from 'next/link';
import { useAdmin } from '../contexts/admin';
import { useUser } from '../contexts/user';
import Card from './Card';
import { Evento } from '../data/Evento';

const Guardado = () => {
    const { admin, setAdmin } = useAdmin();
    const {user, setUser} = useUser();
    const [listaGuardados, setListaGuardados] = useState(admin.buscarEstudiante(user.id).getEventosGuardados());
    

    var adminAux = admin;
    const eliminarEvento=(e:Evento)=>{
        var listaAux=listaGuardados;
        listaAux.splice(listaAux.indexOf(e),1);
        setListaGuardados(listaAux);
        guardarAdmin();
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
        <div className="my-5 py-5 rounded-3xl grid grid-cols-1 md:grid-cols-2  gap-x-10">
          
          <div className=''>
              <h1 className="text-2xl font-semibold">
                  Proximos eventos
              </h1>
              <div className='flex'>

                  <Card information={"Lunes"} />
                  <Card information={"Martes"}/>
                  <Card information={"Miercoles"}/>
                  <Card information={"Jueves"}/>
                  <Card information={"Viernes"}/>
              </div>
              

          </div>
          <div className=''>
            <div className=''>
              <h1 className="text-2xl font-semibold">
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
                        
                        <div className='bg-azul rounded-3xl flex'>
                           <div>
                            <h1>{e.nombre}</h1>
                            <h1>{e.fecha.toISOString()}</h1>
                            <h1>{e.horaInicio}</h1>
                            <h1>{e.horaFin}</h1>
                           </div>
                           <div>
                            <Link href="/">
                                <div
                                    className="cursor-pointer bg-red-light text-blanco hover:bg-negro px-3 py-2 rounded-md text-lg font-medium"
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
                            <div className='bg-azul-light3 rounded-3xl'>
                                <div>
                                    <h1>{e.nombre}</h1>
                                    <h1>{e.fecha.toISOString()}</h1>
                                    <h1>{e.horaInicio}</h1>
                                    <h1>{e.horaFin}</h1>
                                </div>
                                <div className='justify-center'>
                                    <Link href="/">
                                        <div 
                                            className="cursor-pointer bg-red-light text-blanco hover:bg-negro px-3 py-2 rounded-md text-lg font-medium"
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