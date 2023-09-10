
//CarroDB.js

//carrega o módulo mysql
const { rejects } = require('assert')
var mysql = require('mysql')
const { resolve } = require('path')


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
  static getCarros(){
    
    return new Promise(function(resolve,reject){

      let connection = CarroDB.connect()

      //cria a consulta
      let sql = "select * from carro"

      let query = connection.query(sql, function(err, results, fields) {
        connection.end()

        if(err) {
          reject(err)
        } else {
          resolve(results)
        }

      })
    })
  
  }

  //Retorna lista de carros por tipo
  static getCarrosByTipo(tipo){

    return new Promise(function(resolve,reject){

      let connection = CarroDB.connect()
  
      //cria a consulta
      let sql = "select * from carro where tipo = ?"
  
      let query = connection.query(sql, [tipo], function(err, results, fields){
        connection.end()
        
        if (err) {
          reject(err)
        } else {
          resolve(results)
        }

      })
    })


  }

  //Retorna lista de carros por id
  static getCarrosById(id){

    return new Promise(function(resolve,reject){

      let connection = CarroDB.connect()
  
      let sql = "select * from carro where id = ?"
  
      let query = connection.query(sql, [id], function(err, results, fields){
        connection.end()
        
        if (err) {
          reject(err)
        } else if (results.length == 0) {
          reject(Error("Nenhum carro encontrado."))
          return
        } else {
          //Encontrou carro
          let carro = results[0]
          resolve(carro)
        }
      })
    })
  }


  //Salva um carro
  static save(carro){

    return new Promise(function(resolve,reject){

      let connection = CarroDB.connect()
  
      let sql = "insert into carro set ?"
  
      let query = connection.query(sql, carro, function(err, results, fields){
        connection.end()

        if (err) {
          reject(err)
        } else {
          carro.id = results.insertId
          let re = carro
          resolve(carro)
        }
  
      })
    })
  }

  //Atualiza um carro no banco de dados
  static update(carro){
      
    return new Promise(function(resolve,reject){

      let connection = CarroDB.connect()
  
      let sql = "update carro set ? where id = ?"
  
      let id = carro.id
      
      let query = connection.query(sql, [carro, id], function(err, results, fields) {
        connection.end()
  
        if(err) {
          reject(err)
        } else {
          resolve(carro)
        }
  
      })
    })
  }

  //Deleta um carro do banco de dados
  static delete(carro){

    return new Promise(function(reject,resolve){

      let connection = CarroDB.connect()
  
      let sql = "delete from carro where id = ?"
  
      let id = carro.id
  
      let query = connection.query(sql, [id], function(err, results, fields) {
        connection.end()

        if(err) {
          reject(err)
        } else {
          resolve(results.affectedRows)
        }  
      })
    })
  }

  //Deleta um carro pelo id
  static deleteCarroById(id, callback){

    return new Promise(function(reject,resolve){

      let connection = CarroDB.connect()

      let sql = "delete from carro where id = ?"

      let query = connection.query(sql, id, function(err, results, fields) {
        connection.end()

        if(err) {
          reject(err)
        } else {
          resolve(results.affectedRows)
        }
      })
    })
    
  }

}

module.exports = CarroDB


















