import P from 'prop-types';
import { GridContent } from '../../components/GridContent';

export const PageNotFound = () => {
  return (
    <GridContent
      title="Error 404"
      html='<p>Pagina não encontrada. <a href="/">Clique aqui para voltar</a></p>'
    />
  );
};
