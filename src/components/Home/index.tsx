import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Card, Bookmark, ContentBookmark } from './styles';

import IconBookmark from './../../image/bookmark.png';

const Home: React.FC = () => {
  return (
    <Container>
      <h1>Olá, <span>João Silva</span></h1>
      <h2>O que deseja fazer?</h2>

      <Card>
        <div>Código da Consulta Atual</div>
        <div>Acompanhar </div>
      </Card>
      <Card>


        <Link to={'/currentcode'}>
          <div>Agenda</div>
        </Link>

        <Link to={'/schedule'}>
          <div>Agendar Consultas</div>
        </Link>
      </Card>

      <h2>Últimas Consultas</h2>

      <ContentBookmark>
        <Bookmark>
          <div className={'icon'}><img src={IconBookmark} alt={''} /></div>
          <div className={'content'}>
            <h1>16 de Setembro de 2020</h1>
            <h2>Clínica Boa Esperança</h2>
            <h3>Nome do profissional</h3>
            <p>Você foi realizar um exame de sangue.</p>
          </div>
        </Bookmark>
        <Bookmark>
          <div className={'icon'}><img src={IconBookmark} alt={''} /></div>
          <div className={'content'}>
            <h1>16 de Setembro de 2020</h1>
            <h2>Clínica Boa Esperança</h2>
            <h3>Nome do profissional</h3>
            <p>Você foi realizar um exame de sangue.</p>
          </div>
        </Bookmark>
      </ContentBookmark>

    </Container>
  );
}

export default Home;