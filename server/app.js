
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

const PORT = process.env.HOST_PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT} ... `)
});