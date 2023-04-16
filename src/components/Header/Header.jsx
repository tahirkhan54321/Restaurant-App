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
import useStyles from "./styles"; //note that this is a React hook

const Header = () => {
  /* adding styling for use in the remainder of the class, note that we call this as though it were a React hook */
  const classes = useStyles();
  /* creating appbar */
  return (
    <AppBar position="static">
      {/* within appbar, add a toolbar */}
      <Toolbar className={classes.toolbar}>
        {/* Typography is every text element but it allows you to change the variant.
        Typography is used to standardize the text and its 
        related CSS properties without worrying about browser compatibility issues. */}
        {/* adding title */}
        <Typography variant="h5" className={classes.title}>
          One Mile Munch
        </Typography>
        {/* adding subtitle box */}
        <Box display="flex">
          <Typography variant="h6" className={classes.title}>
            See places near you
          </Typography>
          {/* Adding searchbar - autocomplete from Google Maps React */}
          {/* <Autocomplete> */}
            <div className={classes.search}>
              {/* getting a search icon from MUI */}
              <div className={classes.searchIcon}>
                <Search />
              </div>
              {/* input of the search function. Note that classes is taking in an object */}
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
