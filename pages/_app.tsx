import '../styles/globals.css'
import '../styles/prueba.css'
import '../styles/forms.css'
import '../styles/tables.css'
import '../styles/estiloscreador.css';

import type { AppProps } from 'next/app'
import { useState } from 'react'
import { UserContext } from '../contexts/user'
import { AuthContext } from '../contexts/auth'
import { ListUsersContext } from '../contexts/listUsers'
import { useUser } from '../contexts/user'
//import { Usuario } from '../classes/Usuario'
import { LinkedRef } from '../structures/LinkedRef'
import { pruebas } from '../structures/Pruebas'
import { Usuario } from '../data/Usuario';
import { ListEventsContext } from '../contexts/events'
import { pruebasEventos } from '../structures/PruebasEventos'
import { pruebasArbol } from '../structures/PruebasEventos';


function MyApp({ Component, pageProps }: AppProps) {
  
  const [listaUsuarios, setListaUsuarios] = useState(pruebas());
  const [listaEventos, setListaEventos] = useState(pruebasEventos());
  const [arbol,setArbol] = useState(pruebasArbol());
  const [user, setUser] = useState(new Usuario("","","","","",false));
  const [auth, setAuth] = useState(false);


  return (
    <UserContext.Provider value={{ user, setUser }}>
      <ListUsersContext.Provider value={{ listaUsuarios, setListaUsuarios }}>
        <ListEventsContext.Provider value={{ listaEventos, setListaEventos }}>
          <AuthContext.Provider value={{ auth, setAuth }}>
            <Component {...pageProps} />
          </AuthContext.Provider>
        </ListEventsContext.Provider>
      </ListUsersContext.Provider>
    </UserContext.Provider>
  );
    
    
}

export default MyApp
