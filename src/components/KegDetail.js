import React from 'react'
import PropTypes from 'prop-types';

function KegDetail(props) {
  const { keg, onClickDelete } = props

  return (
    <React.Fragment>
      <h1>Keg Details</h1>
      <h3>Name: {keg.name} | Brand: {keg.brand} | Price: {keg.price} | ABV: {keg.alcoholContent} </h3>
      <hr/>
      <button onClick = { props.onClickEdit}>Edit Keg Details</button>
      <button onClick = {() => onClickDelete(keg.id)}>Remove Keg</button>
    </React.Fragment>
  )
}

KegDetail.propTypes = {
  keg: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
}

export default KegDetail;