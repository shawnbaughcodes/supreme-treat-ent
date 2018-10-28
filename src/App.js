import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import NavBar from './components/NavBar';
import HomeScreen from './screens/HomeScreen';
import CardinalScreen from './screens/CardinalScreen';
import StayCreativeScreen from './screens/StayCreativeScreen';
import ContactScreen from './screens/ContactScreen';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="supreme-treat-app-wrapper">
          <NavBar linkIsActive />
          <Route path="/" exact component={HomeScreen} />
          <Route path="/cardinal-bulletin" exact component={CardinalScreen} />
          <Route
            path="/stay-creative-records"
            exact
            component={StayCreativeScreen}
          />
          <Route path="/contact" exact component={ContactScreen} />
        </div>
      </Router>
    );
  }
}

export default App;
