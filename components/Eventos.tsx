import React, { FormEventHandler, useEffect, useState } from 'react'
import Link from 'next/link';
import { useListEvents } from '../contexts/events';
import { useArbol } from '../contexts/arbols';

type Profile={
  nombre:string;
  facultad:string;
}

const Eventos = () => {
  const {arbol, setArbol} = useArbol();
  const {listaEventos, setListaEventos} = useListEvents();
  const [searchNombre, setSearchNombre] = useState("");
  const [paramSearch, setParamSearch] = useState("");
  const [buscando, setBuscando] = useState(false);
  const[nombre, setNombre]=useState("")
  const[facultad, setFacultad]=useState("")
  const [search, setSearch] = useState("");

   useEffect(() => {
    console.log(search);
    console.log(paramSearch);
  },[search]);

  const getButtonId = (e:any) => {
    console.log(e.currentTarget.id);
  }
  
  var list = [];
  let index = 0;

  while(index < listaEventos.length){
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
    } /* else if(paramSearch== "CREADOR"){
      param = aux?.idCreador.nombre.toUpperCase(); 
    }  */
    if (param.includes(search.toUpperCase())){
      list.push(
        <tr> 
          <td>{aux?.nombre}</td>
          <td>"{index+2}/08/2022"</td>
          <td>{aux?.lugar}</td>
{/*           <td>{aux?.creador.nombre}</td>
 */}          <td>{aux?.facultad}</td>
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
  }  
  
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
              <tr>
                <th className="h-r bg-azul">NOMBRE</th>
                <th className="th1 bg-azul">FECHA</th>
                <th className="th1 bg-azul">LUGAR</th>
                <th className="th1 bg-azul">CREADOR</th>
                <th className="th1 bg-azul">FACULTAD</th>
                <th className="th1 bg-azul">ETIQUETAS</th>
                <th className="bg-azul">
                  <span>Ver</span>
                </th>
                <th className="bg-azul h-l">
                  <span>Guardar</span>
                </th>
              </tr>
            </thead>
            <tbody>          
                {list} 
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
