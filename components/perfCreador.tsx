import React from 'react'
import { ToastContainer } from 'react-toastify';
import { useUser } from '../contexts/user';


const PerfilCrea = (props:any) => {

  return (
    <> 
    <br></br>
    <article className='InterfazPrincipal' >
      
      {
        props.children
  }
        <ToastContainer
          position="bottom-center"
          autoClose={3009}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          />
     
    </article>
    </>
  )
}

export default PerfilCrea