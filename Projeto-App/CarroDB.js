

//carrega o módulo mysql
var mysql = require('mysql')




//conecta ao banco de dados
connection.connect((err) => {
    if (err) {
      console.error('Erro ao conectar ao banco de dados:', err);
      return;
    }
    console.log('Conexão com o banco de dados estabelecida com sucesso');
  });

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
  }

  //Retorna Lista de Carros
  static getCarros(callback){
    
    let connection = CarroDB.connect()

    //cria a consulta
    let sql = "select * from carro"

    let query = connection.query(sql, function(err, results, fields) {
      
      if(err) throw err

      callback(results)
    })
  
    connection.end()
  }

  //Retorna lista de carros por tipo
  static getCarrosByTipo(tipo, callback){

    let connection = CarroDB.connect()

    //cria a consulta
    sql = "select * from carro where tipo = '" + tipo + "'"

    let query = connection.query(sql, function(err, results, fields){
      
      if (err) throw err

      callback(results)})
  }

    //Retorna lista de carros por id
    static getCarrosById(id, callback){

      let connection = CarroDB.connect()
  
      sql = "select top 1 * from carro where id = ?"
  
      let query = connection.query(sql, function(err, results, fields){
        
        if (err) throw err
        if (results.length == 0) {
          console.log("Nenhum carro encontrado.")
          return
        }
  
        //Encontrou carro
        let carro = results[0]

        callback(carro)}
      )

      connection.end()
    }


    //Salva um carro
    static save(carro, callback){
      let connection = CarroDB.connect()

      let sql = "insert into carro set ?"

      let query = connection.query(sql, carro, function(err, results, fields){
        if (err) throw err

        let re = results[0]

        callback(re)
      })
    }


  }




  
  
//cria uma consulta
/*
let sql = "select * from carro"
connection.query(sql, function(error, results, fields) {
    if(error) throw error

    let carros = results

    for(let i = 0; i < carros.length; i++){
        console.log(carros[i].id + ": " + carros[i].nome)
    }

    ou

    carros.map( c => console.log(carros[i].id + ": " + carros[i].nome))

})
*/












connection.end()









