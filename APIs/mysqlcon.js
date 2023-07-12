const mysql = require('mysql');

const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'keeperapp'
});

// con.connect((err, result)=>{
//     if(err){
//         console.log(err);
//     } else{
//         console.log(result);
//     }
// })

module.exports = con;