import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { useListUsers } from "../contexts/listUsers";
import { Usuario } from '../data/Usuario';
import { Button } from "react-scroll";
import { LinkedRef } from '../structures/LinkedRef';


const TablaUsuarios = () => {

  const {listaUsuarios, setListaUsuarios} = useListUsers();
  const [search, setSearch] = useState("");
  const [buscando, setBuscando] = useState(false);

   useEffect(() => {
    console.log(search);
  },[search]);

  const eliminarUsuario=(index:any)=>{
    var index2 = parseInt(index);
    //setListaUsuarios(listaUsuarios.remove(index2));
    console.log("eliminado");
    console.log(listaUsuarios);
  }

  const getButtonId = (e:any) => {
    console.log(e.currentTarget.id);
  }
  
  var list = [];
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
          </td> */}
          <td className="iconosTabla">
            <button aria-label="editar">
              <i className="fa-solid fa-pen-to-square"></i>
            </button>
          </td>
          <td className="iconosTabla">
            <button aria-label="Eliminar" id={index.toString()} onClick={(e)=>{eliminarUsuario(e.currentTarget.id)}}>
              <i className="fa-solid fa-trash-can"></i>
            </button>
          </td>
        </tr>
      );
    }
    auxn = auxn.next;
    index+=1;
  }

  return (

    <div className="md:w-96 w-2/4 rounded-3xl">
      <h1 className="titulo">Listado de Usuarios</h1>
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
                {list}
            {/* <tr>

              <td>{venta.codigoVenta}</td>
              <td>{venta.cliente}</td>
              <td>{venta.idCliente}</td>
              <td>${venta.totalVenta}</td>
              <td>{venta.fechaVenta}</td>
              <td>{venta.estado}</td>
              </tr>
              <tr>
                <td>1</td>
                <td>cod1</td>
                <td>1</td>
                <td>5000</td>
                <td>5000</td>
                <td className="iconosTabla">
                  <button>
                    <i className="fa-solid fa-eye"></i>
                  </button>
                </td>
                <td className="iconosTabla">
                  <button>
                    <i className="fa-solid fa-pen-to-square"></i>
                  </button>
                </td>
                <td className="iconosTabla">
                  <button>
                    <i className="fa-solid fa-trash-can"></i>
                  </button>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>cod1</td>
                <td>1</td>
                <td>5000</td>
                <td>5000</td>
                <td>
                  <button>Ver</button>
                </td>
                <td>
                  <button>Editar</button>
                </td>
                <td>
                  <button>Eliminar</button>
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>cod1</td>
                <td>1</td>
                <td>5000</td>
                <td>5000</td>
                <td>
                  <button>Ver</button>
                </td>
                <td>
                  <button>Editar</button>
                </td>
                <td>
                  <button>Eliminar</button>
                </td>
              </tr> */}
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
};

export default TablaUsuarios;
