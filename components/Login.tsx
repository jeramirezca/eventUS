import React from 'react'
import Link from 'next/link'; 


const Login = () => {
  return (
    <div className="md:w-96 w-2/4 bg-azul-light rounded-3xl">
      <form className="">
        <h1 className="font-bold text-3xl p-4">Inicio de Sesión</h1>
        <div className="flex flex-col justify-center items-center">
          <label className="p-3">Usuario</label>
          <input
            id="usuario"
            type="text"
            placeholder="Ingrese su usuario"
            className=""
          />
        </div>
        <div className="flex flex-col justify-center items-center">
          <label className="p-3">Contraseña</label>
          <input
            id="contrasena"
            type="password"
            placeholder="Ingrese su contraseña"
            className=""
          />
        </div>
        <Link href="/">
          <button className="bg-azul mt-6 mb-2"> Iniciar Sesión </button>
        </Link>
        <div className="p-3 text-base mb-3">
          <span className="text-azul mr-2">¿No tienes una cuenta?</span>
          <Link href="/registro">
            <button type="button" className="text-negro underline bg-transparent">
              <span className="">Crear una cuenta</span>
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Login