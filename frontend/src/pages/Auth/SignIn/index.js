import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Container, SignForm } from '../styles';
import { Button } from '../../../styles/components/Button';

import { signInRequest } from '../../../store/modules/auth/actions';

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault()

    dispatch(signInRequest(email, password));
  }

  return (
    <Container>
      <SignForm onSubmit={handleSubmit}>
        <h1>Bem vindo</h1>
        <span>E-MAIL</span>
        <input
          type="email"
          name="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />

        <span>SENHA</span>
        <input
          type="password"
          name="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />

        <Button size="big" type="submit">
          Entrar
        </Button>
      </SignForm>
    </Container>
  );
}

export default SignIn;
