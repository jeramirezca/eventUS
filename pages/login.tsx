import React, {useState} from 'react'
import Link from 'next/link';
import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Login from '../components/Login';
import Layout from '../layout/Layout';

const login = () => {
  return (

    <div>
      <Head>
        <title>Login</title>
      </Head>

      <main>
        <Layout>
          <Login />
        </Layout>
      </main>
    </div>
  )
}

export default login