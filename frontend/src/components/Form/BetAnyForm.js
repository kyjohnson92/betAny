import React from 'react';
import { Formik, Form } from 'formik';
import styled from 'styled-components';
import { Button } from '@material-ui/core';
import { BetAnyTextField } from './';

const FormTitle = styled.div`
  font-size: 24px;
  margin-bottom: 5px;
`;

const BetAnySubmitButton = styled(Button)`
  width: 236px;
  height: 60px;
  background-color: #cbef43;
  margin-top: 15px;
  font-size: 18px;
  font-weight: 600;
`;

const BetAnyCenteredForm = styled(Form)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

/**
 *
 * @param {string} title text at top of form
 * @param {string} submitButtonText text for the submit button
 * @param {object} initialValues initial values for the form. should match the # of entries in fields
 * @param {array} fields one entry for each input field to be displayed
 *  { id: 'standard-basic', label: 'Username', type: 'text', name: 'username'}
 * @param {function} validate function used by formik to validate form before submitting
 * @param {function} onSubmit submit function
 *
 * Reusable Formik Form for BetAny. If no fields are passed in, the form will let the caller pass in a
 * render prop, defining the form as they want. But usually we will just want the basic here.
 */
export const BetAnyFormComponent = ({
  title,
  submitButtonText,
  initialValues,
  fields,
  validate,
  onSubmit,
}) => (
  <Formik initialValues={initialValues} validate={validate} onSubmit={onSubmit}>
    {fields.length
      ? ({ isSubmitting }) => (
          <BetAnyCenteredForm>
            <FormTitle>{title}</FormTitle>
            {fields.map((fieldProps) => (
              <BetAnyTextField key={fieldProps.name} {...fieldProps} />
            ))}
            <BetAnySubmitButton type="submit" disabled={isSubmitting}>
              {submitButtonText}
            </BetAnySubmitButton>
          </BetAnyCenteredForm>
        )
      : ''}
  </Formik>
);
