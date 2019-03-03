import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    marginTop: "20px",
    minWidth: "500px",
    marginBottom: "40px"
  },
  typo: {
    color: 'purple'
  }
});

function Placard(props) {
  const { classes, name, decks } = props;

  return (
    <div>
      <Paper className={classes.root} elevation={1}>
        <Typography variant="h4" component="h3">
          {name}
        </Typography>
        <Typography variant="h5" component="h3">
          decks: {decks.length}
        </Typography>
      </Paper>
    </div>
  );
}

Placard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Placard);
