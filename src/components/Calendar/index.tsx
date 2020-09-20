import React from 'react';

import { Container, Card, Icon, Content } from './styles';

import { Link } from 'react-router-dom';

import IconBack from './../../image/arrow_back.png';
import Icon2 from './../../image/icon2.png';
import Icon3 from './../../image/icon3.png';
import Icon4 from './../../image/icon4.png';
import Icon5 from './../../image/icon5.png';
import Wpp from './../../image/wpp.png';

const Calendar: React.FC = () => {
  return (
    <Container>
      <Link to={'/home'}>
        <img src={IconBack} alt="" width={'24px'} />
      </Link>
      <Card>
        <div className={'wrapper'}>
          <Icon>
            <img src={Icon2} alt="" width={'24px'} />
          </Icon>
          <Content>
            <div className={'infos'}>
              <h1>Hoje</h1>
              <p>
                <strong>Clínica Sua Saúde</strong>
                <span>Psicologia</span>
                <span>Dra. Maria Celina Souza</span>
                <strong>15h</strong>
              </p>
            </div>
          </Content>
        </div>
        <div className={'wrapper'}>
          <Icon>
            <img src={Icon3} alt="" width={'24px'} />
          </Icon>
          <Content>
            <div className={'alarm'}>
              <h1>Alarmes</h1>
              <p>
                <strong>12h</strong>
                <span>14h30min</span>
                <button>Adicionar</button>
              </p>
            </div>
          </Content>
        </div>
        <div className={'wrapper'}>
          <Icon>
            <img src={Icon4} alt="" width={'24px'} />
          </Icon>
          <Content>
            <div className={'notification'}>
              <h1>Notificações</h1>
              <p>
                Por sua consulta ser um
                atendimento psicológico,
                esta seção é privada.
              </p>
            </div>
          </Content>
        </div>
        <div className={'wrapper'}>
          <Icon>
            <img src={Icon5} alt="" width={'24px'} />
          </Icon>
          <Content>
            <div className={'wpp'}>
              <h1>Contato</h1>
              <p>
                <a href={'/'}>IR PARA WHATSAPP <img src={Wpp} alt="" width={'18px'} /></a>
              </p>
            </div>
          </Content>
        </div>
      </Card>

    </Container>
  );
}

export default Calendar;