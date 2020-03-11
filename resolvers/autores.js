const resolvers = {
  Autor: {
    proposicoes: async (autor, _, { models }) => models.autores.getAutorProposicoes(autor.idAutor)
  }
}

export default resolvers;