/*
  A class which defines how the header should look and which information should be in it
*/

import React from "react";
import { Toolbar, Typography } from "@mui/material";
import { AppBar } from "@mui/material";
import useStyles from "./styles"; //import styling
import Truck from "./Truck/Truck";

/*
  ------------------------------------CREATE HEADER---------------------------------------------------------------------------
*/

const Header = () => {
  /* adding styling for use in the remainder of the class, note that we call this as though it were a React hook  */
  const classes = useStyles();
  /* creating appbar */
  return (
    <AppBar position="static">
      {/* within MUI appbar, add a toolbar */}
      <Toolbar className={classes.toolbar}>
        {/* adding logo */}
        <img
          src="logo.jfif"
          style={{
            height: "100%",
            maxHeight: 120,
          }}
        />
        <div
          className="Truck-container"
          style={{
            width: "74vw",
            position: "absolute",
            height: "100%",
            maxHeight: 120,
            left: 130,
            display: "block",
          }}
        >
          <Truck />
        </div>
        {/* adding title */}
        <Typography variant="h4" className={classes.title}>
          One Mile Munch
        </Typography>
        {/* adding subtitle MUI box */}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
