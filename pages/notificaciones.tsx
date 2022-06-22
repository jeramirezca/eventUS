import Head from 'next/head'
import React from 'react'
import Layout from '../layout/Layout'
import Notificaciones from '../components/Notificaciones';

const notificaciones = () => {

  return (
    <>
      <Head>
        <title>Notificaciones</title>
      </Head>
      <Layout>
        <Notificaciones />
      </Layout>
    </>
  )
}

export default notificaciones