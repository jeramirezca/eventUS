class Administrador extends Usuario {
    public static usuariosVerificar:QueueRef<Usuario>;
    public static  usuariosRegistrados:LinkedRef<Usuario>;
    
        //Constructor

    public constructor(id:string , nombre:string , correo:string , contrasena:string ,autorizado:boolean) {
        super(id, nombre, correo, contrasena, autorizado);
        
        
    }
    public static inicializar(){
        this.usuariosVerificar=new QueueRef<>();
        this.usuariosRegistrados=new LinkedRef<>();
    }
    //Getters y Setters

    public static  getUsuariosVerificar():QueueRef<Usuario>{
        return this.usuariosVerificar;
    }

    public static setUsuariosVerificar(usuariosVerificar:QueueRef<Usuario>):void {
        Administrador.usuariosVerificar = usuariosVerificar;
    }

    public static  getUsuariosRegistrados():LinkedRef<Usuario> {
        return this.usuariosRegistrados;
    }

    public static setUsuariosRegistrados(usuariosRegistrados:LinkedRef<Usuario>):void {
        Administrador.usuariosRegistrados = usuariosRegistrados;
    }

    //Métodos

    public autorizarUsuario():void {
        Administrador.usuariosVerificar.first().setAutorizado(true);// Proceso donde se autoriza (Trabaja sobre usuariosVerificar)
        /*
         * Cuando se autorice un usuario, su estado va a cambiar a autorizado y debera
         * ser
         * casteado a creador.
         */
        Administrador.usuariosRegistrados.addFirst( Administrador.usuariosVerificar.first());
        Administrador.usuariosVerificar.dequeue(); // desencolar()
        
    }

    public  desautorizarUsuario():void {
        Administrador.usuariosVerificar.first().setAutorizado(false);// proceso donde se desautoriza (Trabaja sobre
                                                            // usuariosVerificar)
        /*
         * Cuando se desautorice un usuario, su estado va a cambiar a desautorizado y
         * debera ser
         * casteado a estudiante.
         */
        Administrador.usuariosVerificar.dequeue(); // desencolar()
    }

    public editarUsuario(usuario:Usuario):boolean {
        // proceso donde se edita (Trabaja sobre usuariosRegistrados)
        // TODO: Se debe cambiar a booleano o anadir excepcion
        /*
         * Va buscar el usuario ingresado dentro de usuariosRegistrados
         * Si no lo encuentra, Imprime "No se encontro al usuario. Imposible editar." y
         * retorna falso
         * Si lo encuentra, prosigue el metodo
         * Retorna verdadero
         */
        let index:number =  Administrador.usuariosRegistrados.indexOf(usuario);
        if (index == -1) {
            console.log("El usuario no existe.");
            return false;
        } else {
            Administrador.usuariosRegistrados.add(usuario, index);
            Administrador.usuariosRegistrados.remove(index+1); 
            return true;
        }
    }

    public eliminarUsuario(usuario:Usuario ):boolean {
        // proceso donde se elimina (Trabaja sobre usuariosRegistrados)
        // TODO: Se debe cambiar a booleano o anadir excepcion
        /*
         * Va a buscar el usuario ingresado dentro de usuariosRegistrados
         * Si no lo encuentra, imprime "No se encontro al usuario. Imposible eliminar."
         * y retorna falso
         * Si lo encuentra, prosigue el metodo
         * Retorna verdadero.
         */
        let index:number =  Administrador.usuariosRegistrados.indexOf(usuario);
        if (index == -1) {
            console.log("El usuario no existe.");
            return false;
        } else {
            Administrador.usuariosRegistrados.remove(index); // elimina al usuario
            return true;
        }
    }

    public  filtrarUsuarios (num:number):void{
        if (num == 1){
            if ( Administrador.usuariosRegistrados.getFirst() instanceof Estudiante){
                console.log( Administrador.usuariosRegistrados.getFirst() + "Estudiante" );
            }
        }else if (num == 2){
            if ( Administrador.usuariosRegistrados.getFirst() instanceof Creador){
                console.log( Administrador.usuariosRegistrados.getFirst()  + "Creador" );
            }
        }else{
            console.log("Tipo de usuario no identificado.");
        }
    }
}
Administrador.inicializar();