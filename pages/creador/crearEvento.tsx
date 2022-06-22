import React from 'react'
import Head from "next/head";
import Layout from '../../layout/Layout';
import FormCreacionE from '../../components/FormCreacionE';

const crearEvento = () => {
  return (
    <>
    <Head>
      <title>Crear Evento</title>
    </Head>
    <Layout>
      <FormCreacionE />
    </Layout>
  </>
  )
}

export default crearEvento