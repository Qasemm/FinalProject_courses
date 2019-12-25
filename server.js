let port = 3000;
let express = require('express');
let app = express();
let bb = require('body-parser');
let sql = require('mysql');
let bcrypt = require("bcryptjs");
let jwt = require("jsonwebtoken");
app.use(bb.json());
let key = "qfshdjndsl,lvend74568+_)#$(%^*(^$%)#$";
let ry;
app.post('/input', (req, res) => {
    let name = req.body.name;
    let email = req.body.email;
    let password = req.body.password;

    bcrypt.hash(password, 8, (err, data) => {
        if (err) {
            console.log(err)
        } else {
            ry = data;
            gett(ry);
        }

        // res.send(jwt.verify(token,key))
        // console.log(token);
        con.query("insert into see (`name`, `email`, `password`) value (" + `'${name}','${email}','${ry}')`, (err, data) => {
            console.log(err);
            console.log(data);
            res.send(req.body)
        })
    });


})
let get;
let getpa;
let getna;
let getAlert;
let con = sql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '12345',
    database: 'n'
})

app.get('/name/:name', (req, res) => {
    let name = req.params.name;
    con.query("select * from see where (`name` =" + `'${name}')`
        , (err, data) => {
            getna = data;
            res.send(getna);
        })
})
app.get('/alert/:password', (req, res) => {
    let alert = req.params.password;
    con.query("select name from see where (`password` =" + `'${alert}')`
        , (err, data) => {
            getAlert = data;
            res.send(getAlert);
            console.log(err)
        })
})

app.get('/email/:email', (req, res) => {
    let email = req.params.email;

    con.query("select * from see where (`email` =" + `'${email}')`
        , (err, data) => {
            get = data;
            res.send(get);
        })
})


function gett(ry) {
app.get('/pass/:pass', (req, res) => {
    let pass = req.params.pass;
    bcrypt.compare(pass, ry, (err, data) => {
        console.log(data)
        if (err) {
            res.status(404).send("NOT found")
            return false;
        } else {
            getpa = data;
            res.status(200).send(getpa)
        }
})
})
}


    // let token = jwt.sign({ e: email, p: ry, n: name }, key);
    // res.setHeader("Authorization", "Barear " + token);
    
    // console.log(getpa)
    // if(err){
    //     console.log(err)

    // }else{
        
    // }
app.listen(port, () => {
    console.log("connected ......");
})
    // let checkName = /[a-z]|[0-9]/i;
    // let checkEmail = /[a-z0-9_\.\-]+@+[a-z_\.\-]+\.+[a-z]/i;
    // let checkPassword = /[a-z]+|[0-9]+|\!+|\@+|\#+|\$+|\%+|\&/i;

// if(checkName.test(name) == false || checkEmail.test(email) == false || checkPassword.test(ry) == false){
//     //         res.status(404);
//     //     }else{
//     //         res.status(200);

//     //         })
//     //     } 
//     // })