import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center'
  }
}));

const GridOptions = ({ options }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          {options.map(option => {
            return (
              <Button
                style={{ margin: '10px' }}
                key={option.id}
                variant="outlined"
                size="large"
                className={classes.paper}
                index={option.id}
                onClick={option.action}
              >
                {option.title}
              </Button>
            );
          })}
        </Grid>
      </Grid>
    </div>
  );
};

GridOptions.propTypes = {
  options: PropTypes.instanceOf(Object).isRequired
};

export default GridOptions;
