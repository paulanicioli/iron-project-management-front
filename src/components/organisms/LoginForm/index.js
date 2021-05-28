import React from 'react';
import * as Yup from 'yup';
import { useFormik } from 'formik';

import Form from 'react-bootstrap/Form';
import LabeledInput from '../../molecules/LabeledInput';
import Button from '../../atoms/Button';

const formSchema = Yup.object().shape({
  email: Yup.string()
    .trim()
    .email('Formato inválido de email')
    .required('Campo obrigatório'),
  password: Yup.string()
    .trim()
    .min(6, 'Senha precisa ter pelo menos 6 caracteres')
    .max(100, 'Senha pode ter no máximo 100 caracteres'),
});

const LoginForm = ({ handleLoginUser }) => {
  const formik = useFormik({
    initialValues: { email: '', password: '' },
    onSubmit: (values) => {
      handleLoginUser(values);
    },
    validationSchema: formSchema,
  });
  return (
    <div>
      <Form onSubmit={formik.handleSubmit}>
        <LabeledInput
          controlId="LoginFormEmail"
          label="User Email"
          type="text"
          name="email"
          value={formik.values.email}
          handleChange={formik.handleChange}
          handleBlur={formik.handleBlur}
          error={formik.errors.email}
          touched={formik.touched.email}
        />
        <LabeledInput
          controlId="LoginFormPassword"
          label="User Password"
          type="password"
          name="password"
          value={formik.values.password}
          handleChange={formik.handleChange}
          handleBlur={formik.handleBlur}
          error={formik.errors.password}
          touched={formik.touched.password}
        />
        <Button variant="primary" type="submit" size="lg">
          Entrar
        </Button>
      </Form>
    </div>
  );
};

export default LoginForm;
