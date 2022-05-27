import type { NextPage } from 'next'
import Link from 'next/link';
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'
import layout from '../layout/layout'
import Inicio from '../components/Inicio'
import Layout from '../layout/Layout';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>eventUS</title>
        <meta name="description" content="x" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Navbar></Navbar>
        <Inicio />
      </main>
    </>
  )
}

export default Home
