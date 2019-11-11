import React from 'react';
import PropTypes from 'prop-types';
// import { makeStyles } from '@material-ui/core/styles';
// import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
// import ListItemText from '@material-ui/core/ListItemText';
// import ListItem from '@material-ui/core/ListItem';
// import List from '@material-ui/core/List';
// import Divider from '@material-ui/core/Divider';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import IconButton from '@material-ui/core/IconButton';
// import Typography from '@material-ui/core/Typography';
import Slide from '@material-ui/core/Slide';

// const useStyles = makeStyles(theme => ({
//   appBar: {
//     position: 'relative'
//   },
//   title: {
//     marginLeft: theme.spacing(2),
//     flex: 1
//   }
// }));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const FullScreenDialog = ({ open, setOpen, dialogContent: Content }) => {
  // const classes = useStyles();

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
  dialogContent: PropTypes.isInstance(Object).isRequired
};

export default FullScreenDialog;
