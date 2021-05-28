import React, { useState } from 'react';
import Toast from 'react-bootstrap/Toast';

import GeneralTemplate from '../../components/templates/GeneralTemplate';
import LoginForm from '../../components/organisms/LoginForm';

import apiService from '../../services/api.services';

const Login = (props) => {
  const [show, setShow] = useState(false);

  const handleLoginUser = (values) => {
    try {
      const token = apiService.loginUser(values);
      localStorage.setItem('token', token);
      props.history.push('/projects');
    } catch (error) {
      if (error.response.data.message === 'Invalid credentials') {
        setShow(true);
      }
    }
  };
  return (
    <GeneralTemplate>
      <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
        <Toast.Header>
          <strong className="mr-auto">
            Erro ao tentar fazer login na aplicação.
          </strong>
        </Toast.Header>
        <Toast.Body>
          Credenciais inválidas. Por favor, verifique e tente novamente.
        </Toast.Body>
      </Toast>
      <LoginForm handleLoginUser={handleLoginUser} />
    </GeneralTemplate>
  );
};

export default Login;
