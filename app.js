// require('newrelic');
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const routes = require('./routes/routes');
var cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const mysql = require('mysql2');
//middleware
app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended:true}));
app.use("/public", express.static(path.join(__dirname, 'public')));

const username = 'yantra-user';
const password = "YantraDb%23123";
const host = '15.206.185.95';
const port = '27016'; 
const dbName = 'yantra-tools'; 

    mongoose.connect(`mongodb://${username}:${password}@${host}:${port}/${dbName}`).then((result) => {
        console.log('Database connected');
        app.listen(3000,()=>{
            console.log('Server is running on port 3000');
        });
    })
    .catch((error)=>{
        console.log(error);
    })

    // mongoose.connect('mongodb://127.0.0.1:27017/yantra-final').then((result) => {
    //     console.log('Database connected');
    //     app.listen(3000,()=>{
    //         console.log('Server is running on port 3000');
    //     });
    // })
    // .catch((error)=>{
    //     console.log(error);
    // })


//routes
app.use('/api/v1', routes);