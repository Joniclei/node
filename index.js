const express = require('express')
const router = require('./src/routes/exercicio.js')
//const sequelize = require("./src/database")
//const {findAll} = require("sequelize");
const Pessoa = require('./src/models/exercicio.js')


const app = express()
const port = 3000


new Pessoa()

// Find all users


/*const users = await User.findAll();
console.log(users.every(user => user instanceof User)); // true
console.log("All users:", JSON.stringify(users, null, 2));
*/

app.use(express.json())
app.use(router)



app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})
