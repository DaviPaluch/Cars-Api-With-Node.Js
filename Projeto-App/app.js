
//app.js

let express = require('express')
const CarroDB = require('./CarroDB')
const bodyParser = require('body-parser')


let app = express()
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())



//configura uma rota na raiz
app.get('/', function(req,res){
    res.send('api dos carros')
})


//GET em carros
app.get('/carros', function (req, res){
    CarroDB.getCarros(function(carros){
        res.json(carros)
    })
})

//GET em /carros/tipo
app.get('/carros/:tipo', function(req,res){
    let tipo = req.params.tipo
    
    CarroDB.getCarrosByTipo(tipo, function(carros){
        res.json(carros)
    })
})

//POST para atualizar um carro
app.post('/carros', function(req,res){
    //carro enviado no formato JSON
    let carro = req.body

    CarroDB.save(carro, function(carro){
        res.json(carro)
    })
})

//PUT para atualizar um carro
app.put('/carros', function(req,res){

    //carro enviado no formato JSON
    let carro = req.body

    CarroDB.update(carro, function(carros){
        res.json(carros)
    })
})





// inicia servidor
let server = app.listen(3000, function(){
    let host = server.address().address
    let port = server.address().port
    console.log("Servidor iniciado em http://%s:%s",host,port)
})






