const Item = require('./Item');

module.exports = {
    Query: {
        itens: () => Item.find(),
        item: (_, { id }) => Item.findById(id),
    },

    Mutation: {
        createItem: (_, { question, answers, correctAnswerId }) => Item.create({ question, answers, correctAnswerId }),
        deleteItem: (_, { id }) => Item.findByIdAndRemove(id),
        updateItem: (_, { id, question, answers, correctAnswerId }) => Item.findByIdAndUpdate( id, { question, answers, correctAnswerId })
    },
};