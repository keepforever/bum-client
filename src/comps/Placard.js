import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const styles = theme => ({
  paper: {
    marginTop: "20px",
    minWidth: "500px",
    marginBottom: "40px"
  },
  typoOne: {
    marginTop: "20px",
    marginLeft: "20px"
  },
  typoTwo: {
    marginLeft: "20px"
  }
});

function Placard(props) {
  const { classes, name, decks } = props;

  return (
    <div>
      <Paper className={classes.paper} elevation={1}>
        <Typography className={classes.typoOne} variant="h4" component="h3">
          Welcome, {name}
        </Typography>
        <Typography className={classes.typoTwo} variant="h5" component="h3">
          # decks contributed: {decks.length}
        </Typography>
      </Paper>
    </div>
  );
}

Placard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Placard);
