const mongoose = require("mongoose");

const url = "mongodb://127.0.0.1:27017/Logins";


const express = require('express');
const bodyParser = require('body-parser');
const app = express();

var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});


const objectSchema = {
    _id: mongoose.Schema.Types.ObjectId,
    
    email: String,
    pass: String
};

const userSchema = mongoose.Schema(objectSchema);

let User = mongoose.model('User', userSchema);

app.post('/', urlencodedParser, (req, res) => {
    let new_log = {
        _id: new mongoose.Types.ObjectId(),
        email:  req.body.email,
        pass: req.body.pass
    };
    let userToSave = new User (new_log);
     mongoose.connect(url,async function(err){
        if (err) throw err;
        console.log("Conexión correcta");
        await userToSave.save(function(err){
            if (err) throw err;
            console.log("Inserción correcta");
            mongoose.disconnect();
        });
    });
});


app.listen(3000);