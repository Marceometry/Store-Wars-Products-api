import mongoose from 'mongoose'

const Schema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    
    description: {
        type: String,
        required: true
    },

    price: {
        type: Number,
        required: true
    },

    images: {
        type: [String],
        required: true
    },

    tags: {
        type: [String],
        required: true
    },

    categories: {
        type: [String],
        required: true
    }
})

export default mongoose.model('Product', Schema)