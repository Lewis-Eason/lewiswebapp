const express = require('express')
const app = express()

const { User } = require("./models")
const db = require("./models")

app.get('/validateLogin', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    User.findAll({
        where: {
            username: username,
            password: password,
        }
    }).catch(() => {
    throw CouldNotFindEntityForUsernameAndPassword("Invalid login!");
    });
});

db.sequelize.sync().then(() => {
app.listen(3001, () => {
    console.log("RUNNING APP!!!");
    });
});
