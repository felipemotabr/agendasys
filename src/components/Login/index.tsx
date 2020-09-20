import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Button, Divisor, Social } from './styles';

import Logo from './../../image/logo.png'

const Login: React.FC = () => {
  return (
    <Container>
      <img src={Logo} alt={''} />
      <form action="" method="post">
        <input placeholder={'E-mail/login'} />
        <input placeholder={'Senha'} />

        <Link to={'/home'}>
          <Button>
            Entrar
        </Button>
        </Link>

        <Divisor>

          <span>Ou</span>

          <div></div>
        </Divisor>

        <Social>
          <a href={'/'}>Google</a>
          <a href={'/'}>Facebook</a>
        </Social>
        <p>Não possui uma conta? <span>Cadastre-se.</span></p>
      </form></Container>

  );
}

export default Login;