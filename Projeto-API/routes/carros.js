
//app.js

let express = require('express')
const router = express.Router()
const CarroDB = require('../model/CarroDB')
const exec = require('./utils')
const bodyParser = require('body-parser')


let app = express()
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())




//GET em carros
router.get('/', exec (async(req, res,next) => {
    let carros = await CarroDB.getCarros()
    res.json(carros)
}))

//GET em /id
router.get('/:id(\\d+)', exec(async(req,res,next) => {
    
    let carro = await CarroDB.getCarrosById(req.params.id)
    res.json(carro)
    
}))

//DELETE em /id
router.delete('/:id(\\d+)', exec(async(req,res,next) => {

    let affectedRows = await CarroDB.deleteCarroById(req.params.id)
    res.json({msg: 'Linhas afetadas: ' + affectedRows})
}))

//GET em /tipo
router.get('/:tipo', exec(async(req,res,next) => {
    
    let carros = await CarroDB.getCarrosByTipo(req.params.tipo)
    res.json(carros)
    
}))




//POST para salvar um carro
router.post('/', exec(async(req,res,next) => {

    let carro = await CarroDB.save(req.body)
    res.json(carro)
}))

//PUT para atualizar um carro
router.put('/', exec(async(req,res,next) => {

    let carro = await CarroDB.update(req.body)
    res.json(carro)
    
}))


//Export all routes to be used in another file
module.exports = router
