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

let getEmpleado = async (id) => {
  let empleadoDB = empleados.find(emp => emp.id === id)
  
    if(!empleadoDB){
      throw new Error(`No existe un empleado con el id: ${id}`)
    } else {
      return empleadoDB
    }
  
}



let getSalario = async (empleado) => {
  
  let salarioDB = salarios.find(sal => sal.id === empleado.id)
    
    if(!salarioDB){
      throw new Error(`No se encontro salario para el usuario ${empleado.nombre}`)
    } else {
      return {
        nombre: empleado.nombre,
        salario: salarioDB.salario,
        id: empleado.id
      }
    }
    
}


let getInformacion = async (id) => {
  let empleado =  await getEmpleado(id)
  let resp = await getSalario(empleado)
  return `${resp.nombre} tiene un salario de $${resp.salario}`
}


getInformacion(3).then(mensaje => console.log(mensaje))
.catch(e => {console.log(e)})