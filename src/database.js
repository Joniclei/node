const { Sequelize } = require("sequelize");
const { develepment } = require("./config");

/*
CREATE DATABASE exemplo;

 

CREATE TABLE pessoas (

 id INT AUTO_INCREMENT PRIMARY KEY,

 nome VARCHAR(255) NOT NULL,

 email VARCHAR(255) NOT NULL UNIQUE,

 senha VARCHAR(255)

);

 

INSERT INTO pessoas (nome, email, senha)

 VALUES ('João da Silva', 'joao@example.com', 'senha123');
*/

const sequelize = new Sequelize(develepment);
sequelize
  .sync()
  .then(()=>{
    console.log('conectado ao banco')
  })
  .catch((error) => {
    console.log("nao conectou no banco de dador", error);
  });

module.exports = sequelize;
