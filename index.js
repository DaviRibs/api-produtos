const express = require('express')
const app = express()
const port = 6579
const produtoDb = []
const usersDb = []

app.use(express.json ())

app.get("/", (req, res) => {
    res.send("Olá Davi!")
})

app.post("/produtos", (req, res) =>  {
    const {nome, preco, categoria} = req.body
    if (!nome || !preco || !categoria){
        return res.status(400).send("nome, preco e categoria são obrigarios")
}

    const produto = {
        nome: nome,
        preco: preco,
        categoria: categoria
    }

    produtoDb.push(produto)
    res.status(201).send(produto)

})

app.get("/produtos", (req, res) => {
    res.send(produtoDb)
})

app.post("/usuarios", (req, res) => {
    const {nome, email, senha} = req.body
    if (!nome || !email || !senha){
        return res.status(400).send("nome, preco e categoria são obrigarios")
}

    usersDb.push({nome, email, senha})
    res.send("Usuario cadastrado com sucesso!")
})

app.listen(port, () => {
    console.log(`O servidor está rodando na porta ${port}`)
})