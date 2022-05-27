const Article = require('./model');

module.exports = {
    create: async (req, res) => {
        try {
            const articleCreate = await Article.create( { ...req.body });
            return res.status(201).send(articleCreate);
        } catch (error) {
            console.log(error);
            return res.status(400).send({error: "erro na criação"});
        }
    },

    getAll: async (req, res) => {
        try {
            const articleRead = await Article.find();
            return res.status(200).send(articleRead);
        } catch (error) {
            console.log(error);
            return res.status(400).send({error: "erro na leitura"});
        }
    },

    getOne: async (req, res) => {
        const _id = req.params.id;
        try {
            if(!await article.findById(_id)){
                return res.status(400).send({error: "id não encontrado"});
            }
            const articleReadOne = await article.findById(_id);
            return res.status(200).send(articleReadOne);
        } catch (error) {
            console.log(error);
            return res.status(400).send({error: "erro na leitura de um"});
        }
    },

    update: async (req, res) => {
        const _id = req.params.id;
        const update = req.body;
        try {
            if(!await article.findById(_id)){
                return res.status(400).send({error: "id não encontrado"});
            }
            const articleUpdate = await article.findByIdAndUpdate(_id, update, {new: true});
            return res.status(200).send(articleUpdate);
        } catch (error) {
            console.log(error);
            return res.status(400).send({error: "erro na atualização"});
        }
    },

    delete: async (req, res) => {
        const _id = req.params.id;
        try {
            if(!await article.findById(_id)){
                return res.status(400).send({error: "id não encontrado"});
            }
            await article.findByIdAndDelete(_id);
            return res.status(200).send({ok: "artigo deletado"});
        } catch (error) {
            console.log(error);
            return res.status(400).send({error: "erro ao deletar"});
        }
    },

}