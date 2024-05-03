const express = require('express')
const mysql = require('mysql')
const cors = require('cors')

const app = express()
app.use(cors())

const db = mysql.createConnection({
    host: "localhost",
    user: 'root',
    password: '',
    database: 'stepbigbrew'

})
app.get('/', (re, res)=> {
    return res.json("Hallo");
})

app.listen(8081, ()=> {
    console.log("listening");
})