const productos = [
    {
    nombre: "pantalon",
    precio: 100},
    {
    nombre: "Remera",
    precio: 50
    }
]

// filter = filtros
// ver doc en mdn -> Arrey
// === !=
// <-- nuevo arreglo
const productosFiltrados = productos.filter((producto)=>{
    return Number(producto.precio) < 100 
})

console.log(productosFiltrados)

// filter = filtros
// ver doc en mdn -> Arrey
// <-- devuelve el elemento encontrado, si no undefind o null

