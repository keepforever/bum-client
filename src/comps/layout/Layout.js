import React from "react";

import { Container } from './styled';


import Navbar from './Navbar';


export default ({ children }) => {
  return (
    <React.Fragment>
      <Navbar />
      <Container>
        {children}
      </Container>
    </React.Fragment>
  );
};
