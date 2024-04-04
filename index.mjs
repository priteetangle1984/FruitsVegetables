import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
import jsxViewEngine from 'jsx-view-engine';
import methodOverride from 'method-override';
import db from './db/conn.mjs';
import fruitRoutes from './controllers/fruit.mjs';
import vegetableRoutes from './controllers/vegetable.mjs';

// creating express application and other variables
const app = express();
const PORT = process.env.PORT || 5050;

// app.use(express.json());

//-======MIDDLEWARE=====
app.use(express.urlencoded({extended: false}))

app.use(methodOverride('_method'));

//======SET UP VIEW ENGINE======
app.set('view engine', 'jsx');
app.set('views', './views');
app.engine('jsx', jsxViewEngine());



//======ROUTES======

app.use("/fruits", fruitRoutes);

app.get('/', (req, res) => {
    res.send(
        `<div> this is my fruits and vegetables root route <br /><a href='/fruits'>fruits</a><br /><a href='/vegetables'>vegetables</a></div>`
         );
});

app.use("/vegetables", vegetableRoutes);

app.get('/', (req, res) => {
    res.send(
        `<div> this is my fruits and vegetables root route <br /><a href='/fruits'>fruits</a><br /><a href='/vegetables'>vegetables</a></div>`
         /*this line is for both fruit and vegeteble route*/
    );
});

app.listen(PORT, () => {
    console.log(`listening`);
});