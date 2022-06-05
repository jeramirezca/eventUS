import React, { FormEventHandler, useState } from 'react'
import { Formik, Form, FormikProps, Field, FormikHelpers } from "formik";
import {
  
  useToast,
  chakra,
} from "@chakra-ui/react";

const FormCreacionE = () => {
  const toast=useToast();
  
  
  return (
    <div className='md:w-200 w-2/4 bg-azul-light rounded-3xl'>
      <Formik
      initialValues={{
        nombreEvento:"",
        fechaI:"",
        fechaF:"",
        lugar:"",
        creadores:"",
        facultad:"",
        descripcion:""
      }}
      onSubmit={(values)=>{
        alert(JSON.stringify(values))
      }}
      
      >
      {({handleSubmit, values, handleChange})=>(
      <form className="otherform" onSubmit={handleSubmit}>
        <h1 className="font-bold text-3xl p-4 ">Creacion evento</h1>
        <div className="flex flex-col justify-center items-center ">
            <label className ="">Nombre del Evento</label>
            <input 
            name="nombreEvento" type="text" placeholder ="Ingrese el nombre del evento" className=""
            value={values.nombreEvento}
            onChange={handleChange}
            />
        </div>
        <div className="flex flex-nowrap ">
          <div>
            <label className ="">Fecha inicio</label>
            {/*<input id="fechaI" type="date" placeholder ="Ingrese su usuario" className=""/>*/}

            <input name="fechaI" type="text" placeholder ="Ingrese la fecha incial" className=""
            value={values.fechaI}
            onChange={handleChange}
            />
          </div>
          <div>
            <label className ="">Fecha final</label>
            {/*<input id="fechaF" type="date" placeholder ="Ingrese su usuario" className=""/>*/}
            <input name="fechaF" type="text" placeholder ="Ingrese la fecha final" className=""
            value={values.fechaF}
            onChange={handleChange}
            />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center ">
            <label className ="">Lugar</label>
            <input name="lugar" type="text" placeholder ="ingrese el lugar del evento" className=""
            value={values.lugar}
            onChange={handleChange}
            />
        </div>
        
        <div className="flex flex-col justify-center items-center ">
            <label className ="">Facultad</label>
            <select name="facultad" placeholder ="Seleccione la facultad de su evento" className=""
            value={values.facultad}
            onChange={handleChange}
            >
              <option>Ingenieria</option>
              <option>Medicina</option>
              <option>Derecho</option>
              <option>Enfermeria</option>
              <option>Economia</option>
              <option>Universidad</option>
            </select>
        </div>
        <div className="flex flex-col justify-center items-center ">
            <label className ="">Descripcion</label>
            <textarea name="descripcion"  placeholder ="Ingrese la descripcion de su evento" className=""
            value={values.descripcion}
            onChange={handleChange}
            >
            </textarea>
        </div>
        <div className="flex flex-col justify-center items-center ">
            <label className ="">Creadores</label>
            <select name="creadores"  placeholder ="Seleccione el creador" className=""
            value={values.creadores}
            onChange={handleChange}
            >
            </select>
        </div>

        
          <button type="submit"  className="bg-azul mt-6 mb-2"> Crear </button>          
    </form>
    )}
      
      </Formik>
          
            
    </div>
  )
}

export default  FormCreacionE