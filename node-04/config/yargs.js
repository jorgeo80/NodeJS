const optsCrear = {
  descripcion: {
    demand: true,
    alias: 'd',
    desc: 'Descripción de la tarea por hacer'
  }
}

const optsActualizar = {
  descripcion: {
    demand: true,
    alias: 'd',
    desc: 'Descripción de la tarea por hacer'
  },
  completado: {
    default: true,
    alias: 'c',
    desc: 'Marca como completado o pendiente la tarea'
  }
}

const optsBorrar = {
  descripcion: {
    demand: true,
    alias: 'd',
    desc: 'Tarea por borrar'
  }
}

const argv = require('yargs')
              .command('crear','Crear un elemento por hacer', optsCrear)
              .command('actualizar','Actualiza elestado de una tarea', optsActualizar)
              .command('borrar','Tarea borrada', optsActualizar)
              .help()
              .argv

module.exports = {
  argv
}