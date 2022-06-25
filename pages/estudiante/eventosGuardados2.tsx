import Head from 'next/head'
import React from 'react'
import Link  from 'next/link';
import Card from '../../components/Card'
import FormRegistro from '../../components/FormRegistro'
import Navbar from '../../components/Navbar'
import Layout from '../../layout/Layout'
import { ScrollElement } from 'react-scroll';
import { useAdmin } from '../../contexts/admin';
import { useUser } from '../../contexts/user';
import Guardado from '../../components/Guardado';






const eventosGuardados = () => {
    const { admin, setAdmin } = useAdmin();
    const {user, setUser} = useUser();

  return (
    <div>
      <Head>
        <title>Eventos Guardados</title>
      </Head>
      <main>
        <Navbar></Navbar>
        <Layout>
            <Guardado></Guardado>

        </Layout>

      </main>


    </div>

  )
}

export default eventosGuardados