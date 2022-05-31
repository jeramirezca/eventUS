import React from 'react'
import TablaUsuarios from '../../components/TablaUsuarios'
import Layout from '../../layout/Layout'
import Head from "next/head";

const usuarios = () => {
  return (
    <>
      <Head>
        <title>Usuarios
        </title>
      </Head>
      <Layout>
        <TablaUsuarios />
      </Layout>
    </>
  )
}

export default usuarios