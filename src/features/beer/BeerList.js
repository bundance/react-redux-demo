import React from "react";
import { connect, useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";

import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import { chunk } from "../../utils/chunk";
import { fetchBeer } from "./beerSlice";

const mapDispatchToProps = { fetchBeer };
const mapStateToProps = (state) => ({
  beers: state.beers,
});

const useStyles = makeStyles({
  root: {
    borderRadius: 20,
    border: "2px solid black",
    minHeight: 153,
  },
  media: {
    maxHeight: 116,
    minHeight: 116,
    margin: "15px 0",
  },
});

const useMuiCardActionAreaStyles = makeStyles({
  root: {
    textAlign: "center",
  },
});

export function MediaCard({ abv, image, name }) {
  const classes = useStyles();
  const muiCardActionAreaStyles = useMuiCardActionAreaStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea className={muiCardActionAreaStyles.root}>
        {image ? (
          <img className={classes.media} src={image} title={name} />
        ) : (
          <Typography>No Image yet</Typography>
        )}
      </CardActionArea>
    </Card>
  );
}

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
  text: {
    textAlign: "center",
    marginTop: 5,
  },
  beerName: {
    lineHeight: 1.3,
  },
  panelContainer: {
    backgroundColor: theme.palette.common.white,
    padding: 20,
  },
}));

export function BeerList({ foodType, beers }) {
  const [fetchData, setFetchData] = React.useState(false);
  const classes = useGridStyles();

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchBeer(foodType));
  }, [foodType, dispatch]);

  const chunkedBeers = chunk(beers.beers, 3);

  return (
    <div className={classes.panelContainer}>
      <Grid container className={classes.root}>
        <Grid item xs={12}>
          <Grid container spacing={4}>
            {chunkedBeers.map((beers3, index) => (
              <Grid
                container
                key={`gridRow-${index}`}
                spacing={4}
                className={classes.rowContainer}
              >
                {beers3.map((beer) => (
                  <Grid
                    key={beer.name}
                    item
                    xs={4}
                    key={`gridItem-${beer.name}`}
                  >
                    <Paper
                      classes={{
                        root: classes.paper,
                      }}
                    >
                      {" "}
                      <MediaCard
                        abv={beer.abv}
                        name={beer.name}
                        image={beer.image_url}
                      />
                    </Paper>
                    <div className={classes.text}>
                      <Typography
                        component="p"
                        variant="h6"
                        className={classes.beerName}
                      >
                        {beer.name}
                      </Typography>
                      <Typography component="p">{beer.abv}%</Typography>
                    </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(BeerList);
