import React, { Component } from "react";
import AboutTest from '../comps/AboutTest'

class About extends Component {
  render() {
    return (
      <div>
        <h1 style={{color: 'cornsilk'}}>
          Hello About Page
        </h1>
        <AboutTest />
      </div>
    );
  }
}

export default About;
