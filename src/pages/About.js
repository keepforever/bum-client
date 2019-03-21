import React, { Component } from "react";
import AboutTest from '../comps/AboutTest'
import PaginatedDecks from '../comps/PaginatedDecks'

class About extends Component {
  render() {
    return (
      <div>
        <h1 style={{color: 'cornsilk'}}>
          Hello About Page
        </h1>
        <AboutTest />
        <br/>
        <br/>
        <PaginatedDecks />
      </div>
    );
  }
}

export default About;
