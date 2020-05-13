import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import LocalCafe from "@material-ui/icons/LocalCafe";
import KnifeFork from "@material-ui/icons/Restaurant";
import Settings from "@material-ui/icons/Settings";
import Search from "@material-ui/icons/Search";
import Box from "@material-ui/core/Box";

import SecondaryNavBar from "../secondaryNavBar/SecondaryNavBar";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-prevent-tabpanel-${index}`}
      aria-labelledby={`scrollable-prevent-tab-${index}`}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

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

const useSecondaryStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    "&$selected": {
      backgroundColor: theme.palette.common.black,
    },
  },
  selected: {},
}));

export default function PrimaryNavBar() {
  const [value, setValue] = React.useState(0);
  const classes = useStyles();
  const secondaryClasses = useSecondaryStyles();

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
      <TabPanel value={value} index={0}>
        <SecondaryNavBar>
          <Tab classes={{ ...secondaryClasses }} label="All" aria-label="all" />
          <Tab
            classes={{ ...secondaryClasses }}
            label="pizza"
            aria-label="pizza"
          />
          <Tab
            classes={{ ...secondaryClasses }}
            label="steak"
            aria-label="steak"
          />
        </SecondaryNavBar>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <SecondaryNavBar>
          <Tab
            classes={{ ...secondaryClasses }}
            label="All Food"
            aria-label="all"
          />
        </SecondaryNavBar>
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
    </Paper>
  );
}
