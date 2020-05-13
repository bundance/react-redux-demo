import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "70px",
    backgroundColor: theme.palette.primary.main,
  },
  title: {
    padding: "20px 0",
  },
}));

export default function Header({ title }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography
        variant="h5"
        color="inherit"
        className={classes.title}
        align="center"
      >
        {title}
      </Typography>
    </div>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
};
