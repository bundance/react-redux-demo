import React from "react";
import { connect, useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";

import { ImageCard } from "../../components/CardGrid/ImageCard";
import { CardGrid } from "../../components/CardGrid/CardGrid";
import { fetchBeer } from "./beerSlice";

const useStyles = makeStyles((theme) => ({
  paper: {
    width: "100%",
    borderRadius: 20,
  },
  text: {
    textAlign: "center",
    marginTop: 5,
  },
  cardName: {
    lineHeight: 1.3,
  },
}));

const mapDispatchToProps = { fetchBeer };
const mapStateToProps = (state) => ({
  beerList: state.beers.beers,
});

export function BeerGrid({ beerList, foodType }) {
  const classes = useStyles();
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchBeer(foodType));
  }, [foodType, dispatch]);

  return (
    <CardGrid
      cards={beerList}
      renderCard={(card) => (
        <>
          <Paper
            classes={{
              root: classes.paper,
            }}
          >
            <ImageCard title={card.name} image={card.image_url} />
          </Paper>
          <div className={classes.text}>
            <Typography component="p" variant="h6" className={classes.cardName}>
              {card.name}
            </Typography>
            <Typography component="p">{card.abv}%</Typography>
          </div>
        </>
      )}
    />
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(BeerGrid);
