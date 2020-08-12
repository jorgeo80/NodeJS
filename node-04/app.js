const { argv } = require('./config/yargs')
const colors = require('colors')
const porHacer = require('./to_do/todo')

let comando =argv._[0]

switch(comando) {

  case 'crear':
    let tarea = porHacer.crear(argv.descripcion)
    console.log(tarea)
    break

  case 'listar': 
  let listado = porHacer.getListado()
  for(let tarea of listado){

    console.log('\n')
    console.log('======== Por Hacer ========='.green)
    console.log(tarea.descripcion)
    console.log('Estado:', tarea.completado)
    
  }
    break

  case 'actualizar':
    let acutalizado = porHacer.actualizar(argv.descripcion, argv.completado)
    console.log(acutalizado)
    break
  
  case 'borrar':
    let borrado = porHacer.borrar(argv.descripcion)
    console.log(borrado)
    break

  default:
    console.log('Comando no es reconocido')

}