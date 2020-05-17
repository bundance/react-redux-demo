import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import Typography from "@material-ui/core/Typography";

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

export function ImageCard({ image, title }) {
  const classes = useStyles();
  const muiCardActionAreaStyles = useMuiCardActionAreaStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea className={muiCardActionAreaStyles.root}>
        {image ? (
          <img
            className={classes.media}
            src={image}
            title={title}
            alt={title}
          />
        ) : (
          <Typography>No Image yet</Typography>
        )}
      </CardActionArea>
    </Card>
  );
}
