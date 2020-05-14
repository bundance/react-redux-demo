import React from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number
};

export default function TabPanel(props) {
  const { children, index, ...other } = props;
  return (
    <Grid
      role="tabpanel"
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      <Grid
        item
        style={{
          height: `100vh`,
          spacing: 0,
          direction: "column",
        }}
      >
        {children}
      </Grid>
    </Grid>
  );
}
