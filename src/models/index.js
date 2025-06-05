const sequelize = require('../config/database')
const Users = require('./users')

sequelize.sync({alter: true})

.then(() => console.log('Tabelas sincronizadas com sucesso'))
.catch((error) => console.log(
    'Erro ao sincronizar tabelas', error
))

module.exports = {
    Users
}
    

