
//app.js

let express = require('express')
const router = express.Router()
const CarroDB = require('../model/CarroDB')
const bodyParser = require('body-parser')


let app = express()
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())




//GET em carros
router.get('/', function (req, res){
    CarroDB.getCarros(function(carros){
        res.json(carros)
    })
})

//GET em /carros/id
//para que o node compreenda quem deve chamar, usamos a expressão regular para indicar
//e diferenciar esse path, que só aceita números.
router.get('/:id(\\d+)', function(req,res){
    
    let id = req.params.id
    CarroDB.getCarrosById(id, function(carro){
        res.json(carro)
    })
})

//DELETE em /carros/id
router.delete('/:id(\\d+)', function(req,res){
    let id = req.params.id

    CarroDB.deleteCarroById(id, function(carro){
        res.json({msg: 'Carro deletado com sucesso.'})
    })
})

//GET em /carros/tipo
router.get('/:tipo', function(req,res){
    let tipo = req.params.tipo
    
    CarroDB.getCarrosByTipo(tipo, function(carros){
        res.json(carros)
    })
})






//POST para atualizar um carro
router.post('/', function(req,res){
    //carro enviado no formato JSON
    let carro = req.body

    CarroDB.save(carro, function(carro){
        res.json(carro)
    })
})

//PUT para atualizar um carro
router.put('/', function(req,res){

    //carro enviado no formato JSON
    let carro = req.body

    CarroDB.update(carro, function(carros){
        res.json(carros)
    })
})


//Exporta todas as rotas para ser utilizado em outro arquivo
module.exports = router
