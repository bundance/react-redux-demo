import React from "react";
import { connect, useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import Box from "@material-ui/core/Box";

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
  spaceBelow: {
    marginTop: 10,
  },
}));

const mapDispatchToProps = { fetchBeer };
const mapStateToProps = (state) => ({
  beersList: state.beers.beersList,
});

function BeerDialog({ beer, onClose, open }) {
  const classes = useStyles();
  return beer ? (
    <Dialog onClose={onClose} open={open}>
      <DialogTitle>{beer.name}</DialogTitle>
      <DialogContent>
        <ImageCard title={beer.name} image={beer.image_url} />

        <Box>
          <Typography variant={"h5"} className={classes.spaceBelow}>
            {beer.tagline}
          </Typography>
          <Typography variant={"h6"} className={classes.spaceBelow}>
            Description
          </Typography>
          <Typography className={classes.spaceBelow}>
            {beer.description}
          </Typography>
          <Typography className={classes.spaceBelow}>
            ABV: {beer.abv}%
          </Typography>
          <Typography variant={"h6"} className={classes.spaceBelow}>
            Food Pairing
          </Typography>
          <ul>
            {beer.food_pairing.map((food) => (
              <li key={food}>{food}</li>
            ))}
          </ul>
        </Box>
      </DialogContent>
    </Dialog>
  ) : null;
}

export function BeerGrid({ beersList, foodType }) {
  const [open, setOpen] = React.useState(false);
  const [selectedBeer, setSelectedBeer] = React.useState();
  const classes = useStyles();
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchBeer(foodType));
  }, [foodType, dispatch]);

  const handleClick = (beer) => {
    setSelectedBeer(beer);
    setOpen(true);
  };

  return (
    <>
      <CardGrid
        cards={beersList}
        renderCard={(card) => (
          <Box onClick={() => handleClick(card)}>
            <Paper
              classes={{
                root: classes.paper,
              }}
            >
              <ImageCard title={card.name} image={card.image_url} />
            </Paper>
            <div className={classes.text}>
              <Typography
                component="p"
                variant="h6"
                className={classes.cardName}
              >
                {card.name}
              </Typography>
              <Typography component="p">{card.abv}%</Typography>
            </div>
          </Box>
        )}
      />
      <BeerDialog
        beer={selectedBeer}
        onClose={() => setOpen(false)}
        open={open}
      />
    </>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(BeerGrid);
