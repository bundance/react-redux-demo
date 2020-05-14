import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import TabPanel from "./TabPanel";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    "&$selected": {
      backgroundColor: theme.palette.common.black,
    },
  },
  selected: {},
}));

export default function SecondaryNavBar({ onChange, tabs, children }) {
  const [value, setValue] = React.useState(0);
  const classes = useStyles();

  const handleChange = (event, newValue) => {
    setValue(newValue);
    onChange && onChange(event, newValue);
  };

  return (
    <div>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="fullWidth"
        scrollButtons="off"
        aria-label="Secondary Navigation Bar"
      >
        {tabs.map((tab) => (
          <Tab
            classes={{ ...classes }}
            label={tab}
            aria-label={tab}
            key={`secondary-tab-${tab}`}
          />
        ))}
      </Tabs>
      {children && typeof children === "function" && (
        <TabPanel index={0}>{children(value)}</TabPanel>
      )}
    </div>
  );
}
