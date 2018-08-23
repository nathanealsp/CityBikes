import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import LandingPage from './Components/LandingPage';
import StationsList from './Components/StationsList';
// import './App.css';
// THIS COMPONENT IS HANDLING ALL THE ROUTING
// USING PARAMS TO BE ABLE TO PASS AN ID(CITY ID), FOR THE API CALL TO RETURN STATIONS
// WRAPPED THE CITY BIKE AS THAT WHEN ITS CLICKED IT RETURNS HOME
const AppToRender = () => (
  <Router>
    <div className="main">
      <h1>
        <Link to="/" style={{ textDecoration: 'none' }}>
          CITY BIKES <sup>USA</sup>
        </Link>
      </h1>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/:Id" component={StationsList} />
      </Switch>
    </div>
  </Router>
);

export default AppToRender;
