import React from "react";
import {
  MuiThemeProvider,
  createMuiTheme,
  makeStyles,
} from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Header from "./features/header/Header";
import PrimaryNavBar from "./features/navBars/PrimaryNavBar";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import LocalCafe from "@material-ui/icons/LocalCafe";
import KnifeFork from "@material-ui/icons/Restaurant";
import Settings from "@material-ui/icons/Settings";
import Search from "@material-ui/icons/Search";

import BeerGrid from "./features/beer/BeerGrid";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#f44336",
    },
    secondary: {
      main: "#ffffff",
      dark: "#000000",
    },
    common: {
      red: "#f44336",
      white: "#ffffff",
    },
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100%",
    display: "flex",
    flexDirection: "column",
  },
}));

const primaryTabIcons = [
  <LocalCafe />,
  <KnifeFork />,
  <Settings />,
  <Search />,
];

const secondaryTabBarData = [
  {
    tabs: ["All", "Pizza", "Steak"],
    tabPanels: {
      "0": () => <BeerGrid />,
      "1": () => <BeerGrid foodType="pizza" />,
      "2": () => <BeerGrid foodType="steak" />,
    },
  },
  {
    tabs: ["All Foods", "tmp"],
    tabPanels: {
      "0": () => <Typography>All Foods 0 0</Typography>,
      "1": () => <Typography>All Foods 0 1</Typography>,
    },
  },
  {
    tabs: ["Settings", "tmp"],
    tabPanels: {
      "0": () => <Typography>Settings 0 0</Typography>,
      "1": () => <Typography>Settings 0 1</Typography>,
    },
  },
  {
    tabs: ["Search", "tmp"],
    tabPanels: {
      "0": () => <Typography>Search 0 0</Typography>,
      "1": () => <Typography>Search 0 1</Typography>,
    },
  },
];

export const Home = ({ beers, loadingState }) => {
  const classes = useStyles();
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <div className={classes.root}>
        <Grid container spacing={3} direction="column">
          <Grid item xs={12}>
            <Header title="Demo App" />
            <PrimaryNavBar
              primaryTabIcons={primaryTabIcons}
              secondaryTabBars={secondaryTabBarData}
            />
          </Grid>
        </Grid>
      </div>
    </MuiThemeProvider>
  );
};
export default Home;
