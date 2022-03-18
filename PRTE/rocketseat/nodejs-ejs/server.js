const express = require('express');
const app = express();

app.set("view engine", "ejs");

app.get("/", function (req, res){
    const items = [
        {
            title: "D",
            message: "esenvolver aplicacoes de forma facil",
        },
        {
            title: "E",
            message: "JS usa javascript p renderizar html",
        },
        {
            title: "M",
            message: "eu Deus que daora",
        },
        {
            title: "A",
            message: "h, que fome",
        },
        {
            title: "I",
            message: "nteressante, em",
        },
        {
            title: "S",
            message: "oco soco bate bate",
        },
    ];
    res.render("pages/index",{
        qualitys: items,
    });
});

app.get("/sobre", function (req, res){
    res.render("pages/about");
});

app.listen(8080);
console.log("Rodando");