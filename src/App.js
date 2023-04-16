/* This renders all the components.
It uses the following structure:
Header
Grids which contain List and Map ()

*/

import React from "react";

import { CssBaseline, Grid } from "@mui/material";

import Header from "./components/Header/Header";
import List from "./components/List/List";
import Map from "./components/Map/Map";

const App = () => {
  return (
    <>
      {/* The CssBaseline component helps to kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
      <Header />
      {/* Material Design responsive layout Grid adapts to screen size and orientation, ensuring consistency across layouts. */}
      <Grid container spacing={3} style={{ width: "100%" }}>
        {/* takes all 12 spaces on small devices, only 4/12 spaces on medium devices*/}
        <Grid item xs={12} md={4}>
          <List />
        </Grid>
        <Grid item xs={12} md={8}>
          <Map />
        </Grid>
      </Grid>
    </>
  );
};

export default App;
