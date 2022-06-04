import React, {useEffect, useState} from 'react'
import Link from 'next/link'; 
import { useListUsers } from '../contexts/listUsers';
import { LinkedRef } from '../structures/LinkedRef';
import { Usuario } from '../data/Usuario';
import { useAuth } from '../contexts/auth';
import { useUser } from '../contexts/user';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import router from 'next/router';


const Login = () => {

  const {listaUsuarios, setListaUsuarios} = useListUsers();
  const {auth, setAuth} = useAuth();
  const {user, setUser} = useUser();
  const [user1, setUser1] = useState("");
  const [password, setPassword] = useState("");

 /*  useEffect(() => {
    var jstt = JSON.stringify(listaUsuarios);
    //console.log("info json",jstt); 
    let lista = new LinkedRef<Usuario>;
    var json = JSON.parse(jstt);
    lista.fromJson(json);
    console.log("info2", lista.toString()) 
    autent("anton","anton"); 
  },[]);*/

  const autent = (user: String, contrasena: String) =>{
    var aux = listaUsuarios.first;
    while (aux != null){
      if (aux.data?.nombre == user){
        if(aux.data?.contrasena == contrasena){
          console.log("autorizado");
          setUser(aux.data);
          setAuth(true);
          return router.push("/");
        }
      }else{
        aux = aux.next;
      }
    }
    toast.error('Usuario o contraseña incorrecta', {
      position: "bottom-center",
      autoClose: 3009,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });
    return console.log("No autorizado");
  }

  return (
    
    <div className="md:w-96 w-2/4 bg-azul-light rounded-3xl">
      <div className="form">
        <h1 className="">Inicio de Sesión</h1>
        <div className="">
          <label className="">Usuario</label>
          <input
            id="usuario"
            value = {user1}
            onChange = {(e) =>{
              setUser1(e.target.value);
            }}
            type="text"
            placeholder="Ingrese su usuario"
            className=""
          />          
        </div>
        <div className="">
          <label className="">Contraseña</label>
          <input
            id="contrasena"
            value = {password}
            onChange = {(e) =>{
              setPassword(e.target.value);
            }}
            type="password"
            placeholder="Ingrese su contraseña"
            className=""
          />
        </div>
        <button className="bg-azul mt-6 mb-2" onClick={() => autent(user1,password)}> 
          Iniciar Sesión 
        </button>
      </div>
      <div className="p-3 text-base mb-3">
          <span className="text-azul mr-2">¿No tienes una cuenta?</span>
          <Link href="/registro">
            <button type="button" className="text-negro underline bg-transparent">
              <span className="">Crear una cuenta</span>
            </button>
          </Link>
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
    
  );
}

/* const autent = (user: String, contrasena: String) =>{
  const {listaUsuarios, setListaUsuarios} = useListUsers();
  var aux = listaUsuarios.first;
  while (aux != null){
    if (aux.data?.nombre == user){
      if(aux.data?.contrasena == contrasena){
        console.log("autorizado");
      }
    }else{
      aux = aux.next;
    }
  }
  console.log("No autorizado");
}
 */
export default Login