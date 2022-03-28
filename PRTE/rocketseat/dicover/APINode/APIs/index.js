const express = require('express')
const axios = require('axios'); //importacao do axios para aula (8)
const app = express()

app.listen('3000')

// (1) Ensinando sobre rota GET =============
// app.route('/').get((req, res) => res.send("hello"))
// app.route('/sobre').get((req, res) => res.send("Página Sobre"))

// (2) Ensinando sobre rota POST============

//criando middleware (dizendo que é um formato json)
// app.use(express.json())

// app.route('/').post((req, res) => res.send(req.body))

// (3) Ensinando sobre rota PUT=============

// app.use(express.json())

// let author = "Jaqueline"

// app.route('/').get((req, res)=>res.send(author))

// app.route('/').put((req, res) => {
//     author = req.body.author
//     res.send(author)
// })


// (4) Ensinando Sobre rota Delete

// let author = "jaqueline"

// app.route('/:identificador').delete((req, res) => {
//     author = ""
//     res.send(req.params.identificador)

// })


// (5) Ensinando sobre paramestros enviados pelo body
// //middleware
// app.use(express.json())

// app.route('/').post((req, res) => {
//     res.send(req.body.livros[1])
// })

// (6) Pegar parametros pela rota - ROUTE PARAMS

// app.route('/').get((req, res) => res.send("oi"))
// app.route('/:variavel').get((req, res) => res.send(req.params.variavel))
// app.route('/:identidade/:nome').get((req, res) => res.send(req.params.nome))

// (7) Passar paramestros pelo query params

// app.route('/').get((req, res) => res.send(req.query.nome))
// app.route('/about/user').get((req, res) => res.send(req.query))

// (8) Consumindo api do github com axios (puxando dados do github ex:imagem)

    //instalar o axios com comando terminal: npm i axios

// app.route('/').get((req, res) => {
//     axios.get('https://api.github.com/users/Salminunes').then(result => res.send(`<img src="${result.data.avatar_url}"/>`)).catch(error => console.log(error))
// })
