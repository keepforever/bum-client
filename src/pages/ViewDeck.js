import React from "react";
import PropTypes from "prop-types";
// material ui
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import { Row } from "../styled/viewDeck";
import Card from "../comps/Card";

const styles = theme => ({
  typo: {
    margin: "40px 0",
    fontSize: 50
  },
  para: {
    fontSize: 30
  }
});

function ViewDeck(props) {
  console.log("ViewDeck.js, props` = ", props, "\n");

  const {
    deckName,
    deckDetails,
    deckList,
    score,
    author: { name }
  } = props.location.state;

  const { classes } = props;

  const cardNames = Object.keys(deckList);

  console.log("cardNames = ", cardNames, "\n");

  return (
    <div>
      <Typography className={classes.typo}>
        {`"${deckName}" by ${name}`}
      </Typography>
      <Typography className={classes.typo}>{`Score: ${score}`}</Typography>
      <div
        style={{ border: "2px solid white", padding: 15, margin: "40px 0px" }}
      >
        <Typography className={classes.para}>{`${deckDetails}`}</Typography>
      </div>

      <Row>
        {cardNames.map(c => {
          if(deckList[c].isSplitCard) {
            const firstHalf = Object.keys(deckList[c])[2];
            console.log('firstHalf = ', firstHalf, '\n' )
            return <Card
                      key={deckList[c][firstHalf].name}
                      {...deckList[c][firstHalf]}
                      quantity={deckList[c].quantity}
                    />;
          } else {
            return <Card key={deckList[c].name} {...deckList[c]} />;
          }
        })}
      </Row>
    </div>
  );
}

ViewDeck.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ViewDeck);
