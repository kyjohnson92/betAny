import React from 'react';
import { useField } from 'formik';
import styled from 'styled-components';
import { TextField } from '@material-ui/core';

// adding styled to MaterialUI TextField
export const BetAnyInput = styled(TextField)`
  width: 100%;
  &::placeholder {
    opacity: 0.6;
  }
`;

export const BetAnyInputError = styled.div`
  font-size: 0.8em;
  color: red;
`;

// Actual React Component
export const BetAnyTextField = (props) => {
  const [field, meta, helpers] = useField(props);
  return (
    <>
      <BetAnyInput {...field} {...props} />
      {meta.touched && meta.error ? (
        <BetAnyInputError>{meta.error}</BetAnyInputError>
      ) : null}
    </>
  );
};
