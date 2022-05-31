import React from 'react'
import Link from 'next/link';

const Eventos = () => {
  return (
    <div className='flex justify-center items-center flex-row w-full'>
        <div className="hidden md:block w-2/5 bg-azul-light rounded-3xl mr-6">
        <form className="">
        <h1 className="font-bold text-3xl p-4">filtro</h1>
        <div className="flex flex-col justify-center items-center">
          <label className="">fecha</label>
          <input
            id="usuario"
            type="text"
            placeholder="Ingrese su usuario"
            className=""
          />
          <label className="p-3">Contraseña</label>
          <input
            id="contrasena"
            type="password"
            placeholder="Ingrese su contraseña"
            className=""
          />
        </div>
        <button className="bg-azul mt-6 mb-2"> Buscar </button>
      </form>

        </div> 
        <div className="flex justify-center items-center w-11/12 bg-azul-light text-blanco rounded-3xl flex-col maxAltura">
            <div className='flex items-center justify-center bg-azul-light2 rounded-xl flex-row w-11/12 m-2 h-auto'>
                <div className='flex justify-center justify-self-start items-center flex-col overflow-hidden'>
                    <div className='flex justify-center items-center flex-row  flex-wrap'>
                        <div className='flex justify-center items-center'>
                           <span className='px-2 py-1 bg-azul-dark2 m-2 rounded-md '>
                            nombre 
                            </span>
                            <span className='maxWidth text-negro bg-blanco'>
                                nholaaaaaaaaaaaaaaaaaaaaaaaaaaaddddd
                            </span> 
                        </div>
                        <div className='flex justify-center items-center'>
                        <span className='px-2 py-1 bg-purple m-2 rounded-md'>
                            fecha
                            </span>
                            <span className='maxWidth bg-negro '>
                                holaaaaaaaaaaaaaaaaaaaaaa
                            </span>  
                        </div>
                        <div className='flex justify-center items-center'>
                           <span className='px-2 py-1 bg-purple m-2 rounded-md'>
                            nombre 
                            </span>
                            <span className='maxWidth'>
                                nholaaaaaaaaaaaaaaaaaaaaaaaaaaaddddd
                            </span> 
                        </div>
                        <div className='flex justify-center items-center'>
                        <span className='px-2 py-1 bg-purple m-2 rounded-md'>
                            fecha
                            </span>
                            <span className='maxWidth bg-negro '>
                                holaaaaaaaaaaaaaaaaaaaaaa
                            </span>  
                        </div>
                         
                    </div>
                    
                    
                </div>
                <div>
                   <button className='mr-2'>
                      <i className="fa-solid fa-eye"></i>
                    </button>
                    <button className='mr-2'>
                    <i className="fa-solid fa-bookmark"></i>
                    </button> 
                </div>
                
            </div>
            
        </div>
    </div>
  )
}

export default Eventos