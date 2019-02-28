import React from "react";
import { makeStyles } from "@material-ui/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%"
  },
  heading: {
    fontSize: 15,
    flexBasis: "33.33%",
    flexShrink: 0
  },
  secondaryHeading: {
    fontSize: 15,
    color: "black"
  }
}));

function ControlledExpansionPanels(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(null);

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const { decks } = props;
  console.log('decks.length = ', decks.length, '\n' )
  if(decks){
    const tryParse = decks[0].deckList;
    console.log('JSON.parse(tryParse) = ', JSON.parse(tryParse), '\n' )
  }

  return (
    <div className={classes.root}>
      {decks.map(d => {
        const { id, deckList, deckName, score } = d;
        console.log('score = ', score, '\n' )
        return (
          <div key={id}>
          <ExpansionPanel
            expanded={expanded === id}
            onChange={handleChange(id)}
          >
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <Typography className={classes.heading}>{deckName}</Typography>
              <Typography className={classes.secondaryHeading}>
                score: {score}
              </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography>
                {deckList}
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          </div>
        );
      })}
    </div>
  );
}

export default ControlledExpansionPanels;
