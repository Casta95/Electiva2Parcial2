const route = require('express').Router()

const path = require('path')

route.get('/', (req, res) => res.sendFile(path.join(__dirname, './../views/index.html')))
route.get('/find-dish', (req, res) => res.sendFile(path.join(__dirname, './../views/form-find.html'))
)
route.get('/add-dish', (req, res) => res.sendFile(path.join(__dirname, '../views/form-dish.html')))
route.get('/delete-dish', (req, res) => res.sendFile(path.join(__dirname, '../views/form-delete-dish.html')))

module.exports = route