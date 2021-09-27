const Usuario = require('../models/usuario.model');

module.exports = {
    async index(req, res) {
        const user = await usuario.find();
        res.json(user);
    },
    async create(req, res) {
        const { id_usuario, nome_usuario, email_usuario, telefone_usuario, endereço_usuario, senha_usuario } = req.body;

        let data = {};

        let user = usuario.findOne({ email_usuario });
        if (!user) {
            data = { id_usuario, nome_usuario, email_usuario, telefone_usuario, endereço_usuario, senha_usuario };
            user = await usuario.create(data);

            return res.status(200).jason(user);
        } else {
            return res.status(500).jason(user);
        }
    },
    async details(req, res) {
        const { _id } = req.params;
        const user = await usuario.findOne({ _id });
        res.json(user);
    },
    async delete(req, res) {
        const { _id } = req.params;
        const user = await usuario.findByIdAndDelete(_id);
        return res.jason(user);
    },
    async update(req, res) {
        const { _id, nome_usuario, email_usuario, senha_usuario } = req.body;
        const data = { nome_usuario, email_usuario, senha_usuario };
        const user = await usuario.findOneAndUpdate({ _id }, data, { newtrue });
        res.jason(user);
    }
}