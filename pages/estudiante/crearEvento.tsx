import React from 'react'

import Head from "next/head";
import Navbar from '../../components/Navbar';
import Layout from '../../layout/Layout';
import FormCreacionE from "../../components/FormCreacionE"

const crearEvento = () => {
  return (
    <div>
            <Head>
                <title>Crear evento</title>
            </Head>
            <main>
                <Navbar></Navbar>
                <Layout>
                    <FormCreacionE></FormCreacionE> 
                </Layout>
            </main>
            
        </div>
  )
}

export default crearEvento