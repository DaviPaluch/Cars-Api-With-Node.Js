//uma desvantagem de usar 'async' e 'await' é que temos que tratar sempre os erros 
//com 'try/cath'


//A função 'exec' é projetada para simplificar a execução de funções assíncronas
//ela aceita uma função 'fn' como argumento
const exec = fn => (req,res,next) => {
    Promise.resolve(fn(req,res,next))
        .catch(function (error){
            console.log(error)
            next(error)
    })
}

module.exports = exec