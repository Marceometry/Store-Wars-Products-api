import mongoose from 'mongoose'

const Schema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
})

export default mongoose.model('Product', Schema)