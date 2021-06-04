const mongoose = require("mongoose")

const connect = ()=> {
    mongoose.connect("mongodb://localhost:27017/filmes", {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(console.log("mongodb conectado")).catch(err => console.err)
}

module.exports = {connect}