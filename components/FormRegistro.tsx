import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useListUsers } from '../contexts/listUsers';
import { Creador } from '../data/Creador';
import { Administrador } from '../data/Administrador';
import { Estudiante } from '../data/Estudiante';
import { Usuario } from '../data/Usuario';

const FormRegistro = () => {
  
  const {listaUsuarios, setListaUsuarios} = useListUsers();
  const [nombre, setNombre] = useState("");
  const [user, setUser] = useState("");
  const [correo, setCorreo] = useState("");
  const [rol, setRol] = useState("");
  const [password, setPassword] = useState("");

  const createUser=()=>{
    if(nombre==""||user==""||correo==""||password==""||rol==""){
      toast.error('El usuario no se pudo crear revise los datos', {
        position: "bottom-center",
        autoClose: 3009,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
    }else{
      let newUser = new Usuario(Math.random().toString(),nombre,user,correo,password,true);
    if (rol=="ESTUDIANTE"){
      newUser = new Estudiante(Math.random().toString(),nombre,user,correo,password,"x");
    }else if(rol=="ADMINISTRADOR"){
      let anton = new Administrador(Math.random().toString(),nombre,user,correo,password,false);
    }else if(rol=="CREADOR"){
      let anton = new Creador(Math.random().toString(),nombre,user,correo,password,false,"x")
    }
    var list2 = listaUsuarios;
    list2.addLatest(newUser);
    setListaUsuarios(list2);
    toast('Usuario creado con exito', {
      position: "bottom-center",
      autoClose: 3009,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });
    }
    

  }

  return (
    <>
    <div className="md:w-96 w-2/4 bg-azul-light rounded-3xl">
      <div className="form">
        <h1 className="">Registro</h1>
        <div className="">
          <label className="">Nombre</label>
          <input
            id="nombre"
            value = {nombre}
            onChange = {(e) =>{
              setNombre(e.target.value);
            }}
            type="text"
            placeholder="Ingrese su nombre"
            className=""
          />          
        </div>
        <div className="">
          <label className="">Nombre de usuario</label>
          <input
            id="usuario"
            value = {user}
            onChange = {(e) =>{
              setUser(e.target.value);
            }}
            type="text"
            placeholder="Ingrese su nombre usuario"
            className = ""
          />
        </div>
        <div className="">
          <label className="">Correo</label>
          <input
            id="correo"
            value = {correo}
            onChange = {(e) =>{
              setCorreo(e.target.value);
            }}
            type="text"
            placeholder="Ingrese su nombre usuario"
            className = ""
          />
        </div>
        <div className="">
          <label className="">Rol</label>
          <select title="Seleccione una opción" name="rol" className="form-control" defaultValue='' onChange = {(e) =>{
              setRol(e.target.value);
            }}>
              <option disabled value=''>Seleccione una opción</option>                                                 
              <option value="ESTUDIANTE"> Estudiante </option>
              <option value="CREADOR"> Creador </option>
              <option value="ADMINISTRADOR"> Administrador </option>
            </select>        
        </div>
        <div className="">
          <label className="">Contraseña</label>
          <input
            id="password"
            value = {password}
            onChange = {(e) =>{
              setPassword(e.target.value);
            }}
            type="text"
            placeholder="Ingrese su contraseña"
            className=""
          />          
        </div>
        <button className="bg-azul mt-6 mb-2" onClick={() => createUser()}> 
          Registrarse
        </button>
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
  )
}

export default FormRegistro