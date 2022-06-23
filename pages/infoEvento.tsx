import React from 'react'
import { useEvento } from '../contexts/evento';
import InfoEvento from '../components/InfoEvento';
import Head from 'next/head';
import Layout from '../layout/Layout';

const infoEvento = () => {

  return (
    <>
      <Head>
        <title>Eventos</title>
      </Head>
      <Layout>
        <InfoEvento />
      </Layout>
    </>
  )
}

export default infoEvento