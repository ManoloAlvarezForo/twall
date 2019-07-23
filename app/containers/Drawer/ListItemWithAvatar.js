import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ListItemText from '@material-ui/core/ListItemText';
import PropTypes from 'prop-types';

const ListItemWithAvatar = ({ name, handleListItemClick }) => {
  return (
    <ListItem
      style={{ paddingLeft: '9px' }}
      button
      onClick={handleListItemClick}
    >
      <ListItemAvatar>
        <Avatar src="">u</Avatar>
      </ListItemAvatar>
      <ListItemText primary={name} />
    </ListItem>
  );
};

ListItemWithAvatar.propTypes = {
  name: PropTypes.string.isRequired,
  handleListItemClick: PropTypes.func.isRequired
};

export default ListItemWithAvatar;
