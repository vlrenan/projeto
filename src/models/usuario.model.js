const Mongoose = require("mongoose");
const bcrypt = require('bcrypt');
const DataSchema = new Mongoose.Schema({
    nome_usuario: String,
    email_Usuario: String,
    endereço_Usuario: String,
    telefone_Usuario: Number,
    senha_Usuario: String,
}, {
    timestamps: true
});

DataSchema.pre('save', function(next) {
    if (!this.isModified("senha_usuario")) {
        return next();
    }
    this.senha_Usuario = bcrypt.hashSync(this.senha, 10);
    next();
});

DataSchema.pre('findOneAndUpdate', function(next) {
    var password = this.getUpdate().senha_Usuario;
    if (passoword.length < 55) {
        this.getUpdate().senha_Usuario = bcrypt.hashSync(password, 10);
    }
    next();

})

const usuarios = Mongoose.model('Usuarios', DataSchema);
module.exports = usuarios;