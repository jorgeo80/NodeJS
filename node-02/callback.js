// setTimeout(() => {
//   console.log('Hola Mundo')
// }, 2000);

let getUserByID = (id, callback) =>{
  let user = {
    name: 'Jorge',
    id
  }

  callback(user)

}

getUserByID(10, (user) => {
  console.log('Usuario de base de datos', user)
})