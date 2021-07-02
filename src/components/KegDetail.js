import React from 'react'
import PropTypes from 'prop-types';

function kegDetail(props) {
  const { keg, onClickingDelete } = props

  return (
    <React.Fragment>
      <h1>Keg Detail</h1>
      <h3>{props.name} | Brand: {props.brand} | Price: ABV: </h3>

      <button onClick = { props.onClickingEdit}>Edit Keg Details</button>
      <button onClick = {() => onClickingDelete(keg.id)}>Remove Keg</button>
    </React.Fragment>
  )
}

kegDetail.propTypes = {
  keg: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
}

export default kegDetail;