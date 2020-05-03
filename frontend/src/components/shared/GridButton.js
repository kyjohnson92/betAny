import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

const GridButton = ({ text, onClick }) => (
  <Grid item>
    <Button variant="contained" color="primary" fullWidth onClick={onClick}>
      {text}
    </Button>
  </Grid>
);

GridButton.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default GridButton;
