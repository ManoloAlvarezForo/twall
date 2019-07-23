import React, { useState } from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ListItemText from '@material-ui/core/ListItemText';
import PropTypes from 'prop-types';

const UserProfileItem = ({ handleListItemClick, name, selectedItem }) => {
  const [option] = useState({
    name: 'Profile',
    variant: 'profile',
    path: '/profile',
    action: () => {
      console.log('Profile');
    }
  });

  const handleClick = () => {
    handleListItemClick(option);
  };

  return (
    <ListItem
      selected={selectedItem === option.path}
      style={{ paddingLeft: '9px' }}
      button
      onClick={handleClick}
    >
      <ListItemAvatar>
        <Avatar src="">U</Avatar>
      </ListItemAvatar>
      <ListItemText primary={name} />
    </ListItem>
  );
};

UserProfileItem.propTypes = {
  handleListItemClick: PropTypes.func,
  name: PropTypes.string,
  selectedItem: PropTypes.string
};

UserProfileItem.defaultProps = {
  handleListItemClick: () => {},
  name: '',
  selectedItem: ''
};

export default UserProfileItem;
