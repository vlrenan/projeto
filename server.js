const express = require('express');
const cookieParser = require('ccookie-parser');
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');
const routers = require('./src/routers');
const app = express();
const port = process.env.PORT || 5000;

mongoose.connect('mongodb://localhost:27017/PROJETO0', {
    useUniFieldTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false
}, function(err) {
    if (err) {
        console.log(err)
    } else {
        console.log('MongoDB CONECTADO com sucesso!')

    }

})

app.use(cors());
app.use(cookieParser());
app.use(express.json());

app.get('/', function(req, res) {
    res.json({ message: 'hello word' });

});

app.use(routers);

app.listen(3000, function() {
    console.log('Server runing on port ${port}')

})