import React from 'react';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';
// DESTRUCTURING PROPS ON STATELESS COMPONENT INTIATION
const City = props => {
  const {
    id,
    location: { city },
  } = props.item;
  // THIS LINK ADDS THE Id AS (FROM PARAMS CREATED BY REACT ROUTER) A PARAM, TO COMPLETE THE ENDPOINT QUERY STRING
  return (
    <Link to={`/${id}`} style={{ textDecoration: 'none' }}>
      <div className="listItem">{city}</div>
    </Link>
  );
};

// City.propTypes = {
//   id: PropTypes.string,
// };

export default City;
