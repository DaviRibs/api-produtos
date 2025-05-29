const express = require('express')
const app = express()
const port = 6579
const { Pool } = require('pg')

const pool = new Pool({
    user: 'postgres.gyiinakduhztygdywfuv',
    host: 'aws-0-sa-east-1.pooler.supabase.com',
    database: 'postgres',
    password: '94847414',
    port: 5432
})

app.use(express.json())

app.post('/produtos', async (req, res) => {
    const { nome, preco, categoria, imagem_url } = req.body

    if (!nome || !preco || !categoria || !imagem_url) {
        return res.status(400).send('Todos os campos são obrigatórios')
    }
    if (nome.length > 100) {
        return res.status(400).send('Nome pode ter no máximo 100 caracters')
    }

    if (categoria.length > 50) {
        return res.status(400).send('Categoria pode ter no máximo 50 caracters')
    }


    try {
        const produto = await pool.query(`
        INSERT INTO produtos (nome, preco, categoria, image_url)
        VALUES (
        '${nome}',
        ${preco},
        '${categoria}',
        '${imagem_url}'
        )
        RETURNING *
    `)
        res.status(201).send(produto.rows[0])
    } catch (error) {
        console.error(error)
        res.status(500).send('Erro ao cadastrar produto')
    }
})

app.get('/produtos', async (req, res) => {
    try {
        const produtos = await pool.query('SELECT * FROM produtos')

        return res.status(200).send(produtos.rows)
    } catch (error) {
        console.error(error)
        return res.status(500).send('Erro ao buscar produtos')
    }
})


app.listen(port, () => {
    console.log(`O servidor está rodando na porta ${port}`)
})