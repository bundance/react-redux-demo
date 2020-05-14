import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Grid from "@material-ui/core/Grid";

import SecondaryNavBar from "./SecondaryNavBar";

function PrimaryTabPanel(props) {
  const { children, index, ...other } = props;
  return (
    <Grid
      role="tabpanel"
      id={`primary-tabpanel-${index}`}
      aria-labelledby={`primary-tabpanel-${index}`}
      {...other}
    >
      <Grid item>{children}</Grid>
    </Grid>
  );
}

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

export default function PrimaryNavBar({ primaryTabIcons, secondaryTabBars }) {
  const [primaryTabValue, setPrimaryTabValue] = React.useState(0);
  const classes = useStyles();

  const handlePrimaryNavChange = (event, newValue) =>
    setPrimaryTabValue(newValue);

  const renderSecondaryNavBar = (primaryTabValue) => (
    <SecondaryNavBar
      tabs={secondaryTabBars[primaryTabValue].tabs}
      key={primaryTabValue}
    >
      {(tabValue) => secondaryTabBars[primaryTabValue].tabPanels[tabValue]()}
    </SecondaryNavBar>
  );

  return (
    <Paper square className={classes.root}>
      <Tabs
        value={primaryTabValue}
        variant="fullWidth"
        onChange={handlePrimaryNavChange}
        TabIndicatorProps={{ style: { backgroundColor: "#000000" } }}
        textColor="secondary"
        aria-label="Main Navigation"
      >
        {primaryTabIcons.map((icon, index) => (
          <Tab
            classes={{ ...classes }}
            icon={icon}
            key={`primaryTab-${index}`}
          />
        ))}
      </Tabs>
      <PrimaryTabPanel value={primaryTabValue} index={0}>
        {renderSecondaryNavBar(primaryTabValue)}
      </PrimaryTabPanel>
    </Paper>
  );
}

PrimaryNavBar.propTypes = {
  primaryTabIcons: PropTypes.array.isRequired,
  secondaryTabBars: PropTypes.array,
};
