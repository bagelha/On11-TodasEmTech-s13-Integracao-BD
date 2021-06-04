const Filme = require("../models/filme")


// post
const create = async (request, response)=>{
    let filme = new Filme({
        nome: request.body.nome,
        descricao: request.body.descricao,
        tipo: request.body.tipo,
        disponivelEm: request.body.disponivelEm,
        criadoEm: request.body.criadoEm
    })

    try{
        const novoFilme = await filme.save()
        response.status(201).json(novoFilme)
    }catch(err){
        response.status(400).json({message: err.message})
    }
}

// get
const getAll = async (request, response)=>{
    const filme = await Filme.find()
    response.status(200).json(filme)
}

const getById = async (request, response)=>{
    const filme = await Filme.findById(request.params.id)

    if(filme == null){
        return response.status(404).json({ message: "filme não encontrado"})
    }

    response.json(filme)
}

// patch
const update = async (request, response)=>{
    try{
    const filme = await Filme.findById(request.params.id)

    if (filme == null){
        return response.tatus(404).json({ message: "filme não encontrado"})
    }

    if (request.body.nome != null){
        filme.nome = request.body.nome
    }

    if (request.body.autor != null){
        filme.descricao = request.body.descricao
    }

    if (request.body.tipo != null){
        filme.tipo = request.body.tipo
    }

    if (request.body.disponivelEm != null){
        filme.disponivelEm = request.body.disponivelEm
    }

    if (request.body.criadoEm != null){
        filme.criadoEm = request.body.criadoEm
    }

    const filmeAtualizado = await filme.save()
    response.json(filmeAtualizado)
    
    }catch(err){
        response.status(500).json({message:err.message})
    }
}

// delete
const deleteFilme = async (request, response)=>{
    try{
        const filme = await Filme.findById(request.params.id)
        if(filme == null){
            return response.status(404).json({message:"filme não encontrado"})
        }

        await filme.remove()
        response.json({message: "filme deletado"})
    }catch(err){
        return response.status(500).json({message: err.message})
    }
}



module.exports = { 
    create,
    getAll,
    update,
    deleteFilme,
    getById
}