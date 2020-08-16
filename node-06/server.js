const express = require('express')
const app = express()

app.use(express.static(__dirname + '/public'))

app.set('view engine', 'hbs')

app.get('/', function (req, res) {
//   let salida = {
//     nombre: 'karen',
//     edad: 99,
//     url: req.url
//   }
  res.render('home',{
    name: 'Jorgeo80',
    year: new Date().getFullYear()
  })
})
 
app.listen(3000, () => {
  console.log('Escuchando peticiones en el puerto 3000')
})