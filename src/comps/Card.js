import React from "react";
import FadeIn from "react-lazyload-fadein";
import PropTypes from "prop-types";
// material ui
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
// styled-comps
import { MyCard } from '../styled/card';
// utils
import utils from '../utils'

const styles = theme => ({
  typo: {
    margin: "40px 0",
    fontSize: 20
  },
  para: {
    fontSize: 30
  }
});

function Card(props) {
  const { isBasicLand } = utils;
  // console.log("Card.js, props = ", props, "\n");

  const { imageUrl, name, quantity, classes } = props;

  // if(isSplitCard) {
  //   console.log('Card.js, hello isSplitCard = ', props, '\n' )
  // }

  const showImage = imageUrl || isBasicLand(name)

  return (
    <div style={{ marginRight: "15px" }} key={name}>
      <Typography className={classes.typo}>
        {`"${name}" x ${quantity}`}
      </Typography>
      {showImage ? <FadeIn height={600}>
        {onload => (
          <img
            alt="nope"
            src={imageUrl ? imageUrl : "https://picsum.photos/200/300/?random"}
            onLoad={onload}
            style={{
              height: 352,
              width: 252
            }}
          />
        )}
      </FadeIn> : <MyCard {...props} />}
    </div>
  );
}

Card.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Card);
