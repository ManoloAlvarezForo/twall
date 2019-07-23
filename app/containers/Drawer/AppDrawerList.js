import React from 'react';
// Icons
import PropTypes from 'prop-types';
import ListItemWithIcon from './ListItemWithIcon';
import { drawerAppIconList, drawerAppOptions } from './DrawerAppListUtil';

const styles = {
  fontSize: {
    fontSize: '22px'
  }
};

const AppDrawerList = ({ handleListItemClick, selectedItem }) => {
  const handleClick = option => {
    handleListItemClick(option);
  };

  return (
    <React.Fragment>
      {drawerAppOptions.map(option => (
        <ListItemWithIcon
          iconStyles={styles.fontSize}
          iconList={drawerAppIconList}
          key={`${option.name}${option.variant}`}
          name={option.name}
          variant={option.variant}
          selectedItem={selectedItem}
          path={option.path}
          handleListItemClick={() => handleClick(option)}
        />
      ))}
    </React.Fragment>
  );
};

AppDrawerList.propTypes = {
  selectedItem: PropTypes.string,
  handleListItemClick: PropTypes.func
};

AppDrawerList.defaultProps = {
  selectedItem: '',
  handleListItemClick: () => {}
};

export default AppDrawerList;
