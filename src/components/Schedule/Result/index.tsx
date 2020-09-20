import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Card, Button } from './styles';

import IconOne from './../../../image/icon1.png'

const Result: React.FC = () => {
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
            <h1>Sex - 11 de Set</h1>
            <p><strong>Clínica Sua Saúde</strong>
              <span>Psicólogo Dra.</span>
              <span>Maria Souza</span>
              <strong>9h30min</strong></p>
          </div>
        </div>
        <Link to={'/'}>
          <Button>
            IR PARA MENU INICIAL
      </Button>
        </Link>
      </Card>

    </Container>

  );
}

export default Result;