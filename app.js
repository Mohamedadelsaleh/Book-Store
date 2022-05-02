const express = require('express');
const mongoose = require('mongoose');
const route = require('./Routes/book-routes');
const app = express();

const DBURI = 'mongodb+srv://Mohamedadel7774:MohamedAdel77@bookstore.ggck8.mongodb.net/bookStore?retryWrites=true&w=majority';

mongoose.connect(DBURI)
        .then(() =>console.log("Database Connected....!"))
        .then(() =>{
            app.listen(3000);
        })
        .catch(err => console.log(err));


app.use('/books', route)