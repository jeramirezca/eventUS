import { Usuario } from "../data/Usuario";
import { LinkedRef } from "./LinkedRef";
import { Administrador } from '../data/Administrador';
import { Estudiante } from '../data/Estudiante';

export const pruebas = () =>{
    let juan = new Usuario("123","juan", "juan","juanito@hotmail","juan",true)
    let mar = new Estudiante("1234","marx","marx","marx@hotmail","marx","holi")
    let anton = new Administrador("12345","anton","anton","anton@hotmail","anton",false)
    let yen = new Administrador("12345","anton2","anton2","anton@hotmail","anton",false)
    let yy = new Administrador("12345","anton3","anton3","anton@hotmail","anton",false)
    let jd = new Administrador("12345","anton4","anton4","anton@hotmail","anton",false)


    let ListaUsuarios = new LinkedRef<Usuario>;
    ListaUsuarios.addLatest(juan);
    ListaUsuarios.addLatest(mar);
    ListaUsuarios.addLatest(anton);
    ListaUsuarios.addLatest(yen);
    ListaUsuarios.addLatest(yy);
    ListaUsuarios.addLatest(jd);
    return ListaUsuarios;
}








