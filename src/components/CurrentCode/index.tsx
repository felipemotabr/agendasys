import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';

import IconBack from './../../image/arrow_back.png';

const CurrentCode: React.FC = () => {
  return (
    <Container>
      <Link to={'/home'}>
        <img src={IconBack} alt="" width={'24px'} />
      </Link>

      <div>
        Seu código de acesso
        para a consulta de hoje é:
        <button>HP9263</button>
      </div>
    </Container>
  );
}

export default CurrentCode;