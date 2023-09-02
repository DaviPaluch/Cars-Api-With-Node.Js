

//carrega o módulo mysql
var mysql = require('mysql')


var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'node_essentials'
})

//conecta ao banco de dados
connection.connect((err) => {
    if (err) {
      console.error('Erro ao conectar ao banco de dados:', err);
      return;
    }
    console.log('Conexão com o banco de dados estabelecida com sucesso');
  });
  
//cria uma consulta
let sql = "select * from carro"
connection.query(sql, function(error, results, fields) {
    if(error) throw error

    let carros = results

    for(let i = 0; i < carros.length; i++){
        console.log(carros[i].id + ": " + carros[i].nome)
    }
})









