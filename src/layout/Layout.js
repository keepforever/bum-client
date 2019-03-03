import React from "react";
import Paper from '@material-ui/core/Paper';
import { Container } from './styled';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Navbar from './Navbar';

const styles = theme => ({
  root: {
    marginTop: 20,
    minWidth: "85vw",
    maxWidth: "86vw",
    minHeight: "75vh",
    padding: "40px"
  },
});

function Layout({ children, classes }) {
  return (
    <React.Fragment>
      <Navbar />
      <Container>
      <Paper className={classes.root} elevation={1}>
        {children}
        </Paper>
      </Container>
    </React.Fragment>
  );
};

Layout.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Layout);
