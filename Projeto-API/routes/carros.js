
//app.js

let express = require('express')
const router = express.Router()
const CarroDB = require('../model/CarroDB')
const bodyParser = require('body-parser')


let app = express()
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())




//GET em carros
router.get('/', function (req, res,next){
    CarroDB.getCarros(function(err,carros){
        if(err){
            console.log("Erro de SQL: " + err.message)
            return next(err)
        }
        res.json(carros)
    })
})

//GET em /id
//para que o node compreenda quem deve chamar, usamos a expressão regular para indicar
//e diferenciar esse path, que só aceita números.
router.get('/:id(\\d+)', function(req,res,next){
    
    let id = req.params.id
    CarroDB.getCarrosById(id, function(err,carro){
        if(err){
            console.log("Erro de SQL: " + err.message)
            return next(err)
        }
        res.json(carro)
    })
})

//DELETE em /id
router.delete('/:id(\\d+)', function(req,res,next){
    let id = req.params.id

    CarroDB.deleteCarroById(id, function(err,affectedRows){
        if(err){
            console.log("Erro de SQL: " + err.message)
            return next(err)
        }

        res.json({msg: 'Linhas afetadas: ' + affectedRows})
    })
})

//GET em /tipo
router.get('/:tipo', function(req,res,next){
    let tipo = req.params.tipo
    
    CarroDB.getCarrosByTipo(tipo, function(err,carros){
        if (err){
            console.log("Erro de SQL: " + err.message)
            return next(err)
        }
        res.json(carros)
    })
})






//POST para atualizar um carro
router.post('/', function(req,res,next){
    //carro enviado no formato JSON
    let carro = req.body

    CarroDB.save(carro, function(err,carro){
        if(err){
            console.log("Erro de SQL: " + err.message)
            return next(err)
        }
        res.json(carro)
    })
})

//PUT para atualizar um carro
router.put('/', function(req,res,next){

    //carro enviado no formato JSON
    let carro = req.body

    CarroDB.update(carro, function(err,carros){
        if(err){
            console.log("Erro de SQL: " + err.message)
            return next(err)
        }

        res.json(carros)
    })
})


//Exporta todas as rotas para ser utilizado em outro arquivo
module.exports = router
