import React from 'react';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import PropTypes from 'prop-types';

const MonthOptions = ({ label, previous, next }) => {
  return (
    <React.Fragment>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'flex-end',
          marginLeft: 'auto'
        }}
      >
        <div
          style={{ display: 'flex', alignItems: 'center', margin: '0 10px' }}
        >
          <Typography
            style={{
              margin: 0,
              textTransform: 'capitalize',
              fontSize: '1.2rem',
              fontWeight: 'bold'
            }}
            gutterBottom
          >
            {label}
          </Typography>
        </div>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <IconButton
            onClick={() => previous('month')}
            style={{ margin: '0 5px' }}
            aria-label="Prev"
          >
            <FiChevronLeft />
          </IconButton>
          <IconButton
            onClick={() => next('month')}
            style={{ margin: '0 5px' }}
            aria-label="Next"
          >
            <FiChevronRight />
          </IconButton>
        </div>
      </div>
    </React.Fragment>
  );
};

MonthOptions.propTypes = {
  label: PropTypes.string.isRequired,
  previous: PropTypes.func.isRequired,
  next: PropTypes.func.isRequired
};

export default MonthOptions;
