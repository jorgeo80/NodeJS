const { argv } = require('./config/yargs')

const { crear } = require('./to_do/todo')

let comando =argv._[0]

switch(comando) {

  case 'crear':
    let tarea = crear(argv.descripcion)
    console.log(tarea)
    break

  case 'listar':
    console.log('Mostar todas las tareas por hacer')
    break

  case 'actualizar':
    console.log('Actualiza una tarea por hacer')
    break

  default:
    console.log('Comando no es reconocido')

}