import { Router } from "express"
import * as controlador from './productos.controladores.mjs'

const rutasModuloProductos = new Router()
rutasModuloProductos.get(`${URL_BASE}/productos`, controlador.obtenerProductos)


export default rutasModuloProductos