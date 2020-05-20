const itens = [
    { id: 1, question: 'qual meu nome?', answers: ['daniel', 'bulu', 'fifa'], correctAnswerId: 1 },
    { id: 2, question: 'qual o nome dela?', answers: ['mafe', 'fe', 'bolinha'], correctAnswerId: 2 }
]

module.exports = {
    Query: {
        itens: () => itens,
        item: () => itens[0],
    },

    Mutation: {
        createItem: () => itens[0],
    },
};