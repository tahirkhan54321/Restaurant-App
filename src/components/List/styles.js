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
  formControl: {
    margin: 10,
    width: "40%",
    minWidth: 120,
    marginBottom: "30px",
  },
  selectEmpty: {
    marginTop: 20,
  },
  loading: {
    height: "600px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    padding: "25px",
  },
  marginBottom: {
    marginBottom: "30px",
  },
  list: {
    height: "75vh",
    overflow: "auto",
  },
}));
