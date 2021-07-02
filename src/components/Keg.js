import React from 'react';
import PropTypes from 'prop-types';

function Keg(props) {
  return (
    <React.Fragment>
      <h2>{props.name}</h2>
      <hr/>
      <h3>{props.Brand} | Price: {props.price} | ABV: {props.alcoholContent}</h3>
    </React.Fragment>
  )
}

Keg.propTypes = {
  name: PropTypes.string,
  brand: PropTypes.string,
  price: PropTypes.string, 
  alcoholContent: PropTypes.string
};

export default Keg;