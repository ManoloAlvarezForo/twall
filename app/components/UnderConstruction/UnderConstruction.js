import React from 'react';
import Typography from '@material-ui/core/Typography';

const UnderConstruction = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Typography variant="h3" style={{ color: 'rgba(187, 187, 187, 0.58)' }}>
        Under Construction
      </Typography>
    </div>
  );
};

export default UnderConstruction;
