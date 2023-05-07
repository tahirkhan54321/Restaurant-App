/*
Author - Tahir Khan (TK)
Modifying authors - Qi Fu (QF)
Reference: the core structure is taken from Youtube:
  https://www.youtube.com/watch?v=UKdQjQX1Pko&t=577s
  Original Author - YouTube, Javascript Mastery
  Modifying Author – Tahir Khan

A class which defines styling features for the PlaceDetails class
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

export default makeStyles(() => ({
  title: {
    fontFamily: "'Helvetica', sans-serif",
  },
  chip: {
    margin: "5px 5px 5px 0",
  },
  subtitle: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: "10px",
  },
  //QF
  spacing: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: "4px",
  },
  distance: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: "20px",
  },
  website: {
    border: "1px solid black",
    backgroundColor: "darkgrey",
  },
}));
