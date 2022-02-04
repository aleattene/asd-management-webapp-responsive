
require('dotenv').config()
const express = require('express');
const app = express();

//const cors = require('cors');

const homepage = require('./routes/index')

//app.use(cors());


app.use(express.json());

app.use("/img", express.static("./static/img"));

app.set('view engine', 'ejs');

app.use('/', homepage);


app.listen(process.env.HOST_PORT, () => {
    console.log(`Server running on port ${process.env.HOST_PORT} ... `)
});