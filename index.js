require('dotenv').config({ path: '../.env' });
const express = require('express');
const app= express()
const router = express.Router()
const mongoose = require('./src/mongodb/database/database')
const routes = require ('./src/routes/routes')
const cors = require('cors')
const path = require('path');

const port = process.env.PORT;

app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use(express.urlencoded({ extended: true }));

app.use(cors())
app.use(routes);




app.listen(port, (req, res)=>{
    console.log('conectado al puerto', port)
})

