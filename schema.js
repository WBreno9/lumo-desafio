import { gql } from 'apollo-server';

export default gql`
  type Proposicao {
    id: ID!
    descricaoTipo: String!
    ementa: String!
    dataApresentacao: String!
    autores: [Autor]!
  }

  type Autor {
    nomeAutor: String!
    idAutor: ID!
    siglaPartidoAutor: String!
    proposicoes: [Proposicao]!
  }

  type Query {
    autores: [Autor]
    getAutor(nomeAutor: String): Autor

    proposicoes: [Proposicao]
    getProposicao(descricaoTipo: String): [Proposicao]
  }
`;