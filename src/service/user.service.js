
const conn = require('../config/dbconfig');

const userAll = (req, res) => {
    try {
        conn.connection.connect();
        conn.connection.query('SELECT * FROM jnzhr_users', (err, rows, fields) => {
            if (err) throw err
            res.status(200).json({ data: rows })
        })
        
        conn.connection.end();
       
    } catch (err) {
        console.log(err)
        connection.end();
    }
}
module.exports = {userAll}