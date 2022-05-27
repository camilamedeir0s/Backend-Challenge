const express = require('express');
const mongoose = require('mongoose');
const connectDB = require('./database.js');
const cron = require('node-cron');
const dados = require('./articles');
const Article = require('./model');
let contador = 0;

const app = express();
connectDB();

app.use(express.json());

app.get('/', (req, res) => {
    return res.status(200).json('Back-end Challenge 2021 - Space Flight News');
})

app.all('*', require('./routes'));

app.listen(3000, () => {
    console.log('Servidor rodando.');
    cron.schedule('0 9 * * *', async () => {
        await Article.create(dados[contador]);
        for(let i = 0; i>dados.length; i++){
            contador++;
        }
        console.log('running a task everyday at 9AM');
      });
});