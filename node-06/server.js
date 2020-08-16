const express = require('express')
const app = express()
const hbs =require('hbs')

app.use(express.static(__dirname + '/public'))

hbs.registerPartials(__dirname + '/views/partials')

app.set('view engine', 'hbs')

app.get('/', function (req, res) {
  res.render('home',{
    name: 'Jorgeo80',
    year: new Date().getFullYear()
  })
})

app.get('/about', function (req, res) {
  res.render('about',{
    year: new Date().getFullYear()
  })
})
 
app.listen(3000, () => {
  console.log('Escuchando peticiones en el puerto 3000')
})