export default class Usuario{

    constructor(user){
        this.numero = user.id
        this.nombre = user.name
        this.nombreAcceso = user.username
        this.correo = user.email
    }


    mostrar(){
        return `Usuario: ${this.nombre} [${this.numero}], Email: ${this.correo}, Nombre de acceso: ${this.nombreAcceso}`
    }
}
