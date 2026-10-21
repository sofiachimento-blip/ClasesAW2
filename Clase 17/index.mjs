import express from 'express'
import dotenv from 'dotenv'
import pool from './conexion.bd.mjs'

dotenv.config()

//console.log(process.env.PUERTO)

const PUERTO = process.env.PUERTO || 3000

const app = express()

app.get('/api/v1/productos', async (req, res) => {
   const resultado = await pg.query('SELECT * FROM productos');
   console.log(resultado);
   res.json({})
})

app.get('/api/v1/productos/:id', async (req, res) => {
   const id = Number (req.params.id)
   const resultado = await pg.query('SELECT * FROM productos WHERE id = $1', [id]);
   console.log(resultado.rows);
   res.json(resultado.rows)
})



app.listen(PUERTO)
