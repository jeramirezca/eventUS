import React, { FormEventHandler, useState } from 'react'
import { Formik, Form, FormikProps, Field, FormikHelpers } from "formik";
import { useAdmin } from '../contexts/admin';
import { Creador } from '../data/Creador';
import { useUser } from '../contexts/user';
import { Evento } from '../data/Evento';
import { time } from 'console';
import { Usuario } from '../data/Usuario';

const FormCreacionE = () => {

    const { admin, setAdmin } = useAdmin();
    const {user, setUser} = useUser();

    var adminAux = admin;
    
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
    
  return (
    <div className='md:w-200 w-2/4 bg-azul-light rounded-3xl'>
      <Formik
      initialValues={{
        nombreEvento:"",
        fecha:"",
        horaInicio:"",
        horaFin:"",
        lugar:"",
        creadores:"",
        facultad:"",
        descripcion:""
      }}
      onSubmit={(values)=>{
        let evento:Evento;
      if(user.rol=="CREADOR"){
          let fecha:Date=new Date(values.fecha);
          evento= new Evento("edsnfjs", values.nombreEvento, fecha, values.horaInicio, values.horaFin,values.lugar, values.descripcion,user.id, values.facultad,user.id,false)
          adminAux.buscarCreador(user.id).eventosCreados.push(evento);
          setAdmin(adminAux);
          guardarAdmin();
          //alert(JSON.stringify(values));
          //alert(JSON.stringify(adminAux.buscarEstudiante(user.id).getEventosPropuestos().map))

        }
        if (user.rol=="ESTUDIANTE"){
          let creadorAux:Creador;
          let fecha:Date=new Date(values.fecha);
          let fecha2:Date;
          fecha2=new Date("2021-05-23")
          evento= new Evento("edsnfjs", values.nombreEvento, fecha2, values.horaInicio, values.horaFin,values.lugar, values.descripcion,(adminAux.buscarCreador(values.creadores).id), values.facultad,user.id,false)
          adminAux.buscarEstudiante(user.id).eventosPropuestos.push(evento);
          
          //se tiene que mandar la info a el creador pa que lo acepte o lo rechace
          adminAux.buscarCreador("C02").propuestasEventos.push(evento);
          setAdmin(adminAux);
          guardarAdmin();
          /*alert(JSON.stringify(adminAux.buscarEstudiante(user.id).getEventosPropuestos().map((e:Evento)=>{
            return(
              e.getNombre()
            )
          })))*/
        }
        //alert(JSON.stringify(values));
    
      }}
      
      >
      {({handleSubmit, values, handleChange})=>(
      <form className="otherform" onSubmit={handleSubmit}>
        <h1 className="font-bold text-3xl p-4 ">Formulario evento</h1>
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
            <label className ="">Fecha</label>
            {/*<input id="fechaI" type="date" placeholder ="Ingrese su usuario" className=""/>*/}

            <input name="fecha" type="date" placeholder ="Ingrese la fecha incial" className=""
            value={values.fecha as unknown as Date}
            onChange={handleChange}
            />
          </div>
          <div>
            <label className ="">Hora Inicio</label>
            {/*<input id="fechaF" type="date" placeholder ="Ingrese su usuario" className=""/>*/}
            <input name="horaInicio" type="time" placeholder ="Ingrese la fecha final" className=""

                value={values.horaInicio}
                onChange={handleChange}
            />
          </div>
          <div>
            <label className ="">Hora fin</label>
            {/*<input id="fechaF" type="date" placeholder ="Ingrese su usuario" className=""/>*/}
            <input name="horaFin" type="time" placeholder ="Ingrese la fecha final" className=""
                value={values.horaFin}
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
            <select title="Seleccione una opción" name="facultad" placeholder ="Seleccione la facultad de su evento" className=""
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
        {user.rol=="ESTUDIANTE"?(
          <div className="flex flex-col justify-center items-center ">
            <label className ="">Creadores</label>
            <select title="Seleccione una opción" name="creadores"  placeholder ="Seleccione el creador" className=""
            value={values.creadores}
            onChange={handleChange}
            >
                {admin.creadoresRegistrados.map((c:Creador) => {
                return (
                        <option key={c.id} value={c.id}>{c.nombre}</option>
                    );
                })}
            </select>
        </div>
        ) : (
          <></>
        )

        }


        
          <button type="submit"  className="bg-azul mt-6 mb-2"> Crear </button>          
    </form>
    )}
      
      </Formik>
          
            
    </div>
  )
}

export default  FormCreacionE