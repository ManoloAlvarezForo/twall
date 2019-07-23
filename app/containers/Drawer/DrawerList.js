import React, { useState } from 'react';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import { withRouter } from 'react-router';
import Divider from '@material-ui/core/Divider';
import UserProfileItem from './UserProfileItem';
import AppDrawerList from './AppDrawerList';
import UserDrawerList from './UserDrawerList';

/**
 * Drawer List wrapper component to render different options in the Drawer.
 *
 * @param {String} pathname Url pathname.
 * @param {Object} history Object with location for the url pathname.
 * @param {Function} changeTitle function to change title.
 */
const DrawerList = ({
  history: {
    location: { pathname }
  },
  history,
  changeTitle
}) => {
  const [selectedItem, setSelectedItem] = useState(pathname);

  /**
   * Handles the event to call an action method or got to a path.
   *
   * @param {Object} option With options to action or path.
   */
  const handleListItemClick = option => {
    const { action } = option;
    if (action) {
      action();
    } else {
      const { path } = option;
      setSelectedItem(path);
      history.push(option.path);
      changeTitle(option.name);
    }
  };

  return (
    <List>
      <UserProfileItem
        name="Manolo Alvarez"
        selectedItem={selectedItem}
        handleListItemClick={handleListItemClick}
      />
      <Divider />
      <AppDrawerList
        selectedItem={selectedItem}
        handleListItemClick={handleListItemClick}
      />
      <Divider />
      <UserDrawerList
        selectedItem={selectedItem}
        handleListItemClick={handleListItemClick}
      />
    </List>
  );
};

DrawerList.propTypes = {
  history: PropTypes.instanceOf(Object).isRequired,
  changeTitle: PropTypes.func.isRequired
};

export default withRouter(DrawerList);
