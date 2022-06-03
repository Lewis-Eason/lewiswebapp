const express = require('express')
const app = express()

const db = require("./models")

app.get('/', (req, res) => {
    res.send("HELLO!!!");
});

db.sequelize.sync().then((req) => {
app.listen(3001, () => {
    console.log("RUNNING APP!!!");
    });
});
