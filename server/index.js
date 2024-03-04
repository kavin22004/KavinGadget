require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./db");


connection();

app.use(express.json());
app.use(cors());


const products = require('./routes/product');
const auth = require('./routes/auth');

app.use('/api',products);
app.use('/api',auth);





const port = process.env.PORT || 8000;
app.listen(port, console.log(`Listening on port ${port}...`));
