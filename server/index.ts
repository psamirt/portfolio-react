const express = require('express');
const app = express();
const path = require('path');
require('dotenv').config();
const { PORT } = process.env;
const cors= require('cors')

app.use(cors())

app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));

app.use(require('./src/routes/index'));

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
