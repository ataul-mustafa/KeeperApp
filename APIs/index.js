const con = require('./mysqlcon');
const express = require('express');
const cors = require('cors');
// const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(express.json());



app.get('/fetchAll', (req, res) => {

    let sql = "SELECT * FROM alldata";
    con.query(sql, (err, result)=>{
        if (!err){
            res.send(result);
        } else{
            res.send(err);
        }
    })
})

app.get('/fetchOne/:id', (req, res)=>{
    // console.log(req.params.id);
    let sql = "SELECT Title, Content FROM alldata WHERE Id="+req.params.id;
    con.query(sql, (err, result)=>{
        if (!err){
            res.send(result);
        } else{
            res.send(err);
        }
    })
})

app.post('/send', (req, res) => {
    let values = { Title: req.body.title, Content: req.body.content };
    let sql = "INSERT INTO alldata SET ?";
    con.query(sql, values, (err, result) => {
        if (!err) {
            res.send(result)
        } else {
            res.send(err);
        }
    })
})

app.delete('/delete/:id', (req, res)=>{
    let sql = 'DELETE FROM alldata WHERE Id = '+req.params.id;
    con.query(sql, (err, result)=>{
        if(!err){
            res.send(result)
        } else{
            res.send(err);
        }
    })
})

app.listen(5000, ()=>{
    console.log("sever start")
});