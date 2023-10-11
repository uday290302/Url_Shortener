const express = require("express");
const  connectDB= require("./connect");
// const urlRoute = require("./routes/url");
const urlRoute = require("./routes/route.js");

const URL = require("./models/url");
const  dotenv = require('dotenv')
const path = require('path')
const app = express();
dotenv.config(path.join(__dirname,'.env'))
connectDB()

app.set("view engine", "ejs")



app.use(express.urlencoded({ extended: false }))

app.use(express.json());
app.use('/', require('./routes/route.js'))




app.listen(process.env.PORT, () => console.log(`Server Started at PORT:${process.env.PORT}`));
