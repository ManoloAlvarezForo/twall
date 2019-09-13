import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FiX } from 'react-icons/fi';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
// import Dialog from '@material-ui/core/Dialog';
// import ListItemText from '@material-ui/core/ListItemText';
// import ListItem from '@material-ui/core/ListItem';
// import List from '@material-ui/core/List';
// import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
// import Slide from '@material-ui/core/Slide';
import { TextField } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  appBar: {
    position: 'relative'
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1
  }
}));
const PreachingContent = ({ setOpen }) => {
  const classes = useStyles();
  const [name, setName] = useState('input example');

  const onSaveHandle = () => {
    console.log('Save');
    setOpen(false);
  };

  return (
    <React.Fragment>
      <AppBar className={classes.appBar}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            onClick={() => setOpen(false)}
            aria-label="Close"
          >
            <FiX />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Salida a la Predicacion
          </Typography>
          <Button color="inherit" onClick={onSaveHandle}>
            Guardar
          </Button>
        </Toolbar>
      </AppBar>
      <form style={{ padding: '20px' }} noValidate autoComplete="off">
        <TextField
          id="outlined-name"
          label="Name"
          className={classes.textField}
          value={name}
          onChange={e => setName(e.target.value)}
          margin="normal"
          variant="outlined"
        />
      </form>
    </React.Fragment>
  );
};

PreachingContent.propTypes = {
  setOpen: PropTypes.func.isRequired
};

export default PreachingContent;
