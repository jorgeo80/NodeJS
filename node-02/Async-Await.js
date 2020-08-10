/* Async Await*/

let getName = async() => {
  
  // throw new Error('No existe nombre para ese usuario')
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Jorge')
    }, 3000)
  })
}

let regards = async() => {
  let name = await getName()
  return `Hola ${name}`
}

// Resolvemos la promesa
regards().then(message => console.log(message))
.catch(e => console.log('Error de ASYNC', e))