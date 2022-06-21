import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { Usuario } from '../data/Usuario';
import { Button } from "react-scroll";
import { LinkedRef } from '../structures/LinkedRef';
import { PrismaClient } from "@prisma/client";
import { useAdmin } from "../contexts/admin";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const TablaUsuarios = ({ datos }:any) => {

  const {admin, setAdmin} = useAdmin();
  const [listaUsuarios, setListaUsuarios] = useState(admin.getListaTotalUsuarios());
  const [listafiltrada, setListaFiltrada] = useState(admin.getListaTotalUsuarios());
  const [search, setSearch] = useState("");
  const [buscando, setBuscando] = useState(false);

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

/*   useEffect(() => {
    setListaUsuarios(admin.getListaTotalUsuarios());
    setListaFiltrada(listaUsuarios);
  },[buscando, setBuscando]); */

/*   while(auxn != null){
    var aux = auxn.data;
    if (aux?.nombre.toUpperCase().includes(search.toUpperCase())||aux?.correo.toUpperCase().includes(search.toUpperCase())||aux?.autorizado.toString().toUpperCase().includes(search.toUpperCase())||aux?.rol.toUpperCase().includes(search.toUpperCase())||aux?.correo.toUpperCase().includes(search.toUpperCase())){
      list.push(
        <tr> 
          <td>{aux?.nombre}</td>
          <td>{aux?.correo}</td>
          <td>{aux?.rol}</td>
          <td>{aux?.correo}</td>
          <td>{aux?.autorizado.toString()}</td>
          {/* <td className="iconosTabla">
            <button aria-label="Ver">
              <i className="fa-solid fa-eye"></i>
            </button>
          </td>
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
  } */

  const eliminarUsuario = async (id: string, rol: string)=>{
    var adminAux = admin;
    if (rol == "ESTUDIANTE"){
      adminAux.eliminarEstudiante(id);
    }else if (rol == "CREADOR"){
      adminAux.eliminarCreador(id);
    }
    setAdmin(adminAux);
    setListaUsuarios(admin.getListaTotalUsuarios());
    setListaFiltrada(listaUsuarios);
    try {
      await guardarAdmin();
      toast.success("Usuario eliminado con exito", {
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

  const autorizarCreador = async(id:string) =>{
    var adminAux = admin;
    adminAux.autorizarUsuario(id);
    setAdmin(adminAux);
    try {
      await guardarAdmin();
      toast.success("Autorizado con exito", {
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

  const filtrarLista =()=>{
    var listaAux = new Array<Usuario>;
    for(var i =0; i< listaUsuarios.length;i++){
      if (listaUsuarios[i].nombre.toUpperCase().includes(search.toUpperCase())||listaUsuarios[i].correo.toUpperCase().includes(search.toUpperCase())||listaUsuarios[i].autorizado.toString().toUpperCase().includes(search.toUpperCase())||listaUsuarios[i].rol.toUpperCase().includes(search.toUpperCase())||listaUsuarios[i].correo.toUpperCase().includes(search.toUpperCase())){
        listaAux.push(listaUsuarios[i]);
      }
    }
    setListaFiltrada(listaAux);
  }

  return (
    <>
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
              filtrarLista();
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
                  <span>Eliminar</span>
                </th>
                <th className="bg-azul h-l">
                  <span>Autorizar</span>
                </th>
              </tr>
            </thead>
            <tbody>   
              {listafiltrada.map((u:Usuario) => {
                return (
                  <tr key={u.id}> 
                    <td>{u.nombre}</td>
                    <td>{u.correo}</td>
                    <td>{u.rol}</td>
                    <td>{u.correo}</td>
                    <td>{u.autorizado.toString()}</td>
                    <td className="iconosTabla">
            <button aria-label="Eliminar" onClick={(e)=>{eliminarUsuario(u.id, u.rol)}}>
              <i className="fa-solid fa-trash-can"></i>
            </button>
          </td>
                    {u.autorizado ? (<td></td>
          ):(<td className="iconosTabla">
            <button aria-label="aceptar" onClick={(e)=>{autorizarCreador(u.id)}}>
              <i className="fa-solid fa-check"></i>
            </button>
          </td>)}
          
        </tr>
                );
              })}       
            {/*    {list}
             <tr>

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
};

export default TablaUsuarios;
