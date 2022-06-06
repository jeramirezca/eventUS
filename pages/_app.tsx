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


function MyApp({ Component, pageProps }: AppProps) {
  
  const [listaUsuarios, setListaUsuarios] = useState<LinkedRef<Usuario>>(pruebas());
  const [user, setUser] = useState(new Usuario("","","","","",false));
  const [auth, setAuth] = useState(false);


  return (
    <UserContext.Provider value = {{user, setUser}}>
      <ListUsersContext.Provider value = {{listaUsuarios,setListaUsuarios}}>
        <AuthContext.Provider value = {{auth,setAuth}}>
          <Component {...pageProps} />
        </AuthContext.Provider>
      </ListUsersContext.Provider>
    </UserContext.Provider>
  )
    
    
}

export default MyApp
