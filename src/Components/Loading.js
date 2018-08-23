import React from 'react';
// THIS IS THE LOADING COMPONENT IT ONLY SHOWS A SPINNING BICYCLE,
// AWAITING THE API RESULT
const Loading = () => (
  <div className="spinner">
    <h1>
      <i className="fa fa-bicycle fa-pulse fa-3x fa-fw" />
    </h1>
    <p className="">Loading Please wait...</p>
  </div>
);

export default Loading;
