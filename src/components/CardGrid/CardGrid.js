import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import { chunk } from "../../utils/chunk";

const useGridStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    width: "100%",
    borderRadius: 20,
  },
  control: {
    padding: theme.spacing(2),
  },
  rowContainer: {
    margin: 0,
  },
  panelContainer: {
    backgroundColor: theme.palette.common.white,
    padding: 20,
  },
}));

export function CardGrid({ cards, cardsPerRow = 3, renderCard }) {
  const classes = useGridStyles();

  const chunkedCards = chunk(cards, cardsPerRow);

  return (
    <div className={classes.panelContainer}>
      <Grid container className={classes.root}>
        <Grid item xs={12}>
          <Grid container spacing={4}>
            {chunkedCards.map((cards, rowIndex) => (
              <Grid
                container
                key={`gridRow-${rowIndex}`}
                spacing={4}
                className={classes.rowContainer}
              >
                {cards.map((card, cardIndex) => (
                  <Grid
                    key={`cardGridItem-${rowIndex}-${cardIndex}`}
                    item
                    xs={4}
                  >
                    {renderCard(card, cardIndex)}
                  </Grid>
                ))}
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
