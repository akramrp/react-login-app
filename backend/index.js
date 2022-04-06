import express from "express";
import mongoose from "mongoose";
import cors from 'cors';
import bodyParser from 'body-parser';
import router from './route/route.js';

const app = express();
const PORT = '3001';
const DB_URL = 'mongodb+srv://root:rootpass@crudd.6fvby.mongodb.net/CRUDD?retryWrites=true&w=majority';


app.use(bodyParser.json({extended: true}));
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors());
app.use('/users', router);

// useNewUrlParser:true, useUnifiedTopology:true, useFindAndModify:false
mongoose.connect(DB_URL, { useNewUrlParser:true, useUnifiedTopology:true }).then( () => {
    app.listen(PORT, () => {
        console.log(`server is runing: ${PORT} 👍👍`);
    })
}).catch((error) => {
    console.log('Error: ', error.message);
})