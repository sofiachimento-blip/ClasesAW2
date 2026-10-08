import * as modelo from './productos.modelo.mjs'
export function obtenerProductos(req, res){
    const productos = modelo.obtenerProductos()
    // aca incorporamos el modelo de la vista
    res.json(productos)
}