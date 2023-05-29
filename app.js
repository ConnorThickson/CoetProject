const express = require('express');
require('dotenv').config();
require('./config/dbconnect').connect();

const itemRouter = require('./routes/itemRoutes');
const userRouter = require('./routes/authRoutes');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/',itemRouter);
app.use('/',userRouter);



const PORT = 3000;

app.listen(PORT, () => {
    console.log("We Bongo Mongo on Port: 3000");
});