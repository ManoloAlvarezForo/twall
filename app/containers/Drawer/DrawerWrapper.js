import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { withRouter } from 'react-router';

const styles = () => ({
  root: {
    display: 'flex',
    overflow: 'hidden'
  },
  mainContent: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '100vh',
    overflow: 'hidden'
  },
  content: {
    flexGrow: 1,
    backgroundColor: '#555d6f',
    // padding: '0 24px',
    overflow: 'hidden'
  },
  beforeRoot: {
    width: '100%',
    height: '100%',
    overflow: 'hidden'
  }
});

class DrawerWrapper extends React.Component {
  render() {
    const { classes } = this.props;
    const { body: Body } = this.props;

    return (
      <div className={[classes.beforeRoot, 'app-wrapper-web'].join(' ')}>
        <div className={[classes.root, '_3dqpi'].join(' ')}>
          <CssBaseline />
          <div className={classes.mainContent}>
            <main className={classes.content}>
              <Body />
            </main>
          </div>
        </div>
      </div>
    );
  }
}

DrawerWrapper.propTypes = {
  classes: PropTypes.instanceOf(Object).isRequired,
  body: PropTypes.instanceOf(Object)
};

DrawerWrapper.defaultProps = {
  body: {}
};

export default withRouter(
  withStyles(styles, { withTheme: true })(DrawerWrapper)
);
