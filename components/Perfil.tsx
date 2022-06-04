import React from 'react'
import { ToastContainer } from 'react-toastify';
import { useUser } from '../contexts/user';

const Perfil = () => {
    const {user, setUser} = useUser();

  return (
    <div className="md:w-96 w-2/4 bg-azul-light rounded-3xl">
      <div className="form">
        <h1 className="">Perfil</h1>
        <div className="">
          <label className="">Nombre</label>
          <input
            id="usuario"
            value = {user.nombre}
            /* onChange = {(e) =>{
              setUser1(e.target.value);
            }} */
            type="text"
            placeholder= {user.nombre}
            className=""
            disabled
          />          
        </div>
        <button className="bg-azul mt-6 mb-2" /* onClick={() => autent(user1,password)} */> 
          Editar
        </button>
      </div>
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
    </div>
  )
}

export default Perfil