// 'export default' permite que esta clase sea pública y pueda ser importada 
// en otros archivos (como en tu index.js) usando la sintaxis de ES Modules.
export default class Post{

    // El 'constructor' es un método especial que se ejecuta automáticamente 
    // cada vez que creas un nuevo objeto (instancia) a partir de esta clase.
    // Aquí recibe como parámetro un objeto llamado 'post' (probablemente un dato de una API o base de datos).
    constructor(post){
        // 'this' hace referencia a la instancia específica que se está creando en ese momento.
        // Aquí extraemos el valor de la propiedad 'id' del objeto que llegó por parámetro
        // y lo guardamos internamente en nuestra clase bajo el nombre 'numero'.
        this.numero = post.id

        // De la misma forma, extraemos la propiedad 'title' del objeto original 
        // y la asignamos a una nueva propiedad llamada 'titulo' dentro de nuestra clase.
        this.titulo = post.title
    }

    // 'mostrar()' es un método de la clase. Define una acción o comportamiento 
    // que todos los objetos de tipo Post podrán ejecutar.
    mostrar(){
        // Retorna una cadena de texto dinámica usando "Template Literals" (las comillas invertidas ``).
        // El símbolo ${} permite inyectar directamente el valor de las propiedades 
        // (this.titulo y this.numero) dentro del texto sin tener que concatenar con el signo +.
        return `Post: ${this.titulo} [${this.numero}]`
    }
}
