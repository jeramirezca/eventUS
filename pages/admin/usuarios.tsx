<<<<<<< HEAD
import React from "react"
import Layout from '../../layout/layout'
=======
import React from 'react'
>>>>>>> b9f55d36de6cae9d16907ec54a9f811027c9be0d
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