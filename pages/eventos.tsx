import React from "react";
import Layout from "../layout/Layout";
import Eventos from "../components/Eventos";
import Head from "next/head";


const eventos = () => {

  return (
    <>
      <Head>
        <title>Eventos</title>
      </Head>
      <Layout>
        <Eventos />
      </Layout>
    </>
  );
};

export default eventos;
