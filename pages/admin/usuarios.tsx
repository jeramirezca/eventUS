import React from "react"
import Layout from '../../layout/Layout'
import TablaUsuarios from '../../components/TablaUsuarios'
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