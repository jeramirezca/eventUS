import React from 'react'

const InfoEvento = () => {
  return (
    <div className='md:w-96 w-2/4 bg-azul-light rounded-3xl'>
          <form className="">
            <h1 className="font-bold text-3xl p-4">Info evento</h1>
            <div className="flex flex-col justify-center items-center">
                <label className ="p-3">Usuario</label>
                <input id="usuario" type="text" placeholder ="Ingrese su usuario" className=""/>
            </div>
            <div className="flex flex-col justify-center items-center">
                <label  className ="p-3">Contraseña</label>
                <input id="contrasena"type="password" placeholder ="Ingrese su contraseña" className="" disabled/>
            </div>
              <button  className="bg-azul mt-6 mb-2"> Iniciar Sesión </button>          
        </form>
            
          </div>
  )
}

export default InfoEvento