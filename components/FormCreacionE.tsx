import React, { FormEventHandler, useState } from 'react'
import { Formik, Form, FormikProps, Field, FormikHelpers } from "formik";
import { useAdmin } from '../contexts/admin';
import { Creador } from '../data/Creador';
import { useUser } from '../contexts/user';
import { Evento } from '../data/Evento';
import { time } from 'console';
import { Usuario } from '../data/Usuario';
import { toast, ToastContainer } from 'react-toastify';


const FormCreacionE = () => {
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
    const { admin, setAdmin } = useAdmin();
    const {user, setUser} = useUser();
    const [listaGuardados, setListaGuardados] = useState(admin.buscarEstudiante(user.id).getEventosGuardados());
    const [listaPropuestos, setListaPropuestos]=useState(admin.buscarEstudiante(user.id).getEventosPropuestos());
    const [listaEventosCreados, setListaEventosCreados]=useState(admin.buscarCreador(user.id).getEventosCreados());
    
    interface initial{
      
        nombreEvento:string,
        fecha:string,
        horaInicio:string,
        horaFin:string,
        lugar:string,
        creadores:string,
        facultad:string,
        descripcion:string
    }
    const guardarInfo = async (values:initial) =>{
      var adminAux = admin;
      let evento:Evento;
      if(user.rol=="CREADOR"){
          let fecha:Date=new Date(values.fecha);
          evento= new Evento(Math.random().toString(), values.nombreEvento, fecha, values.horaInicio, values.horaFin,values.lugar, values.descripcion,user.id, values.facultad,user.id,true,3,[
            "et1",
            "et2",
            "et3",
            "et4",
            "et5"
        ])
          let listaEventosCreadosAux=listaEventosCreados;
          listaEventosCreadosAux.push(evento);
          setListaEventosCreados(listaEventosCreadosAux);
          adminAux.buscarCreador(user.id).eventosCreados=listaEventosCreados;
          setAdmin(adminAux);

        
          //alert(JSON.stringify(values));
          //alert(JSON.stringify(adminAux.buscarEstudiante(user.id).getEventosPropuestos().map))

        }
        if (user.rol=="ESTUDIANTE"){
          let fecha:Date=new Date(values.fecha);
          console.log(values.nombreEvento);
          evento= new Evento(Math.random().toString(), values.nombreEvento, fecha, values.horaInicio, values.horaFin,values.lugar, values.descripcion,values.creadores, values.facultad,user.id,false,3,[
            "et1",
            "et2",
            "et3",
            "et4",
            "et5"
        ])

          //var listaPropuestosAux=listaPropuestos;
          //listaPropuestosAux.push(evento);
          //setListaPropuestos(listaPropuestosAux);
          adminAux.guardarEventosPropuestos(evento,user.id);

          setAdmin(adminAux);
          
          
          let listaPropuestasEventos=adminAux.buscarCreador(values.creadores).propuestasEventos;
          listaPropuestasEventos.push(evento);
          

          /*adminAux.buscarCreador(values.creadores).propuestasEventos=listaPropuestasEventos;
          setAdmin(adminAux);
          try {
            await guardarAdmin();
            toast.success("Evento Creador", {
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
          //guardarAdmin();
          
          /*alert(JSON.stringify(adminAux.buscarEstudiante(user.id).getEventosPropuestos().map((e:Evento)=>{
            return(
              e.getNombre()
            )
          })))*/
        }
        try {
          await guardarAdmin();
          toast.success("Evento Creado", {
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

    
    
    
  return (
   <>
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
      onSubmit={async (values)=>{

        guardarInfo(values)
        
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
            value={values.fecha}
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
              <option value="INGENIERIA">Ingenieria</option>
              <option value="MEDICINA">Medicina</option>
              <option value="ARTES">Artes</option>
              <option value="CIENCIAS">Ciencias</option>
              <option value="ENFERMERIA">Enfermería</option>
              <option value="ODONTOLOGIA">Odontologia</option>
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
                        <option key={c.correo} value={c.id}>{c.nombre}</option>
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
  )
}

export default  FormCreacionE