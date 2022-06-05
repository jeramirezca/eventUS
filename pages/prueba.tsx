import React from "react";
import Layout from "../layout/Layout";
import Eventos from "../components/Eventos";
import Head from "next/head";


const prueba = () => {

  return (
    <>
      <Head>
        <title>Prueba Yenifer</title>
      </Head>
      
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
