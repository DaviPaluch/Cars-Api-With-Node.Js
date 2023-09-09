
//app.js

let express = require('express')
const bodyParser = require('body-parser')


let app = express()
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

//Rotas
app.use('/api', require('./routes/carros'))


//Teste de Erro
app.get('/teste_erro', function(req, res){
    throw Error('Erro ninja')
})

//Rota não encontrada 404
app.use(function(req,res,next){

    //criamos um objeto 'Error' e passamos para a função 'next()'
    //que delegará o trabalho para o próximo middleware, que neste caso
    //será o middleware de erro
    let err = new Error('Não encontrado')
    err.status = 404
    next(err)
})



//Para mostrar erros amigáveis vamos adicionar essa função de tratamento de erros genérica
//obs:  é obrigatório que um middleware de tratamento de erros possua 4 argumentos
//      se você não precisar usar o objeto next, deverá especificá-lo para manter a assinatura      
app.use(function(err,req,res,next){

    console.log(err.stack)
    res.status(500)
    res.json({erro: "Ocorreu um erro: " + err.message})
})



// inicia servidor
let server = app.listen(3000, function(){
    let host = server.address().address
    let port = server.address().port
    console.log("Servidor iniciado em http://%s:%s",host,port)
})






