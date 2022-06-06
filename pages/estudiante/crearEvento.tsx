import FormRegistro from "../../components/FormRegistro"
import Head from 'next/head'
import Layout from "../../layout/Layout"
import Navbar from "../../components/Navbar"
import FormCreacionE from "../../components/FormCreacionE"
const crearEventos = () => {
    return (
        <div>
            <Head>
                <title>Mypage</title>
            </Head>
            <main>
                <Navbar></Navbar>
                <Layout>
                    <FormCreacionE></FormCreacionE> 
                </Layout>
            </main>
            
        </div>
        
    )
}
export default crearEventos 