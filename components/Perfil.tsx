import router from 'next/router';
import React, { useState } from 'react'
import { toast, ToastContainer } from 'react-toastify';
import { useAdmin } from '../contexts/admin';
import { useUser } from '../contexts/user';
import { useAuth } from '../contexts/auth';

const Perfil = () => {

  async function guardarAdmin() {
    console.log(admin.toJSON());
    const response = await fetch("/api/datos", {
      method: "PATCH",
      body: admin.toJSON(),
    });
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return await response.json();
  }

  const { admin, setAdmin } = useAdmin();
  const {user, setUser} = useUser();
  const {auth, setAuth} = useAuth();
  const [edit, setEdit] = useState(false);
  const [nombre, setNombre] = useState(user.nombre);
  const [usuario, setUsuario] = useState(user.usuario);
  const [correo, setCorreo] = useState(user.correo);

  const editarUser = async () =>{

    var usuario2 = user;

     if(nombre != user.nombre){
      usuario2.nombre = nombre;
    }
    if(usuario != user.usuario){
      usuario2.usuario = usuario;
    }
    if(correo != user.correo){
      usuario2.correo = correo;
    } 
    setUser(usuario2);
    setEdit(false);

    if (user.rol == "ESTUDIANTE"){
      admin.modificarEstudiante(user.id, nombre, usuario, correo);
    }else{
      admin.modificarCreador(user.id, nombre, usuario, correo);
    }
    try {
      await guardarAdmin();
      toast.success("Usuario editado con exito", {
        position: "bottom-center",
        autoClose: 3009,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
    <div className="md:w-96 w-2/4 bg-azul-light rounded-3xl">
      <div className="form">
        <h1 className="">Perfil</h1>
        <div className="">
          {edit ? (
            <>
              <label className="">Nombre</label>
              <input
                value={nombre}
                onChange={(e) => {
                  setNombre(e.target.value);
                }}
                type="text"
                placeholder={nombre}
                className=""
              />
              <label className="">Usuario</label>
              <input
                value={usuario}
                onChange={(e) => {
                  setUsuario(e.target.value);
                }}
                type="text"
                placeholder={usuario}
                className=""
              />
              <label className="">Correo</label>
              <input
                value={correo}
                onChange={(e) => {
                  setCorreo(e.target.value);
                }}
                type="text"
                placeholder={correo}
                className=""
              />
            </>
          ) : (
            <>
              <label className="">Nombre</label>
              <input
                value={user.nombre}
                /* onChange = {(e) =>{
              setUser1(e.target.value);
            }} */
                type="text"
                placeholder={user.nombre}
                className=""
                disabled
              />
              <label className="">Usuario</label>
              <input
                value={user.usuario}
                /* onChange = {(e) =>{
              setUser1(e.target.value);
            }} */
                type="text"
                placeholder={user.usuario}
                className=""
                disabled
              />
              <label className="">Correo</label>
              <input
                value={user.correo}
                /* onChange = {(e) =>{
              setUser1(e.target.value);
            }} */
                type="text"
                placeholder={user.correo}
                className=""
                disabled
              />
            </>
          )}

        <label className="">Rol</label>
          <input
            value={user.rol}
            /* onChange = {(e) =>{
              setUser1(e.target.value);
            }} */
            type="text"
            placeholder={user.rol}
            className=""
            disabled
          />
        </div>
        {edit ? (
          <>
            <button
              className="bg-azul mt-6 mb-2"
              onClick={() => 
                editarUser()
              }
            >
              Guardar
            </button>
            <button
              className="bg-azul mt-6 mb-2"
              onClick={() => setEdit(false)}
            >
              Cancelar
            </button>
          </>
        ) : (
          <>
          <button className="bg-azul mt-6 mb-2" onClick={() => setEdit(true)}>
            Editar
          </button>
          <button className="bg-azul mt-6 mb-2" onClick={() => {setAuth(false);
             router.push("/");}}>
          Logout
        </button>
          </>
          
        )}
      </div>
      
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
      </>
  );
}

export default Perfil