const express = require('express')
const app = express()
const path = require('path')
const data = require('./data.json')
const carsData = require('./data/cars.json')

app.set('view engine', 'ejs')
app.listen(3000, () => {
  console.log('listening');
})

// für css und alle static datein
app.use(express.static('public'))

// app.get('/', (req, res) => {
//   res.sendFile('./views/index.html', { root: __dirname })
// })

app.get('/', (req, res) => {
  res.render('pages/index', { title: "Homepage" })
})

// console.log(__dirname);
// console.log(path.join(__dirname, 'views/index.html'));
app.get('/about', (req, res) => {
  res.render('pages/about', { title: "About" })
})

app.get('/courses', (req, res) => {
  res.render('pages/courses', { title: "Courses" })
})
app.get('/products', (req, res) => {
  res.render('pages/products', {
    myName: 'Enes',
    items: ['item1', 'item2', 'item3'],
    title: "Products"
  })
})
app.get('/cars', (req, res) => {
  res.render('pages/cars', { title: "Cars", carsData })
})
app.get('/cars/:id', (req, res) => {
  // console.log(carsData);
  let car = carsData.filter(elt => elt.id == req.params.id)
  console.log(car[0].make);
  res.render('pages/carDetails', { title: "Car Details", car })

})
app.get('/students/api', (req, res) => {
  res.send(data)
})
app.get('/students/api/:id', (req, res) => {
  // console.log(req);
  // console.log(req.params.id);
  let student = data.find(student => student.id == req.params.id)
  if (student === undefined) {
    res.status(500).send('Student not find')
  } else {
    // res.send(student)
    res.send(`
      <h1>${student.first_name}</h1>
      <h1>${student.last_name}</h1>
      <h1>${student.email}</h1>
      <h1>${student.gender}</h1>
    `)
  }

})
// am ende
app.use((req, res) => {
  res.sendFile('./views/404.html', { root: __dirname })
})
