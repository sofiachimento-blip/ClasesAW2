//console.log('Hola')
import http from 'node:http'

console.log('Inicio')
// instanciamos un servidor
const servidor = http.createServer((peticion, respuesta)=>{
    //console.log(peticion)
    //console.log('entra peticion')
    console.log(peticion.url, peticion.method)
    respuesta.end('Hola desde el servidor')
})
// abrimos un puerto y lo ponemos a escuchar
servidor.listen(3000, ()=>{
    console.log('servidor arrancando')
}) 