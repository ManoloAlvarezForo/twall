import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Mutation } from 'react-apollo';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { FiLock, FiMail } from 'react-icons/fi';
import { Typography } from '@material-ui/core';
import { IoIosCube } from 'react-icons/io';
import { APP_NAME_FULL } from '../../constants/constants';
import { LOGIN_MUTATION } from './AuthenticationMutations';
import { AUTH_TOKEN } from '../../constants/communication';

/**
 * Authentication Component that's contains Login.
 *
 * @param {Object} history Json Object with routes history.
 */
const Authentication = ({ history }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  /**
   * Confirms authentication.
   *
   * @param {Object} data Object that contains login.
   */
  const confirm = async data => {
    const { token } = data.login;
    saveUserData(token);
    history.push('/');
  };

  /**
   * Saves the authentication token in the localstorage.
   *
   * @param {String} token Authentication Token
   */
  const saveUserData = token => {
    localStorage.setItem(AUTH_TOKEN, token);
  };

  return (
    <div style={styles.mainContainer}>
      <div className="title-logo" style={{ width: '50%' }}>
        <Typography
          style={styles.brandLabel}
          component="h4"
          variant="h4"
          gutterBottom
        >
          {APP_NAME_FULL}
        </Typography>
        <Typography
          style={styles.secondBrandLabel}
          component="h4"
          variant="h4"
          gutterBottom
        >
          <IoIosCube />
        </Typography>
      </div>
      <div className="auth-container" style={{ height: '100%', width: '50%' }}>
        <div className="auth-form-container">
          <div style={styles.formTitleContainer} className="mv3">
            <Typography
              component="h4"
              style={{ fontWeight: 'bold' }}
              variant="h4"
              gutterBottom
            >
              Bienvenido
            </Typography>
          </div>
          <div
            className="space custom-input"
            style={{
              display: 'flex',
              flexDirection: 'column',
              margin: '20px 0'
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'row' }}>
              <div
                style={{
                  margin: '0 12px',
                  display: 'flex',
                  alignItems: 'center'
                }}
              >
                <FiMail style={{ fontSize: '24px', color: 'gray' }} />
              </div>
              <TextField
                style={{ margin: '10px 0', width: '100%' }}
                value={email}
                onChange={e => setEmail(e.target.value)}
                label="Email"
                variant="outlined"
              />
            </div>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
              <div
                style={{
                  margin: '0 12px',
                  display: 'flex',
                  alignItems: 'center'
                }}
              >
                <FiLock style={{ fontSize: '24px', color: 'gray' }} />
              </div>
              <TextField
                style={{
                  margin: '10px 0',
                  width: '100%',
                  borderRadius: '5px'
                }}
                value={password}
                onChange={e => setPassword(e.target.value)}
                label="Password"
                type="password"
                variant="outlined"
              />
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <Mutation
              mutation={LOGIN_MUTATION}
              variables={{ email, password }}
              onCompleted={data => confirm(data)}
            >
              {mutation => (
                <Button
                  variant="contained"
                  color="secondary"
                  size="large"
                  style={{ marginLeft: 'auto', color: 'white' }}
                  onClick={mutation}
                >
                  LOGIN
                </Button>
              )}
            </Mutation>
          </div>
          <div style={styles.termAndUseContainer}>
            <div style={styles.termAndUseLabel}>
              <Typography variant="caption">
                Term of use. Privacy policy
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  mainContainer: {
    display: 'flex',
    flexDirection: 'row',
    height: '100%',
    justifyContent: 'center'
  },
  brandLabel: {
    fontFamily: 'Pacifico',
    fontSize: '3rem',
    fontWeight: 'normal'
  },
  secondBrandLabel: {
    marginLeft: '15px',
    marginBottom: 0,
    fontSize: '6.5rem',
    fontWeight: 'normal',
    color: '#e91e63'
  },
  formTitleContainer: {
    textAlign: 'center',
    fontSize: '2rem',
    margin: '60px 0'
  },
  termAndUseContainer: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: 'auto'
  },
  termAndUseLabel: {
    marginTop: '30px',
    textAlign: 'center',
    cursor: 'pointer'
  }
};

Authentication.propTypes = {
  history: PropTypes.instanceOf(Object).isRequired
};

export default Authentication;
