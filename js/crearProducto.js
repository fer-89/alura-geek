import { conexionAPI } from "./conexionAPI.js";
const formulario = document.querySelector("[data-formulario]");
async function crearProducto(evento) {
    evento.preventDefault();
    const nombre = document.querySelector("[data-nombre]").value;
    const precio = document.querySelector("[data-precio]").value;
    const imagen = document.querySelector("[data-imagen]").value;
    console.log(nombre + " " + precio + " " + imagen);
    try{
        //crea un id basado en el ultimo id de producto de la API
        const id = (await conexionAPI.listarProductos()).length + 1;
        await conexionAPI.enviarProducto(nombre, precio, imagen, id);
    }catch(e){
        alert(e);
    }
}
formulario.addEventListener("submit", evento => crearProducto(evento));