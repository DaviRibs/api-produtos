const {Produtos} = require('../models')

async function getProdutos(req, res){
try {
    const produtos = await Produtos.findAll()
    return res.send(produtos)
} catch (error) {
    console.error(error)
     return res.status(500).send('Erro ao buscar produtos')
}

}

async function createProduto(req, res){
    try {
        const produtos = await Produtos.create(req.body)
        return res.status(201).send(produtos)
    } catch (error) {
        console.error(error)
        return res.status(500).send('Erro ao criar produto')
    }
}

async function deleteProduto(req, res){
    const { id } =req.params;
    try {
        await Produtos.destroy()

        return res.status(202).send('Produto deletado com sucesso')

    } catch (error) {
        console.error(error)
        return res.status(500).send('Erro ao deletar produto')
        
    }
}

module.exports = {
getProdutos,
createProduto,
deleteProduto
}