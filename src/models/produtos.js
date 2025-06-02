const pool = require('./database')

async function getProdutos(){
    const produtos = await pool. query('SELECT * FROM produtos');

    return produtos.rows
}

module.exports = {
    getProdutos
}