/*
  A class which defines how the header should look and which information should be in it
*/

import React from "react";
import {
  Autocomplete,
  Box,
  InputBase,
  Toolbar,
  Typography,
} from "@mui/material";
import { AppBar } from "@mui/material";
import { ClassNames } from "@emotion/react";
import { Search } from "@mui/icons-material";
import useStyles from "./styles"; //note that this doesn't work anymore and will need to be replaced

/*
  ------------------------------------CREATE HEADER---------------------------------------------------------------------------
*/

const Header = () => {
  /* adding styling for use in the remainder of the class, note that we call this as though it were a React hook 
    note that this doesn't work anymore and will need to be replaced */
  const classes = useStyles();
  /* creating appbar */
  return (
    <AppBar position="static">
      {/* within MUI appbar, add a toolbar */}
      <Toolbar className={classes.toolbar}>
        {/* adding title */}
        <Typography variant="h5" className={classes.title}>
          One Mile Munch
        </Typography>
        {/* adding subtitle MUI box */}
        <Box display="flex">
          <Typography variant="h6" className={classes.title}>
            See places near you
          </Typography>
          {/* Adding MUI searchbar - autocomplete from Google Maps React */}
          {/* <Autocomplete> */}
          <div className={classes.search}>
            {/* getting a search icon from MUI */}
            <div className={classes.searchIcon}>
              <Search />
            </div>
            {/* input of the search function. Note that classes is taking in an object. Taken from MUI */}
            <div>
              <InputBase
                placeholder="Search..."
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
              ></InputBase>
            </div>
          </div>
          {/*</Autocomplete>*/}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
