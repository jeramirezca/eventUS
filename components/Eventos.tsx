import React, { FormEventHandler, useEffect, useState } from 'react'
import Link from 'next/link';
import { useListEvents } from '../contexts/events';

type Profile={
  nombre:string;
  facultad:string;
}

const Eventos = () => {
  const {listaEventos, setListaEventos} = useListEvents();
  const [searchNombre, setSearchNombre] = useState("");
  const [buscando, setBuscando] = useState(false);
  const[nombre, setNombre]=useState("")
  const[facultad, setFacultad]=useState("")
  const [search, setSearch] = useState("");

   useEffect(() => {
    console.log(search);
  },[search]);

  /* const eliminarUsuario=(index:any)=>{
    var index2 = parseInt(index);
    var list2 = listaUsuarios;
    list2.remove(index2);
    setListaUsuarios(list2);
    console.log("eliminado");
    console.log(listaUsuarios);
  } */

  const getButtonId = (e:any) => {
    console.log(e.currentTarget.id);
  }
  
  /* var list = [];
  var index = 0;
  var auxn = listaUsuarios.first;
  while(auxn != null){
    var aux = auxn.data;
    if (aux?.nombre.toUpperCase().includes(search.toUpperCase())||aux?.user.toUpperCase().includes(search.toUpperCase())||aux?.autorizado.toString().toUpperCase().includes(search.toUpperCase())||aux?.rol.toUpperCase().includes(search.toUpperCase())||aux?.correo.toUpperCase().includes(search.toUpperCase())){
      list.push(
        <tr> 
          <td>{aux?.nombre}</td>
          <td>{aux?.user}</td>
          <td>{aux?.rol}</td>
          <td>{aux?.correo}</td>
          <td>{aux?.autorizado.toString()}</td>
          {/* <td className="iconosTabla">
            <button aria-label="Ver">
              <i className="fa-solid fa-eye"></i>
            </button>
          </td> }
          <td className="iconosTabla">
            <button aria-label="ver">
              <i className="fa-solid fa-eye"></i>
            </button>
          </td>
          <td className="iconosTabla">
            <button aria-label="guardar" id={index.toString()} onClick={()=>{console.log(guardado)}}>
              <i className="fa-solid fa-trash-can"></i>
            </button>
          </td>
        </tr>
      );
    }
    auxn = auxn.next;
    index+=1;
  } */
  
  return (
    <div className="md:w-96 w-2/4 rounded-3xl">
      <h1 className="titulo">Listado de eventos</h1>
      <div className="flex justify-center items-center flex-col">
        <div className="mb-3 flex flex-row justify-center items-center">
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
                <th className="th1 bg-azul">USUARIO</th>
                <th className="th1 bg-azul">ROL</th>
                <th className="th1 bg-azul">CORREO</th>
                <th className="th1 bg-azul">AUTORIZADO</th>
                {/* <th className="th2 bg-azul">
                  <span>Ver</span>
                </th> */}
                <th className="bg-azul">
                  <span>Editar</span>
                </th>
                <th className="bg-azul h-l">
                  <span>Eliminar</span>
                </th>
              </tr>
            </thead>
            <tbody>          
                {/* {list} */}
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
