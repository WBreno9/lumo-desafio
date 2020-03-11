const resolvers = {
  Proposicao: {
    autores: async (proposicao, _, { models }) => models.proposicoes.getProposicaoAutores(proposicao.id)
  },
}

export default resolvers;