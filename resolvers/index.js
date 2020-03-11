import { merge } from 'lodash';

import autoresResolver from './autores';
import proposicoesResolver from './proposicoes';
import queryResolver from './query';

export default merge(
  autoresResolver,
  proposicoesResolver,
  queryResolver 
);