const resolvers = {
  Query: {
    autores: async (_, __, { models }) => models.autores.getAutores(),

    getAutor: async (_, args, { models }) => models.autores.getAutoresByNome(args.nomeAutor),
    
    proposicoes: async (_, __, { models }) => models.proposicoes.getProposicoes(),

    getProposicao: async (_, args, { models }) => models.proposicoes.getProposicoesByDescricao(args.descricaoTipo),
  }
}

export default resolvers;