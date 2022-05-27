import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";

const TablaUsuarios = () => {
  return (
    <div className="md:w-96 w-2/4 rounded-3xl">
      <h1 className="text-azul f">Listado de Productos</h1>
      <div className="flex justify-center items-center flex-col">
        <div className="top-button">
          <button>
            <i className="fa-solid fa-right-to-bracket"></i>
          </button>
          <button>
            <i className="fa-solid fa-right-to-bracket"></i>
          </button>
        </div>
        <div className="table-body">
          <table className="">
            <thead>
              <tr>
                <th className="h-r bg-azul">No.</th>
                <th className="th1 bg-azul">COD PRODUCTO</th>
                <th className="th1 bg-azul">CANTIDAD</th>
                <th className="th1 bg-azul">PRECIO UNITARIO</th>
                <th className="th1 bg-azul">TOTAL</th>
                <th className="th2 bg-azul">
                  <span>Ver</span>
                </th>
                <th className="bg-azul">
                  <span>Editar</span>
                </th>
                <th className="bg-azul h-l">
                  <span>Eliminar</span>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>cod1</td>
                <td>1</td>
                <td>5000</td>
                <td>5000</td>
                <td className="iconosTabla">
                  <button>
                    <i className="fa-solid fa-right-to-bracket"></i>
                  </button>
                </td>
                <td className="iconosTabla">
                  <button>
                    <i className="fa-solid fa-right-to-bracket"></i>
                  </button>
                </td>
                <td className="iconosTabla">
                  <button>
                    <i className="fa-solid fa-right-to-bracket"></i>
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
              </tr>
            </tbody>
          </table>
        </div>
        <div className="separate-button">
          <button className="mr-10"> Guardar</button>
          <button>Cancelar</button>
        </div>
      </div>
    </div>
  );
};

export default TablaUsuarios;
