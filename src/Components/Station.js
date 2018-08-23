import React from 'react';
import PropTypes from 'prop-types';
// Helper Functions to help me do some grammatical checks
import { slots, freeBikes } from '../Utilities';
// USING THE slots, freeBikes FOR CHECKS (GRAMMAR CHECKS)
// THIS COMPONENT IS RENDERING THE STATION AND DISPLAYING THE STATION INFORMATION
const BikeStation = props => {
  const { name, free_bikes, empty_slots, timestamp } = props.station;
  return (
    <div className="stationed">
      <div className="stationName">{name}</div>
      <hr />
      <div className="bikeNumber">
        <span>
          <div className="stationNumber">{free_bikes}</div>
          <div className="stationTitle">{freeBikes(free_bikes)}</div>
        </span>
        <span>
          <div className="stationNumber">{empty_slots}</div>
          <div className="stationTitle">{slots(empty_slots)}</div>
        </span>
      </div>
      <hr />
      <div className="stationTimeStamp">{timestamp}</div>
    </div>
  );
};

BikeStation.protoTypes = {
  name: PropTypes.string,
  free_bikes: PropTypes.string,
  empty_slots: PropTypes.string,
  timestamp: PropTypes.string,
};

export default BikeStation;
