import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Creador } from "../data/Creador";
import { Administrador } from "../data/Administrador";
import { Estudiante } from "../data/Estudiante";
import { Usuario } from "../data/Usuario";
import { useAdmin } from "../contexts/admin";
import router from "next/router";

const FormRegistro = ({ datos }: any) => {

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
  const [nombre, setNombre] = useState("");
  const [user, setUser] = useState("");
  const [correo, setCorreo] = useState("");
  const [rol, setRol] = useState("");
  const [departamento, setDepartamento] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    var admin2 : Administrador = Administrador.fromJSON(JSON.stringify(JSON.parse(JSON.stringify(datos.admin))));
    setAdmin(admin2);
  }, []);

  const createUser = async () => {
    var adminAux = admin;
    if (
      nombre == "" ||
      user == "" ||
      correo == "" ||
      password == "" ||
      rol == ""
    ) {
      toast.error("El usuario no se pudo crear revise los datos", {
        position: "bottom-center",
        autoClose: 3009,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
    if (rol == "ESTUDIANTE") {
      let newStudent = new Estudiante(
        Math.random().toString(),
        nombre,
        user,
        correo,
        password,
        departamento
      );
      adminAux.agregarEstudiante(newStudent);
    } else if (rol == "CREADOR") {
      let newCreador = new Creador(
        Math.random().toString(),
        nombre,
        user,
        correo,
        password,
        false,
        departamento
      );
      adminAux.agregarCreador(newCreador);
    }
    setAdmin(adminAux);
    try {
      await guardarAdmin();
      toast.success("Usuario creado con exito", {
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
    return router.push("/login");
  };

  return (
    <>
      <div className="md:w-96 w-2/4 bg-azul-light rounded-3xl">
        <div className="form">
          <h1 className="">Registro</h1>
          <div className="">
            <label className="">Nombre</label>
            <input
              id="nombre"
              value={nombre}
              onChange={(e) => {
                setNombre(e.target.value);
              }}
              type="text"
              placeholder="Ingrese su nombre"
              className=""
            />
          </div>
          <div className="">
            <label className="">Nombre de usuario</label>
            <input
              id="usuario"
              value={user}
              onChange={(e) => {
                setUser(e.target.value);
              }}
              type="text"
              placeholder="Ingrese su nombre usuario"
              className=""
            />
          </div>
          <div className="">
            <label className="">Correo</label>
            <input
              id="correo"
              value={correo}
              onChange={(e) => {
                setCorreo(e.target.value);
              }}
              type="text"
              placeholder="Ingrese su nombre usuario"
              className=""
            />
          </div>
          <div className="">
            <label className="">Rol</label>
            <select
              title="Seleccione una opción"
              name="rol"
              className="form-control"
              defaultValue=""
              onChange={(e) => {
                setRol(e.target.value);
              }}
            >
              <option disabled value="">
                Seleccione una opción
              </option>
              <option value="ESTUDIANTE"> Estudiante </option>
              <option value="CREADOR"> Creador </option>
            </select>
          </div>
          <div className="">
            <label className="">Facultad</label>
            <select
              title="Seleccione una opción"
              name="departamento"
              className="form-control"
              defaultValue=""
              onChange={(e) => {
                setDepartamento(e.target.value);
              }}
            >
              <option disabled value="">
                Seleccione una opción
              </option>
              <option value="INGENIERIA"> Ingeniería </option>
              <option value="HUMANAS"> Ciencias humanas </option>
              <option value="ARTES"> Artes </option>
              <option value="CIENCIAS"> Ciencias </option>
              <option value="ENFERMERIA"> Enfermería </option>
              <option value="MEDICINA"> Medicina </option>
              <option value="ODONTOLOGIA"> Odontología </option>
              <option value="BIENESTAR"> Bienestar </option>
            </select>
          </div>
          <div className="">
            <label className="">Contraseña</label>
            <input
              id="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              type="password"
              placeholder="Ingrese su contraseña"
              className=""
            />
          </div>
          <button className="bg-azul mt-6 mb-2" onClick={() => createUser()}>
            Registrarse
          </button>
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

export default FormRegistro;
