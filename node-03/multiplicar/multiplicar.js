const fs = require('fs')

let crearArchivo = (base, limite) =>{
  return new Promise((resolve, reject) => {

    if(!Number(base)){
      reject('No es un numero')
      return
    }

      let data = ''
    
      for(let i = 1; i <= limite; i++)[data += `${base} x ${i} = ${base * i}\n`]
    
    
      fs.writeFile(`tablas/Tabla_Multiplicar_${base}.txt`, data, (err) => {
        if (err) 
          reject(err)
        else resolve(`Tabla_Multiplicar_${base}.txt`)
      })

  })
}

let listarTabla = (base, limite) =>{
  return new Promise((resolve, reject) => {

    if(!Number(base)){
      reject('No es un numero')
      return
    }

    let data = ''
    for(let i = 1; i <= limite; i++)[data += `${base} x ${i} = ${base * i}\n`]
    resolve(data)

  })
}

module.exports = {
  crearArchivo,
  listarTabla
}