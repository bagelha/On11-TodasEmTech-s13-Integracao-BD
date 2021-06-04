const mongoose = require ("mongoose")

const filmeSchema = new mongoose.Schema({
    // nome
    nome:{
        type: String,
        required: true
    },

    // descrição
    descricao:{
        type: String,
        required: true
    },

    // tipo
    tipo:{
        type: String,
        required:true
    },

    // disponivel em
    disponivelEm:{
        type: String,
        required: true
    },

    // criado em
    criadoEm:{
        type: Date,
        required: true,
        default: new Date
    }

})

module.exports = mongoose.model("filme", filmeSchema)