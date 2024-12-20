async function listarProductos() {
    const conexion = await fetch("http://localhost:3001/productos");
    const conexionConvertida = conexion.json(); 
    return conexionConvertida;
}

export const conexionAPI={
    listarProductos
}

//listarProductos();
