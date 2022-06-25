import React, { FormEventHandler, useEffect, useState } from 'react'
import Link from 'next/link';
import { useArbol } from '../contexts/arbols';
import { useAdmin } from '../contexts/admin';
import { Evento } from '../data/Evento';
import { useEvento } from '../contexts/evento';
import router from 'next/router';
import { useUser } from '../contexts/user';
import { Creador } from '../data/Creador';
import { toast } from 'react-toastify';


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
    toast.success("Guardado", {
      position: "bottom-center",
      autoClose: 3009,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    guardarAdmin();

    //router.push("/infoEvento");
  }

  const filtrarLista =()=>{
    var listaAux = new Array<Evento>;
    for(var i =0; i< listaEventos.length;i++){
      if(paramSearch== ""){
          if (listaEventos[i].nombre.toUpperCase().includes(search.toUpperCase())||listaEventos[i].nombre.toUpperCase().includes(search.toUpperCase())||listaEventos[i].facultad.toString().toUpperCase().includes(search.toUpperCase())||listaEventos[i].etiquetas.includes(search.toUpperCase())){
            listaAux.push(listaEventos[i]);
        }
      }
      else if(paramSearch== "NOMBRE"){
        if (listaEventos[i].nombre.toUpperCase().includes(search.toUpperCase())){
          listaAux.push(listaEventos[i])
        }
      }else if(paramSearch== "LUGAR"){
        if (listaEventos[i].lugar.toUpperCase().includes(search.toUpperCase())){
          listaAux.push(listaEventos[i])
        }
      }else if(paramSearch== "FECHA"){
        var fechacom = listaEventos[i].fecha.getFullYear()+"-"+(listaEventos[i].fecha.getMonth()+1)+"-"+listaEventos[i].fecha.getDate()
        if (fechacom.includes(search)){
          listaAux.push(listaEventos[i])
        }
      } else if(paramSearch== "FACULTAD"){
        if (listaEventos[i].facultad.toUpperCase().includes(search.toUpperCase())){
          listaAux.push(listaEventos[i])
        }
      } else if(paramSearch== "CREADOR"){
        if(listaEventos[i].idCreador!=undefined){
          if (listaEventos[i].idCreador.includes(search)){
          listaAux.push(listaEventos[i])
        }
        }
      } 
    }
    setListaFiltrada(listaAux);
  }

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
              <option value="FECHA"> fecha </option>
              <option value="LUGAR"> lugar </option>
              <option value="CREADOR"> creador </option>
              <option value="ETIQUETA"> etiqueta </option>
              <option value="FACULTAD"> facultad </option>
            </select>  
            { paramSearch == "FECHA" ?(<>
              <input 
          className = "mr-2" 
          id="fecha"
            value = {search}
            onChange = {(e) =>{
              setSearch(e.target.value);
            }}
            type="date"
            placeholder="buscar"/>
            </>): paramSearch == "CREADOR" ?(<select title="Seleccione una opción" name="creadores"  placeholder ="Seleccione el creador" className=""
            onChange = {(e) =>{
              console.log(e.target.value)
              setSearch(e.target.value);
            }}
            >
                {admin.creadoresRegistrados.map((c:Creador) => {
                return (
                        <option key={c.id} value={c.id}>{c.nombre}</option>
                    );
                })}
            </select>
              ):(<>
              <input 
          className = "mr-2" 
          id="usuario"
            value = {search}
            onChange = {(e) =>{
              setSearch(e.target.value);
            }}
            type="text"
            placeholder="buscar"/>
            </>)}
          

          <button onClick={() => {
              filtrarLista();
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
      </div>
    </div>
      
  );
}

export default Eventos

function value(value: any): void {
  throw new Error('Function not implemented.');
}
