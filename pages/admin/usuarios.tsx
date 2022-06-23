import React from "react"
import Layout from '../../layout/Layout'
import TablaUsuarios from '../../components/TablaUsuarios'
import Head from "next/head";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function getServerSideProps() {
  const datos = await prisma.post.findMany();
  return {
    props: { datos }, // will be passed to the page component as props
  }
} 


const usuarios = ({datos}:any) => {
  return (
    <>
      <Head>
        <title>Usuarios
        </title>
      </Head>
      
      <Layout>
        <TablaUsuarios datos ={datos}/>
      </Layout>
    </>
  )
}

export default usuarios