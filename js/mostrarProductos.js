import { conexionAPI } from "./conexionAPI.js";

const listaProductos = document.querySelector("[data-lista-productos]");

export default function crearCard(nombre, precio, imagen, id) {
    const producto = document.createElement("li");
    producto.className = "productos__lista__elemento";
    producto.innerHTML = `
                            <img class="productos__lista__elemento__imagen" src="${imagen}" alt="Foto ${nombre}">
                            <p class="productos__lista__elemento__titulo">${nombre}</p>
                            <div class="productos__lista__elemento__detalles">
                                <p>$${precio}</p>
                                <img class="productos_lista_boton_eliminar" id="${(id)}"  src="./Assets/icon_trash.png" alt="Botón eliminar">
                            </div>
                         `;
    agregarEliminarEvento(producto, id);
    
    return producto;
}

function agregarEliminarEvento(producto, id) {
    const botonBorrar = producto.querySelector(".productos_lista_boton_eliminar");
    botonBorrar.addEventListener("click", async () => {
        try {
            await conexionAPI.eliminarProducto(id);
            producto.remove();
            alert(`Producto eliminado`);
        } catch (error) {
            alert(error);
        }
    });
}

async function listarProductos() {
    try{
        const listaAPI = await conexionAPI.listarProductos();
        listaAPI.forEach(producto => {
            listaProductos.appendChild(crearCard(producto.nombre, producto.precio, producto.imagen, producto.id))
        });
    }catch{
        listaProductos.innerHTML = `<h2 class="mensaje__titulo">Ha ocurrido un problema de conexión.</h2>`;
    }
}

listarProductos();