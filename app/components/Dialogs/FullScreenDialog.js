import React from 'react';
import PropTypes from 'prop-types';
import Dialog from '@material-ui/core/Dialog';
import Slide from '@material-ui/core/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const FullScreenDialog = ({ open, setOpen, dialogContent: Content }) => {
  return (
    <Dialog
      open={open}
      onClose={() => setOpen(false)}
      TransitionComponent={Transition}
    >
      <Content setOpen={setOpen} />
    </Dialog>
  );
};

FullScreenDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
  dialogContent: PropTypes.instanceOf(Object).isRequired
};

export default FullScreenDialog;
