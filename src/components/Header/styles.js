import { alpha, makeStyles } from "@mui/material";

/* note that this is a callback function 
https://developer.mozilla.org/en-US/docs/Glossary/Callback_function
A callback function is a function passed into another function as an argument, 
which is then invoked inside the outer function to complete some kind of routine or action.

The CSS is structured as a callback function instead of a standard way because it's cleaner to use.
Each part of it is an object e.g. title object, search object, searchIcon object, inputRoot object, inputInput object,
toolbar object.

This makes use of props
https://react.dev/learn#sharing-data-between-components
and callback support in style overrides
https://mui.com/blog/callback-support-in-style-overrides/
*/

export default makeStyles((theme) => ({
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },

  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": { backgroundColor: alpha(theme.palette.common.white, 0.25) },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },

  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  inputRoot: {
    color: "inherit",
  },

  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: { width: "20ch" },
  },

  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
}));
