import React, {useState} from 'react'
import {Transition} from '@headlessui/react';
//import {Link} from "react-scroll"; 
import Link from 'next/link';
import { useAuth } from '../contexts/auth';
import { useUser } from '../contexts/user';

const Navbar = () => {

  const {auth, setAuth} = useAuth();
  const {user, setUser} = useUser();

    /* Inicializamos la pestaña como falsa porque estará cerrada y cambiara a lo largo del programa */
  const[isOpen, setIsOpen] = useState(false);
	const[authToken, setauthToken] = useState(false);

  return (
    <nav className="shadow-sm fixed w-full z-10 bg-azul-light block">
      <div className="w-full">
        <div className="flex items-center h-20 w-full">
          <div className="flex items items-center mx-10 justify-between w-full ">
            <div className="flex justify-center items-center flex-shrink-0">
              <img
                src="https://i.ibb.co/8K5XSC6/LOG.png"
                alt="logo"
                className="w-9 mt-2 mr-2"
              />
             
              <h1 className="text-2xl font-semibold">
                event<span className="text-azul font-extrabold">US</span>
              </h1>
            </div>
            {/* Para las pantallas pequeñas no se mostrarán los iconos */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link href="/">
                  <div className="cursor-pointer text-azul font-semibold px-3 py-2 text-xl hover:text-negro">
                    <i className="fas fa-home pr-1" />
                    Inicio
                  </div>
                </Link>

                {auth ? (
                  <>
                    <Link href="/perfil">
                      <div className="cursor-pointer hover:bg-azul text-black hover:text-blanco px-3 py-2 rounded-md text-lg font-medium transition-all">
                        <i className="fa-solid fa-user pr-1"></i>
                        Perfil
                      </div>
                    </Link>

                    <Link href="/eventos">
                      <div className="cursor-pointer hover:bg-azul text-black hover:text-blanco px-3 py-2 rounded-md text-lg font-medium transition-all">
                        <i className="fa-solid fa-calendar-days pr-1"></i>
                        Eventos
                      </div>
                    </Link>
                    {user.rol == "ADMINISTRADOR" ? (
                      <Link href="/admin/usuarios">
                        <div className="cursor-pointer hover:bg-azul text-black hover:text-blanco px-3 py-2 rounded-md text-lg font-medium transition-all">
                          <i className="fa-solid fa-users pr-1"></i>
                          Usuarios
                        </div>
                      </Link>
                    ) : (
                      <></>
                    )}
                    {user.rol == "ESTUDIANTE" ? (
                      <Link href="/">
                        <div className="cursor-pointer hover:bg-azul text-black hover:text-blanco px-3 py-2 rounded-md text-lg font-medium transition-all">
                          <i className="fa-solid fa-bookmark pr-1"></i>
                          Guardados
                        </div>
                      </Link>
                    ) : (
                      <></>
                    )}

                    {user.rol == "CREADOR" ? (
                      <Link href="/creador/perfilCreador">
                        <div className="cursor-pointer hover:bg-azul text-black hover:text-blanco px-3 py-2 rounded-md text-lg font-medium transition-all">
                          <i className="fa-solid fa-bookmark pr-1"></i>
                          Creados
                        </div>
                      </Link>
                    ) : (
                      <></>
                    )}
                    <Link href="/">
                      <div
                        className="cursor-pointer bg-azul text-blanco hover:bg-negro px-3 py-2 rounded-md text-lg font-medium"
                        onClick={() => setAuth(false)}
                      >
                        <i className="fa-solid fa-right-from-bracket pr-1"></i>
                        Logout
                      </div>
                    </Link>
                  </>
                ) : (
                  <>
                    <Link href="/login">
                      <div
                        onClick={() => setauthToken(!authToken)}
                        className="cursor-pointer hover:bg-azul text-black hover:text-blanco px-3 py-2 rounded-md text-lg font-medium transition-all"
                      >
                        <i className="fa-solid fa-right-to-bracket pr-1"></i>
                        login
                      </div>
                    </Link>
                    <Link href="/registro">
                      <div className="cursor-pointer hover:bg-azul text-black hover:text-blanco px-3 py-2 rounded-md text-lg font-medium transition-all">
                        <i className="fa-solid fa-file-signature pr-1"></i>
                        registro
                      </div>
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
          {/* Ahora el diseño responsive para celulares */}
          <div className="mr-10 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-azul text-blanco inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-negro focus: outline-none focus:ring-offset-2 focus:ring-offset-azul focus:ring-blanco"
            >
              <span className="sr-only"> Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      <Transition
        show={isOpen}
        enter="transition ease-out duration-100 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        {(ref: any) => (
          <div className="md:hidden" id="mobile-menu">
            <div
              ref={ref}
              className="bg-blanco px-2 pt-2 pb-3 space-y-1 sm:px-3"
            >
              <Link
                href="/home"
                /* activeClass="home"
									to="home"
									smooth={true}
									offset={50}
									duration={500}
									className="cursor-pointer hover:bg-azul text-black hover:text-blanco block px-3 py-2 rounded-md text-base font-medium" */
              >
                Home
              </Link>
            </div>
          </div>
        )}
      </Transition>
    </nav>
  );
}

export default Navbar