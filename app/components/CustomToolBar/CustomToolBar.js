import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import PropTypes from 'prop-types';

const CustomToolBar = ({ additionalComponent, title }) => {
  return (
    <AppBar position="static" style={{ background: 'none' }}>
      <Toolbar style={{ width: '100%' }}>
        <Typography
          variant="h6"
          style={{ color: 'white', width: '10%' }}
          noWrap
        >
          {title}
        </Typography>
        {additionalComponent}
      </Toolbar>
    </AppBar>
  );
};

CustomToolBar.propTypes = {
  additionalComponent: PropTypes.instanceOf(Object).isRequired,
  title: PropTypes.string.isRequired
};

export default CustomToolBar;
