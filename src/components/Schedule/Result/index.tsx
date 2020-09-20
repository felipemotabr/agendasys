import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Card, Button } from './styles';

import IconOne from './../../../image/icon1.png'

// @ts-ignore
const Result: React.FC = ({ data, local, prof, }) => {
  return (
    <Container>
      <div className={'header'}>
        <h1>Agendamento</h1>
        <p>CONSULTA AGENDADA COM SUCESSO!</p>
      </div>

      <Card>
        <div>
          <div>
            <img src={IconOne} alt={''} />
          </div>
          <div>
            <h1>{data}</h1>
            <p><strong>{local}</strong>
              <span></span>
              <span>{prof}</span>
              <strong>9h30min</strong></p>
          </div>
        </div>
        <Link to={'/home'}>
          <Button>
            IR PARA MENU INICIAL
      </Button>
        </Link>
      </Card>

    </Container>

  );
}

export default Result;