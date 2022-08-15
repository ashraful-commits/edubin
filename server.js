const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv");
const path = require("path");
const url = require("url");
const pageRoute = require("./routes/pageRoute");

// confige dotenv 
dotenv.config();

const port = process.env.PORT ||5000;

// init express

const app = express();

// use express 
app.use(express.json())
app.use(express.urlencoded({ extended: false }));
app.use('/public',express.static('public'))
app.use(pageRoute)



app.listen(port, () => {
    console.log(`server running on port ${port}`.bgCyan)
})