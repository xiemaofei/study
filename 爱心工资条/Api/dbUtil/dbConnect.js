var mysql = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '1016',
  database: '1507b',
  port: 3306
});
connection.connect( ()=>{
    console.log('数据库连接成功')
} );
connection.on( 'error', ()=>{
    console.log('数据库连接失败')
} );
module.exports = connection;