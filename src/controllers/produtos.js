const produtosModel = require('../models/produtos')

async function getProdutos(req, res){
try {
    const produtos = await produtosModel.getProdutos()
    return res.send(produtos)
} catch (error) {
    console.error(error)
     return res.status(500).send('Erro ao buscar produtos')
}

}

module.exports = {
getProdutos
}