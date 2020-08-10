let deadpool = {
  nombre: 'Wade',
  apellido: 'Winston',
  poder: 'Regeneración',
  getNombre: function() {
    return `${this.nombre} ${this.apellido} - poder: ${this.poder}`    
  }
}

let {nombre: primerNombre, // Aqui cambio el nombre en destructuración, 
     apellido, 
     poder} = deadpool

console.log(primerNombre)
console.log(apellido)
console.log(poder)