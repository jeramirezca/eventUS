import React from 'react'
import { ToastContainer } from 'react-toastify';
import { useUser } from '../contexts/user';


const PerfilCrea = ({ children }:any) => {
    const {user, setUser} = useUser();

  return (
    <> 
    <br></br>
    <article className='InterfazPrincipal' >
      
      {
        children
        /*
      <div className="form">
        <h1 className="">Perfil</h1>
        <div className=""> 
         {
            /*<input
            id="usuario"
            value = {user.nombre}
            /* onChange = {(e) =>{
              setUser1(e.target.value);
            }} */ /*
            type="text"
            placeholder= {user.nombre}
            className=""
            disabled
          />*/
          
             /* 
        </div>
        <button className="bg-azul mt-6 mb-2" /* onClick={() => autent(user1,password)} */
        /*
          Editar
        </button>
      </div>
      */
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