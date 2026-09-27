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


app.listen(4001,() => {
    console.log("http://localhost:4001")
});