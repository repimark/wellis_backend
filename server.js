const express = require('express')
const mysql = require('mysql')
const bodyParser = require('body-parser')
const db = mysql.createConnection({
    host: 'localhost',
    user: 'node_user',
    password: 'secretPass19',
    database: 'wellis'
})

db.connect(err => {
    if(err){
        throw err;
    }
    console.log("mysql connected")
    
})

const app = express()
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.raw());
// app.get('/createunits', ( req, res) => {
//     let sql = "CREATE TABLE units ( `id` INT NOT NULL AUTO_INCREMENT , `name` VARCHAR(255) NOT NULL , PRIMARY KEY (`id`))"
//     db.query(sql, err => {
//         if(err){
//             throw err;
//         }
//         res.send("table created")
//     })
// })
app.post('/addunit', (req, res) => {
    let unit = {name: req.body.name}
    let sql = "INSERT INTO units SET ?"
    console.log(unit)
    db.query(sql, unit, err => {
        if(err){
            throw err;
        }
        res.send("OK - {unit}").status(200)
    })
    
})
app.get('/units', (req,res) => {
    let sql = "SELECT * FROM units"
    db.query(sql, (err, results) => {
        if(err){
            throw err
        }
        res.status(200).json(results)
    })
})
app.listen(2233, () => {
    console.log("server started")
})