import Product from '../../models/Product'

export default {
    Query: {
        products: () => Product.find(),
        product: (_, { id }) => Product.findById(id)
    },
    Mutation: {
        addProduct: (_, { data }) => Product.create(data)
    }
}