const mysql = require('mysql2');
const connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: '123456',
  database: 'happyworkpro'
})

connection.connect()

connection.query('SELECT * FROM jnzhr_users', (err, rows, fields) => {
  if (err) throw err

  console.log('The solution is: ', rows)
})

connection.end()