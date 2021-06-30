const {Schema, model, Types} = require('mongoose');

const schema = new Schema({
    email: {type: String, required: true, unique: true}, //required:true - обязательное поле; unique:true - у каждого пользователя своя уникальная почта, повторяться не может
    password: {type: String, required: true},
    links: [{ type: Types.ObjectId, ref: 'Link' }]
});

module.exports = model('User', schema)