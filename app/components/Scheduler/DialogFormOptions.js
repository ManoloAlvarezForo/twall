import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import { FiX } from 'react-icons/fi';
import PropTypes from 'prop-types';
import GridOptions from './GridOptions';

const styles = theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(2)
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500]
  }
});

const DialogTitle = withStyles(styles)(props => {
  const { children, classes, onClose } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="Close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <FiX />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const FormDialog = ({ title, open, setOpenDialog, options }) => {
  return (
    <Dialog
      open={open}
      onClose={() => setOpenDialog(false)}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle
        id="customized-dialog-title"
        onClose={() => setOpenDialog(false)}
      >
        {title}
      </DialogTitle>
      <DialogContent dividers>
        <GridOptions options={options} />
      </DialogContent>
    </Dialog>
  );
};

FormDialog.propTypes = {
  title: PropTypes.string.isRequired,
  open: PropTypes.bool.isRequired,
  setOpenDialog: PropTypes.func.isRequired,
  options: PropTypes.instanceOf(Object).isRequired
};

export default FormDialog;
