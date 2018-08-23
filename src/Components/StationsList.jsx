import React, { Component, Fragment } from 'react';
import BikeStation from './Station';
import Loading from './Loading';
// THIS COMPONENT IS RENDERING THE STATION LIST
// WE MAKE AN API CALL TO A PARTICULAR LOCATION BY
// ATTACHING AN ID PASSED THROUGH PROPS BY THE
// REACT ROUTER - THIS RETURNS ALL THE STATIONS IN THAT CITY
// WE LOOP OVER ALL THE STATIONS AND RENDER THEM BY PASSING PROPS TO THE  STATTION COMPONENT

class StationsList extends Component {
  state = {
    loading: true,
    locationTag: null,
    bikeStations: [],
  };

  async componentDidMount() {
    try {
      const res = await fetch(`https://api.citybik.es/v2/networks/${this.props.match.params.Id}`);
      const cityBikes = await res.json();
      // UPDATE THE STATIONS ARRAY USING THE API RESULTS
      this.setState({
        bikeStations: cityBikes.network.stations,
        locationTag: cityBikes.network.name,
        loading: false,
      });
    } catch (error) {
      // to be determined
    }
  }
  // WE CHECK IF THE RESULTS FROM THE API ARE DONE LOADING THEN PROCEED TO
  // RENDER THE LIST OR LOADING INCASE ITS INCOMPLETE
  render() {
    const { bikeStations, loading, locationTag } = this.state;
    return (
      <Fragment>
        {loading ? (
          <Loading />
        ) : (
          <div>
            <h1>
              {locationTag}
              <i className="fa fa-bicycle" />
            </h1>
            <div className="listStation">
              {bikeStations.map((station, idx) => <BikeStation key={idx} station={station} />)}
            </div>
          </div>
        )}
      </Fragment>
    );
  }
}
export default StationsList;
