import React from 'react';
import { Formik, Form } from 'formik';
import styled from 'styled-components';
import { Button } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { BetAnyTextField } from './';

const BetAnySubmitButton = styled(Button)`
  width: 100%;
`;

const FormWrapper = styled(Form)`
  margin: 1rem 0;
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
          <FormWrapper>
            <Grid container justify={'center'}>
              <Grid item lg={12} md={12} sm={12} xs={12} container spacing={4}>
                <Grid item lg={12} md={12} sm={12} xs={12}>
                  <Typography variant={'h5'} component={'h2'} align={'center'}>
                    {title}
                  </Typography>
                </Grid>
                {fields.map((fieldProps) => (
                  <Grid item lg={12} md={12} sm={12} xs={12}>
                    <BetAnyTextField key={fieldProps.name} {...fieldProps} />
                  </Grid>
                ))}
                <Grid item lg={12} md={12} sm={12} xs={12}>
                  <BetAnySubmitButton
                    variant={'contained'}
                    color={'primary'}
                    type="submit"
                    disabled={isSubmitting}
                  >
                    {submitButtonText}
                  </BetAnySubmitButton>
                </Grid>
              </Grid>
            </Grid>
          </FormWrapper>
        )
      : ''}
  </Formik>
);
