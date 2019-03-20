import React, { Component } from "react";
import AboutTest from '../comps/AboutTest'

class About extends Component {
  render() {
    return (
      <div>
        <h1>
          Hello About Page
          <a href={"/cat pictures"}>search</a>
        </h1>
        <AboutTest />
      </div>
    );
  }
}

export default About;
