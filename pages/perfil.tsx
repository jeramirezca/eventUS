import React from 'react'
import Layout from "../layout/Layout";
import Head from 'next/head'
import Perfil from '../components/Perfil';

const perfil = () => {
  return (
    <>
      <Head>
        <title>Perfil</title>
      </Head>

      <main>
        <Layout>
            <Perfil></Perfil>
        </Layout>
      </main>
      
    </>
  )
}

export default perfil