async function listarProductos() {
    const conexion = await fetch("http://localhost:3001/productos");
    const conexionConvertida = conexion.json();
    //console.log(conexionConvertida);
    return conexionConvertida;
}
//crea una funcion para enviar un producto a la API llamada enviarProducto
async function enviarProducto(nombre, precio, imagen, id) {
    const conexion = await fetch("http://localhost:3001/productos", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ 
            nombre:nombre, 
            precio:precio, 
            imagen:imagen, 
            id:id
        })
    });
    const conexionConvertida = conexion.json();
    console.log(conexionConvertida);
    if(!conexion.ok){
        throw new Error("No se pudo enviar el producto");
    }
    listarProductos();
    return conexionConvertida;
}

export const conexionAPI={
    listarProductos, enviarProducto
}

//listarProductos();
