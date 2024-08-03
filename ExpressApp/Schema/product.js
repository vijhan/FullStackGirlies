const mongoose = require('mongoose')
const product_schema = new mongoose.Schema({
    id: {type: Number,
    required: true,},
    name: {type: String,
    required: true,},
    category: {type: String,
        required: true,},
    image: {type: String,
        required: true,},
    new_price: {type: Number,
        required: true,},
    old_price: {type: Number,
        required: true,},
})

const product_model = mongoose.model('product',product_schema)

module.exports = product_model