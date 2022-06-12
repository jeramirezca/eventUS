import React from "react";
import Layout from "../layout/Layout";
//import Eventos from "../components/Eventos";
import Head from "next/head";
import CargarDatos from "./CargarDatos"
import GenerarDatos from "./GenerarDatos"

const prueba = () => {

  return (
    <>
      <Head>
        <title>Prueba Yenifer</title>
      </Head>
      <script type="text/typescript" src="GenerarDatos.ts"></script>
    </>
    
  );
};

export default prueba;
// Fetching data from the JSON file

/*export async function getStaticProps() {
  try{
    const post = await fetch() prisma.post.create({
      data:{
        title: 'Prisma love',
        body: 'holi'
      }
    })
    res.json(post);
  }catch(error){
    res.json({error: 'an error ocurred'});
    return;
  }
} */
