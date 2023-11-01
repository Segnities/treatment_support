require('dotenv').config();

const express = require("express");
const cors = require("cors");
const {connectToDatabase} = require("./src/db/index");

const app = express();
const mainRouter = require('./src/router/index');


app.use(express.json());
app.use(cors());
app.use('/api', mainRouter);
const start = async () => {
    try {
        await connectToDatabase();
        app.listen(process.env.PORT, ()=> {
            console.log(`App running at port ${process.env.PORT}`);
        });
    } catch (e) {
        console.log(e)
    }
}

start();