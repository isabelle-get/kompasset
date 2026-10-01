const express = require("express")
const app = express()

app.set("view engine", "ejs")

app.use(express.static("public"));


app.get("/", (req, res) => {
    res.render("index")
})

app.get("/kontakt", (req, res) =>{
    res.render("kontakt")
})

app.get("/resusjer", (req, res) =>{
    res.render("resusjer")
})

app.get("/stress", (req, res) =>{
    res.render("stress")
})

app.get("/sovn", (req, res) =>{
    res.render("sovn")
})

app.get("/fremtid", (req, res) =>{
    res.render("fremtid")
})

app.get("/familie", (req, res) =>{
    res.render("familie")
})

app.get("/alene", (req, res) =>{
    res.render("alene")
})


app.listen(4001,() => {
    console.log("http://localhost:4001")
});