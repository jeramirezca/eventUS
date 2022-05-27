import React from "react";
import Link from "next/link";
import Layout from "../layout/Layout";
import FormRegistro from "../components/FormRegistro";
import Head from 'next/head'

const registro = () => {
  return (
    <>
      <Head>
        <title>Registro</title>
      </Head>

      <main>
        <Layout>
        <FormRegistro />
      </Layout>
      </main>
      
    </>
  );
};

export default registro;
