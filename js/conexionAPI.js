async function listarProductos() {
    const conexion = await fetch("https://my-json-server.typicode.com/fer-89/alura-geek-api/productos");
    const conexionConvertida = conexion.json();
    //console.log(conexionConvertida);
    return conexionConvertida;
}
//crea una funcion para enviar un producto a la API llamada enviarProducto
async function enviarProducto(nombre, precio, imagen) {
    const conexion = await fetch("https://my-json-server.typicode.com/fer-89/alura-geek-api/productos", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ 
            nombre:nombre, 
            precio:precio, 
            imagen:imagen
        })
    });
    const conexionConvertida = conexion.json();
    console.log(conexionConvertida);
    if(!conexion.ok){
        throw new Error("No se pudo enviar el producto.");
    }
    listarProductos();
    return conexionConvertida;
}

async function eliminarProducto(id) {
    const conexion = await fetch(`https://my-json-server.typicode.com/fer-89/alura-geek-api/productos/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        }
    });
    const conexionConvertida = conexion.json();
    console.log(conexionConvertida);
    if(!conexion.ok){
        throw new Error("No se pudo eliminar el producto.");
    }
    listarProductos();
    return conexionConvertida;
}

export const conexionAPI={
    listarProductos, enviarProducto, eliminarProducto
}

//listarProductos();
