import React, { Fragment } from "react";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Header from "./features/header/Header";
import PrimaryNavBar from "./features/primaryNavBar/PrimaryNavBar";
import SecondaryNavBar from "./features/secondaryNavBar/SecondaryNavBar";

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

export const Home = ({ beers, loadingState }) => (
  <Fragment>
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Header title="Demo App" />
      <PrimaryNavBar />
      <SecondaryNavBar />
    </MuiThemeProvider>
  </Fragment>
);

export default Home;
