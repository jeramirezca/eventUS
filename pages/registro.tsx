import React from "react";
import Link from "next/link";
import Layout from "../layout/Layout";
import FormRegistro from "../components/FormRegistro";
import Head from 'next/head'
import { Usuario } from '../data/Usuario';
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function getServerSideProps() {
  const datos = await prisma.post.findFirst();
  return {
    props: { datos }, 
  }
} 

const registro = ({datos}:any) => {

  return (
    <>
      <Head>
        <title>Registro</title>
      </Head>

      <main>
        <Layout>
        <FormRegistro datos = {datos}/>
      </Layout>
      </main>
      
    </>
  );
};

export default registro;
