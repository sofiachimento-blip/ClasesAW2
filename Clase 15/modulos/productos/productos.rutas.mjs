import { Router } from "express"
import * as controlador from './productos.controladores.mjs'

const rutasModuloProductos = new Router()
rutasModuloProductos.get('/api/v1/productos', controlador.obtenerProductos)
rutasModuloProductos.get('/api/v1/productos/:id_producto', )

export default rutasModuloProductos