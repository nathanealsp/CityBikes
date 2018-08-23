import React, { Component } from 'react';
import City from './City';
import Loading from './Loading';

// THIS IS THE LANDING PAGE
class LandingPage extends Component {
  state = {
    loading: true,
    placeholder: 'Search for bikes in any location around the world',
    cityBikes: [],
  };

  // MAKING THE API CALL USING FETCH
  async componentDidMount() {
    const res = await fetch('https://api.citybik.es/v2/networks');
    const cityBikes = await res.json();
    // RETURN ALL CITIES IN THE US
    const bikesUSA = cityBikes.networks.filter(item => item.location.country === 'US');
    // UPDATING STATE WITH AN ARRAY OF CITIES
    this.setState({
      cityBikes: bikesUSA,
      loading: false,
    });
  }

  render() {
    // DESTRUCTURING STATE, PULLING OUT THE VALUES NEED TO RENDER JSX,
    // BUT ALSO FIRST CHECKING WHETHER THE API RESULTS HAVE RETURNED
    // WE MAP OVER THE cityBikes AND RENDER EACH CITY AS A CLICKABLE BUTTON
    const { cityBikes, loading } = this.state;
    return (
      <div className="app">
        <p>The world's biggest bike depot</p>
        <p>Choose your City </p>
        <div>
          {loading ? (
            <Loading />
          ) : (
            <div className="list">
              {cityBikes.map((item, idx) => <City item={item} key={idx} />)}
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default LandingPage;
