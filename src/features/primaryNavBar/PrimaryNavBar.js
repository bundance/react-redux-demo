import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import LocalCafe from "@material-ui/icons/LocalCafe";
import KnifeFork from "@material-ui/icons/Restaurant";
import Settings from "@material-ui/icons/Settings";
import Search from "@material-ui/icons/Search";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.white,
    "&$selected": {
      backgroundColor: theme.palette.secondary.dark,
      borderTopLeftRadius: "18px",
      borderTopRightRadius: "18px",
      backgroundClip: "padding-box",
    },
  },
  selected: {},
}));

export default function PrimaryNavBar() {
  const [value, setValue] = React.useState(0);
  const classes = useStyles();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper square className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="fullWidth"
        TabIndicatorProps={{ style: { backgroundColor: "#000000" } }}
        textColor="secondary"
        aria-label="Main Navigation"
      >
        <Tab classes={{ ...classes }} icon={<LocalCafe />} aria-label="drink" />
        <Tab classes={{ ...classes }} icon={<KnifeFork />} aria-label="food" />
        <Tab classes={{ ...classes }} icon={<Settings />} aria-label="person" />
        <Tab classes={{ ...classes }} icon={<Search />} aria-label="search" />
      </Tabs>
    </Paper>
  );
}
