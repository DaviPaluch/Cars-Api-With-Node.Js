
//CarroDB.js

//carrega o módulo mysql
var mysql = require('mysql')


//Classe CarroDB
class CarroDB {

  //Função para conectar no banco de dados
  static connect(){

    var connection = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'node_essentials'
    })

    connection.connect()

    return connection
  }

  //Retorna Lista de Carros
  static getCarros(callback){
    
    let connection = CarroDB.connect()

    //cria a consulta
    let sql = "select * from carro"

    let query = connection.query(sql, function(err, results, fields) {
      connection.end()

      if(err) {
        //geralmente funções de callback retornam erros como parâmetros
        callback(err,null)
        return next(err)
      }

      callback(null,results)
    })
  
  }

  //Retorna lista de carros por tipo
  static getCarrosByTipo(tipo, callback,next){

    let connection = CarroDB.connect()

    //cria a consulta
    let sql = "select * from carro where tipo = ?"

    let query = connection.query(sql, [tipo], function(err, results, fields){
      connection.end()
      
      if (err) {
        callback(err,null)
        return next(err)
      }

      callback(null,results)
    })

  }

    //Retorna lista de carros por id
    static getCarrosById(id, callback,next){

      let connection = CarroDB.connect()
  
      let sql = "select * from carro where id = ?"
  
      let query = connection.query(sql, [id], function(err, results, fields){
        connection.end()
        
        if (err) {
          callback(err,null)
          return
        }
        if (results.length == 0) {
          console.log("Nenhum carro encontrado.")
          return
        }
  
        //Encontrou carro
        let carro = results[0]
        callback(null,carro)
      })

    }


    //Salva um carro
    static save(carro, callback){
      let connection = CarroDB.connect()

      let sql = "insert into carro set ?"

      let query = connection.query(sql, carro, function(err, results, fields){
        if (err) {
          console.log(err)
          callback(err,null)
          return
        }

        carro.id = results.insertId
        let re = carro
        callback(null,re)
      })
    }

    //Atualiza um carro no banco de dados
    static update(carro, callback){
       
      let connection = CarroDB.connect()

      let sql = "update carro set ? where id = ?"

      let id = carro.id

      let query = connection.query(sql, [carro, id], function(err, results, fields) {

        if(err) throw err
        callback(this.values[0])
      })
      connection.end()
    }

    //Deleta um carro do banco de dados
    static delete(carro, callback){
      let connection = CarroDB.connect()

      let sql = "delete from carro where id = ?"

      let id = carro.id

      let query = connection.query(sql, [id], function(err, results, fields) {

        if(err) throw err

        callback(results.affectedRows)

      })
      connection.end()
    }

    //Deleta um carro pelo id
    static deleteCarroById(id, callback){
      let connection = CarroDB.connect()

      let sql = "delete from carro where id = ?"

      let query = connection.query(sql, id, function(err, results, fields) {
        connection.end()

        if(err) {
          callback(err,null)
          return
        }

        callback(null,results.affectedRows)

      })
    }

  }

  module.exports = CarroDB


















