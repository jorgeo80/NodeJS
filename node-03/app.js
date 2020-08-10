const argv = require('yargs')
              .command('listar',
                        'Imprime en consola la tabla de multiplicar',
                        {
                          base: {
                            demand: true,
                            alias: 'b',
                            default: 1
                          },
                          limite: {
                            alias: 'lim',
                            default: 10
                          }
                        })
              .command('crear',
                        'Crea un archivo con la tabla de multiplicar',
                        {
                          base: {
                            demand: true,
                            alias: 'b',
                            default: 1
                          },
                          limite: {
                            alias: 'lim',
                            default: 10
                          }
                        })
              .help()
              .argv
const miltiplicar =  require('./multiplicar/multiplicar')
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar')


let comando = argv._[0]

switch(comando){
  
  case 'listar':
    listarTabla(argv.base, argv.limite)
      .then(lista => console.log(`Tabla listada: \n----------------------------\n${lista}`))
      .catch(e => console.log(e))
    break
  
  case 'crear':
    crearArchivo(argv.base, argv.limite)
      .then(archivo => console.log(`Archivo creado: ${archivo}`))
      .catch(e => console.log(e))
    break
  
  default:
    console.log('Comando no reconocido')
}

