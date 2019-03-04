import React, { Component } from "react";

class About extends Component {
  render() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          fontSize: "30px",
          color: "cornsilk"
        }}
      >
        <p>
          What you're viewing is a bare-bones deployment to veryify access to
          the deployed server and that login/authentication is working.
        </p>
        <p>
          If you would like to interact with the content currently available go ahead and login with credentials email = candy, password = candy.  This is a test account I created and have added some dynamic content with.  You can also create your own account and try to add a deck yourself. The input for adding a deck needs to be of a specific format.  
        </p>
        <p>
          The Home page route has two lists, each one of the list items will take you to a page designed specificlly to view the data about the chosen deck.
        </p>
      </div>
    );
  }
}

export default About;
