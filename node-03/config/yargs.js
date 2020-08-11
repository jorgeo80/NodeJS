const opts = {
  base: {
    demand: true,
    alias: 'b',
    default: 1
  },
  limite: {
    alias: 'lim',
    default: 10
  }
}

const argv = require('yargs')
              .command('listar', 'Imprime en consola la tabla de multiplicar', opts)
              .command('crear', 'Crea un archivo con la tabla de multiplicar', opts)
              .help()
              .argv
           
module.exports = {
  argv
}