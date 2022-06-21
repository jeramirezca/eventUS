import React, { FormEventHandler, useEffect, useState } from 'react'
import Link from 'next/link';
import { useArbol } from '../contexts/arbols';
import { useAdmin } from '../contexts/admin';
import { Evento } from '../data/Evento';
import { useEvento } from '../contexts/evento';
import router from 'next/router';
import { useUser } from '../contexts/user';

type Profile={
  nombre:string;
  facultad:string;
}

const Eventos = () => {

  const { evento, setEvento } = useEvento();
  const { admin, setAdmin } = useAdmin();
  const {arbol, setArbol} = useArbol();
  const {user, setUser} = useUser();
  const [listaEventos, setListaEventos] = useState(admin.getListaEventos());
  const [listaFiltrada, setListaFiltrada] = useState(admin.getListaEventos());
  const [searchNombre, setSearchNombre] = useState("");
  const [paramSearch, setParamSearch] = useState("");
  const [buscando, setBuscando] = useState(false);
  const[nombre, setNombre]=useState("")
  const[facultad, setFacultad]=useState("")
  const [search, setSearch] = useState("");

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

   useEffect(() => {
    console.log(search);
    console.log(paramSearch);
  },[search]);

  const verEvento = (ev:Evento) =>{
    setEvento(ev);
    router.push("/infoEvento");
  }
  
  const guardarEvento = (ev:Evento) =>{
    setEvento(ev);
    admin.guardarEventoEstudiante(ev,user.id);
    router.push("/infoEvento");
  }

  var list = [];
  let index = 0;

  /* while(index < listaEventos.length){
     var aux = listaEventos[index];
    let param = search.toUpperCase(); 
    if(paramSearch== "NOMBRE"){
      param = aux?.nombre.toUpperCase(); 
    }else if(paramSearch== "LUGAR"){
      param = aux?.lugar.toUpperCase(); 
    }else if(paramSearch== "FECHA"){
      param = aux?.fechaInicio.toString().toUpperCase(); 
    }else if(paramSearch== "FACULTAD"){
      param = aux?.facultad.toUpperCase(); 
    } 
    if (param.includes(search.toUpperCase())){
      list.push(
        <tr> 
          <td>{aux?.nombre}</td>
          <td>"{index+2}/08/2022"</td>
          <td>{aux?.lugar}</td>
         <td>{aux?.facultad}</td>
          <td>{aux?.etiquetas.toString()}</td>
          <td className="iconosTabla">
            <button aria-label="ver">
              <i className="fa-solid fa-eye"></i>
            </button>
          </td>
          <td className="iconosTabla">
            <button aria-label="guardar" id={index.toString()} onClick={()=>{console.log("guardado")}}>
              <i className="fa-solid fa-bookmark"></i>
            </button>
          </td>
        </tr>
      );
    }
    index+=1;
  }   */
  
  return (
    <div className="md:w-96 w-2/4 rounded-3xl">
      <h1 className="titulo">Listado de eventos</h1>
      <div className="flex justify-center items-center flex-col">
        <div className="mb-3 flex flex-row justify-center items-center">
          <label className='text-sm mr-2'>Buscar por:</label>
        <select title="Seleccione una opción" name="rol" className="form-control mr-2" defaultValue='' onChange = {(e) =>{
              setParamSearch(e.target.value);
            }}>
              <option disabled value=''></option>                                                 
              <option value="NOMBRE"> nombre </option>
              <option value="LUGAR"> lugar </option>
              <option value="FECHA"> etiqueta </option>
              <option value="FACULTAD"> facultad </option>
            </select>  
          <input 
          className = "mr-2" 
          id="usuario"
            value = {search}
            onChange = {(e) =>{
              setSearch(e.target.value);
            }}
            type="text"
            placeholder="buscar"/>
          <button onClick={() => {
            setBuscando(true);
            }} aria-label="Buscar">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
        <div className="table-body">
          <table className="">
            <thead>
              <tr >
                <th className="h-r bg-azul">NOMBRE</th>
                <th className="th1 bg-azul">FECHA</th>
                <th className="th1 bg-azul">LUGAR</th>
                <th className="th1 bg-azul">CREADOR</th>
                <th className="th1 bg-azul">FACULTAD</th>
                <th className="th1 bg-azul">ETIQUETAS</th>
                <th className="bg-azul">
                  <span>Ver</span>
                </th>
                {user.rol == "ESTUDIANTE" ? (
            <th className="bg-azul h-l">
                  <span>Guardar</span>
                </th>
          ):(<></>)}
                
              </tr>
            </thead>
            <tbody>          
            {listaFiltrada.map((ev:Evento) => {
                return (
                  <tr className='trb'> 
          <td>{ev.nombre}</td>
          <td>{ev.fecha.getDate()+"/"+(ev.fecha.getMonth()+1)+"/"+ev.fecha.getFullYear()}</td>
          <td>{ev.lugar}</td>
          <td>{admin.buscarCreador(ev.idCreador).nombre}</td>
          <td>{ev.facultad}</td>
          <td>{ev.etiquetas.toString()}</td>
          <td className="iconosTabla">
            <button aria-label="ver" onClick={() => verEvento(ev)}>
              <i className="fa-solid fa-eye"></i>
            </button>
          </td>
          {user.rol == "ESTUDIANTE" ? (
            <td className="iconosTabla">
            <button aria-label="guardar" id={index.toString()} onClick={() => guardarEvento(ev)}>
              <i className="fa-solid fa-bookmark"></i>
            </button>
          </td>
          ):(<></>)}
        </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="separate-button mt-3">
          <button className="mr-10"> Guardar</button>
          <button>Cancelar</button>
        </div>
      </div>
    </div>
      
  );
}

export default Eventos

function value(value: any): void {
  throw new Error('Function not implemented.');
}
