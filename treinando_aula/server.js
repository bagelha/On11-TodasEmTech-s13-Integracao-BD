const express = require("express")
const app = express()

const db = require("./src/data/database")
db.connect()

app.use(express.json())

const filmeRouter = require("./src/routes/filmeRoute")
app.use("/filmes", filmeRouter)




app.listen(3030, ()=>{
    console.log("a porta está funcionando")
})