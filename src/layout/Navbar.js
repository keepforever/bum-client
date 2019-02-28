import React from "react";
import { Link } from "react-router-dom";
// material ui
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
// redux
import { connect } from "react-redux";

const styles = {
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
};

const logInLink = (
  <Button color="inherit" component={Link} to="/auth">
    Login
  </Button>
);

const logOutLink = (
  <Button color="inherit" component={Link} to="/logout">
    Logout
  </Button>
);

const Add = (
  <Button color="inherit" component={Link} to="/add">
    Add
  </Button>
)

function ButtonAppBar(props) {
  const { classes, isLoggedIn } = props;
  console.log("isLoggedIn = ", isLoggedIn, "\n");

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            className={classes.menuButton}
            color="inherit"
            aria-label="Menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" className={classes.grow}>
            Bumcheeks
          </Typography>
          {isLoggedIn ? logOutLink : logInLink}
          <Button color="inherit" component={Link} to="/home">
            Home
          </Button>
          <Button color="inherit" component={Link} to="/about">
            About
          </Button>
          {isLoggedIn && Add}
        </Toolbar>
      </AppBar>
    </div>
  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  return {
    isLoggedIn: state.auth.isAuth
  };
};

export default connect(mapStateToProps)(withStyles(styles)(ButtonAppBar));
