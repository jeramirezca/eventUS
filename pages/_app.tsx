import '../styles/globals.css'
import '../styles/prueba.css'
import { UserContext } from '../context/user'

import type { AppProps } from 'next/app'
import { useState } from 'react'

function MyApp({ Component, pageProps }: AppProps) {

  const [userData, setUserData] = useState({nombre : "daniel"});

  return (
    <UserContext.Provider value = {{userData,setUserData}}>
      <Component {...pageProps} />
    </UserContext.Provider>
    
  )
    
    
}

export default MyApp
