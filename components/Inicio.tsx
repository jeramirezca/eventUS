import React from "react";
import {Fragment} from "react";
import Link from 'next/link'; 
import { useAuth } from '../contexts/auth';
import { useUser } from '../contexts/user';


const Inicio = () => {
  
  const {auth, setAuth} = useAuth();
  const {user, setUser} = useUser();

  return (
    <div className="flex justify-center items-center flex-row ">
    {auth ? (
      <>
      <div className="md:block flex justify-center items-center flex-col pt-40 text-center m-6">
      <img
        
        src="https://i.ibb.co/8K5XSC6/LOG.png"
        
        alt="prueba"
        className="w-80 imgr"
      />
    </div>
    <div className="flex justify-center items-center flex-col pt-40 text-center font-bold lg:text-8xl text-6xl space-y-2 m-5">
      <h1 className="text-gray-900 pb-10">
        Bienvenid@ de nuevo <span className="text-azul">{user.nombre}</span>
        
      </h1>
    </div>
    </>
    ):(
    <>
      <div className="md:block flex justify-center items-center flex-col pt-40 text-center m-3 pl-12">
      <img
        src="https://i.ibb.co/8K5XSC6/LOG.png"
        alt="prueba"
        className="w-80 imgr"
      />
    </div>
    <div className="flex justify-center items-center flex-col pt-40 text-center font-bold lg:text-8xl text-6xl space-y-2">
      <h1 className="text-gray-900 pb-10">
        Bienvenid@ a event<span className="text-azul">US</span>
      </h1>
      <div className="flex flex-row flex-wrap justify-center">
        <Link href="/registro">
          <div className="flex justify-center items-center cursor-pointer hover:shadow-lg hover:bg-negro  text-3xl font-semibold text-blanco bg-azul rounded-lg w-64 h-16 m-3">
            <i className="fa-solid fa-file-signature pr-2"></i>
            <h1 className="text-center">Registrate</h1>
          </div>
        </Link>
        <Link href="/login">
          <div className="flex justify-center items-center cursor-pointer hover:shadow-lg hover:bg-negro text-3xl font-semibold text-blanco bg-azul rounded-lg w-64 h-16 m-3 ">
            <i className="fa-solid fa-right-to-bracket pr-2"></i>
            <h1 className="text-center">Inicia sesión</h1>
          </div>
        </Link>
      </div>
    </div>
    </>
    )}
    </div>

  );
};

export default Inicio;
