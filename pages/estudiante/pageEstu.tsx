import Head from 'next/head'
import React from 'react'
import Link  from 'next/link';
import Card from '../../components/Card'
import FormRegistro from '../../components/FormRegistro'
import Navbar from '../../components/Navbar'
import Layout from '../../layout/Layout'


const pageEstu = () => {
  return (
    <div>
      <Head>
        <title>Mypage</title>
      </Head>
      <main>
        <Navbar></Navbar>
        <Layout>
              <h1 className="text-2xl font-semibold">
                Proximos eventos
              </h1>

            <div className="my-5 flex flex-auto  mx-auto py-5 rounded-3xl">
              <Card information={"Lunes"} />
              <Card information={"Martes"}/>
              <Card information={"Miercoles"}/>
              <Card information={"Jueves"}/>
              <Card information={"Viernes"}/>
            </div>
            <div className='flex flex-nowrap flex justify-center'>
              <div className='bg-azul-light container mx-5 my-5  rounded-3xl'>
              <div className='my-5'>
                <h1 className="text-2xl ">
                Sugiere tus eventos
              </h1>
              </div>
              
              <div>
                <Link href="/estudiante/crearEvento">
                  <button type='button'className="text-negro bg-azul">Crear Evento</button>
                  
                </Link>
              </div>
              
            </div>
            <div className='bg-azul-light container my-5 mx-5 rounded-3xl'>
              <div className='my-5'>
                <h1 className="text-2xl ">
                Buscar Eventos
              </h1>
              </div>
              
              <div>
                <Link href="/estudiante/crearEvento">
                  <button type='button'className="text-negro bg-azul">Crear Evento</button>
                  
                </Link>
              </div>
              
            </div>
            </div>
            

        </Layout>
        
      </main>
        

    </div>
    
  )
}

export default pageEstu 