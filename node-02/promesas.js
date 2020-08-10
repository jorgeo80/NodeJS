let empleados = [{
  id: 1,
  nombre: 'Jorge'
},
{
  id: 2,
  nombre: 'Fernando'
},
{
  id: 3,
  nombre: 'Melissa'
}]

let salarios = [{
  id: 1,
  salario: 1000
},
{
  id: 2,
  salario: 500
}]

let getEmpleado = (id) => {
  return new Promise((resolve, reject) => {

    let empleadoDB = empleados.find(emp => emp.id === id)
  
    if(!empleadoDB){
      reject(`No existe un empleado con el id: ${id}`)
    } else {
      resolve(empleadoDB)
    }
    
  })
  
}



let getSalario = (empleado) => {
  
  return new Promise((resolve, reject) => {
    
    let salarioDB = salarios.find(sal => sal.id === empleado.id)
    
    if(!salarioDB){
      reject(`No se encontro salario para el usuario ${empleado.nombre}`)
    } else {
      resolve({
        nombre: empleado.nombre,
        salario: salarioDB.salario,
        id: empleado.id
      })
    }
    
  })
  
  
}

getEmpleado(3).then(empleado => {
  getSalario(empleado).then(resp => {
      console.log(`El salario de ${resp.nombre} es de ${resp.salario}`)
  }, err => console.log(err))
}, err => console.log(err));

