/*
Author - Tahir Khan (TK)
Modifying authors - None
Reference: the core structure is taken from Youtube:
  https://www.youtube.com/watch?v=UKdQjQX1Pko&t=577s
  Original Author - YouTube, Javascript Mastery
  Modifying Author – Tahir Khan

A class which defines styling features for the List class
*/

import { makeStyles } from "@mui/styles";

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
    paddingTop: 10,
    paddingBottom: 10,
  },
  formControl: {
    marginLeft: 10,
    marginRight: 10,
    width: "40%",
    minWidth: 120,
    marginBottom: "20px",
  },
  loading: {
    height: "600px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    padding: "10px",
    paddingRight: "0px",
  },
  marginBottom: {
    marginBottom: "5px",
  },
  scrolllist: {
    height: "65vh",
    overflow: "auto",
    marginTop: "20px !important",
  },
}));
