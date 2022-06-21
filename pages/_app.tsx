import '../styles/globals.css'
import '../styles/prueba.css'
import '../styles/forms.css'
import '../styles/tables.css'
import '../styles/estiloscreador.css';

import type { AppProps } from 'next/app'
import { useEffect, useState } from 'react'
import { UserContext } from '../contexts/user'
import { AuthContext } from '../contexts/auth'
import { AdminContext } from '../contexts/admin';
import { useUser } from '../contexts/user'
//import { Usuario } from '../classes/Usuario'
import { LinkedRef } from '../structures/LinkedRef'
import { Usuario } from '../data/Usuario';
import { PrismaClient } from '@prisma/client';
import { Administrador } from '../data/Administrador';
import { GuardarContext } from '../contexts/guardar';
import { Evento } from '../data/Evento';
import { EventoContext } from '../contexts/evento';

function MyApp({ Component, pageProps }: AppProps) {
  const [user, setUser] = useState(new Usuario("","","","","",false));
  const [auth, setAuth] = useState(false);
  const [admin, setAdmin] = useState(new Administrador("","","","","",false));
  const [guardar, setGuardar] = useState(false);
  const [evento, setEvento] = useState(new Evento("","",new Date(),"","","","","","","",false,));

  /* useEffect(() => {
    console.log("admin actualizado")
  }, [guardar, setGuardar]); */

  return (
    <UserContext.Provider value={{ user, setUser }}>
          <AuthContext.Provider value={{ auth, setAuth }}>
            <AdminContext.Provider value={{ admin,setAdmin }}>
              <GuardarContext.Provider value={{ guardar,setGuardar }}>
                <EventoContext.Provider value={{ evento,setEvento}}>
            <Component {...pageProps} />
            </EventoContext.Provider>
            </GuardarContext.Provider>
            </AdminContext.Provider>
          </AuthContext.Provider>
    </UserContext.Provider>
  );
    
    
}

export default MyApp
