import React from 'react';
import styled from 'styled-components';
import Paper from '@material-ui/core/Paper';
import { BetAnyFormComponent } from '../Form';
// import { loginUser } from '../../store/user/userSlice';

const LoginFormContainer = styled(Paper)`
  background-color: #f1f2eb;
`;

export const LoginComponent = () => {
  const initialValues = {
    username: '',
    password: '',
  };

  const validate = (values) => {
    const errors = {};
    if (!values.username) {
      errors.username = 'required';
      // can change regex below. just used a sample one for now
    } else if (!/[A-Z0-9a-z._-]+/i.test(values.username)) {
      errors.username = 'Invalid username';
    }
    return errors;
  };

  const onSubmit = ({ username, password }, { setSubmitting }) => {
    setSubmitting(true);
    console.log(username, password);
    setTimeout(() => {
      setSubmitting(false);
    }, 1000);
  };

  const fields = [
    { id: 'filled-basic', label: 'Username', type: 'text', name: 'username' },
    {
      id: 'filled-basic',
      label: 'Password',
      type: 'password',
      name: 'password',
    },
  ];

  return (
    <LoginFormContainer elevation={2}>
      <BetAnyFormComponent
        initialValues={initialValues}
        validate={validate}
        onSubmit={onSubmit}
        submitButtonText="Log In"
        title="Log in to BetAny"
        fields={fields}
      />
    </LoginFormContainer>
  );
};
