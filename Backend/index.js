const express = require('express');
const connectToDB = require('./db/db');

const app = express();

connectToDB();

app.listen(7777, () => {
    console.log("Server is Running at 7777")
})