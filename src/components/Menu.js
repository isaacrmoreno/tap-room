import React from 'react';
import Keg from './Keg';
import PropTypes from 'prop-types';

function Menu(props) {
  return (
    <React.Fragment>
      <hr/>
      {props.menu.map((keg) =>
      <Keg
      name={keg.name}
      brand={keg.brand}
      price={keg.price}
      alcoholContent={keg.alcoholContent}
      />
      )}
    </React.Fragment>
  );
} 

Menu.propTypes = {
  menu: PropTypes.array
};

export default Menu;