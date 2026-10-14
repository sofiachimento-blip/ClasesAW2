import * as modelo from './productos.modelo.mjs'
import * as vista from './productos.vista.mjs'

export function obtenerProductos(req, res){
    const productos = modelo.obtenerProductos()
    //const vista = vista.obtenerProductos(productos)
    // aca incorporamos el modelo de la vista
    res.json(productos)
}
export function obtenerProductos(req, res){
    const id = Number(req.params.id_producto)
    const productos = modelo.obtenerProductos(id)
    //const vista = vista.obtenerProductos(productos)
    // aca incorporamos el modelo de la vista
    res.json(productos)
}