import React, { useEffect } from 'react'
import Link from 'next/link';
import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Login from '../components/Login';
import Layout from '../layout/Layout';
import { PrismaClient } from "@prisma/client";
import { Administrador } from '../data/Administrador';
import { useAdmin } from '../contexts/admin';
import { useGuardar } from '../contexts/guardar';

const prisma = new PrismaClient();

export async function getServerSideProps() {
  const datos = await prisma.post.findFirst();
  return {
    props: { datos }, 
  }
} 

const login = ({datos}:any) => {

  return (
    <div>
      <Head>
        <title>Login</title>
      </Head>

      <main>
        <Layout>
          <Login datos = {datos}/>
        </Layout>
      </main>
    </div>
  )
}

export default login