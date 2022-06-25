import React, {useEffect, useState} from 'react'
import Link from 'next/link'; 
import { LinkedRef } from '../structures/LinkedRef';
import { Usuario } from '../data/Usuario';
import { useAuth } from '../contexts/auth';
import { useUser } from '../contexts/user';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import router from 'next/router';
import { Administrador } from '../data/Administrador';
import { useAdmin } from '../contexts/admin';
import { useGuardar } from '../contexts/guardar';
import { Creador } from '../data/Creador';
import { Evento } from '../data/Evento';


const Login = ({datos}:any) => {

  const {admin, setAdmin} = useAdmin();

  useEffect(() => {
    var admin2 : Administrador = Administrador.fromJSON(JSON.stringify(JSON.parse(JSON.stringify(datos.admin))));
    setAdmin(admin2);
  }, []);
  
  const {auth, setAuth} = useAuth();
  const {user, setUser} = useUser();
  const {guardar, setGuardar} = useGuardar();
  const [user1, setUser1] = useState("");
  const [password, setPassword] = useState("");


  const autent = (user: string, contrasena: string) =>{
    console.log(admin.id);
    console.log(admin.contrasena);
    var autenticado = admin.autenticacion(user,contrasena);
    if (autenticado.nombre == ""){
      if (admin.creadorNoAutorizado(user)){
        toast.error('Creador no autorizado por el momento', {
          position: "bottom-center",
          autoClose: 3009,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          });
      }else{
        toast.error('Usuario o contraseña incorrecta', {
        position: "bottom-center",
        autoClose: 3009,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
      }
        
    }else{
      setUser(autenticado);
          setAuth(true);
          setGuardar(guardar!);
          /**
           * Sección de pruebas: xdon si es molesto jaj
           */
          if(autenticado instanceof Creador){
            autenticado.eventosCreados.push(new Evento("229-12","evento de prueba",new Date(),"2:00","3:00","cyt","descripcion de prueba, este evento trata de monas chinas",autenticado.id,"medicina"," ",true,29,["casual","indie"]));
            autenticado.eventosCreados.push(new Evento("22-13","evento 2",new Date(),"2:00","3:00","cyt","descripcion de prueba, este evento trata de monas chinas",autenticado.id,"medicina"," ",true,29,["casual","indie"]));
          }
          {autenticado.agregarNotificaciones("Bienvenido a eventUS",new Date(),"Esperamos que disfrutes tu estadia")}
          {console.log("notificaciones" + autenticado.notificaciones)}  
          {console.log("se ejecuto una ves")}
          return router.push("/");
    }
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

export default Login