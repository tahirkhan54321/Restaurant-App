/*
Author - Tahir Khan (TK)
Modifying authors - Mallika Misra (MM), Yanting Li (YL)
Reference: the core structure is taken from Youtube:
  https://www.youtube.com/watch?v=UKdQjQX1Pko&t=577s
  Original Author - YouTube, Javascript Mastery
  Modifying Author – Tahir Khan
    
A class which displays the list side panel. 
It calls PlaceDetails components which fill out each 'card' in the panel.
List takes in several props from App.js
*/

import React, { useState, useEffect, createRef } from "react";
import {
  CircularProgress,
  Grid,
  Typography,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
} from "@mui/material";

import useStyles from "./styles"; //import styling
import PlaceDetails from "../PlaceDetails/PlaceDetails";

/*
    ------------------------------------CREATE LIST---------------------------------------------------------------------------
  */

const List = ({
  places,
  childClicked,
  isLoading,
  type,
  setType,
  rating,
  setRating,
}) => {
  /*
    ------------------------------------DECLARING VARIABLES---------------------------------------------------------------------------
  */

  /* adding styling for use in the remainder of the class, note that we call this as though it were a React hook */
  const classes = useStyles();

  /* Element references for the places that have been clicked on to scroll to the place in the List */
  const [elRefs, setElRefs] = useState([]);

  /*
    ------------------------------------DECLARING USEEFFECTS---------------------------------------------------------------------------
  */

  /* Helps to scroll to the place in the List. Call this useEffect every time the places array changes. */
  useEffect(() => {
    var refs = [];
    refs = Array(places?.length)
      .fill()
      .map((_, i) => refs[i] || createRef());
    setElRefs(refs);
  }, [places]);

  /*
    ------------------------------------DEFINE LIST---------------------------------------------------------------------------
  */

  return (
    <div className={classes.container}>
      {/* MM - Title */}
      <Typography variant="h4" className={classes.title}>
        {type.charAt(0).toUpperCase() + type.slice(1)} restaurants near you
      </Typography>
      {/* Display loading symbol if we're scrolling to a specific place, otherwise run the FormControl onwards */}
      {isLoading ? (
        <div className={classes.loading}>
          <CircularProgress size="5rem" />
        </div>
      ) : (
        <>
        {/* YL - Creating a form for the cuisine type filter */}
          <FormControl className={classes.formControl} style={{ backgroundColor: "#f5f6f7" }}>
            {/* OnChange allows us to define an event that sets the cuisine type to whatever is selected from the MenuItem values below.
            e is a placeholder for the type to setType mapping */}
            <Select
              id="type"
              value={type}
              onChange={(e) => setType(e.target.value)}
            >
              <MenuItem value="All">All</MenuItem>
              <MenuItem value="American">American</MenuItem>
              <MenuItem value="Asian">Asian</MenuItem>
              <MenuItem value="British">British</MenuItem>
              <MenuItem value="Caribbean">Caribbean</MenuItem>
              <MenuItem value="French">French</MenuItem>
              <MenuItem value="Greek">Greek</MenuItem>
              <MenuItem value="Indian">Indian</MenuItem>
              <MenuItem value="Italian">Italian</MenuItem>
              <MenuItem value="Japanese">Japanese</MenuItem>
              <MenuItem value="Mediterranean">Mediterranean</MenuItem>
              <MenuItem value="Seafood">Seafood</MenuItem>
            </Select>
          </FormControl>

          {/* Creating a form for the rating filter */}
          <FormControl className={classes.formControl} style={{ backgroundColor: "#f5f6f7" }}>
            <InputLabel id="rating">Rating</InputLabel>
            {/* OnChange allows us to define an event that sets the rating to whatever is selected from the MenuItem values below.
            e is a placeholder for the rating to setRating mapping */}
            <Select
              id="rating"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
            >
              <MenuItem value={0}>All</MenuItem>
              <MenuItem value={3}>Above 3.0</MenuItem>
              <MenuItem value={4}>Above 4.0</MenuItem>
              <MenuItem value={4.5}>Above 4.5</MenuItem>
            </Select>
          </FormControl>
          {/* Displaying the list of places */}
          <Grid container spacing={2.5} className={classes.scrolllist}>
            {/* Think of this as a for-each loop. Only if you have places, map over them. 
            Map takes in a callback function and in each iteration of the callback, it has one new place. Takes in place and an index.
            We only need a set of parentheses for the callback because we're instantly going to return a piece of JSX.*/}
            {places?.map((place, i) => (
              /* xs means 12/12 container width */
              <Grid ref={elRefs[i]} item key={i} xs={12}>
                {" "}
                <PlaceDetails
                  /* The place object is passed as a prop called place TO the PlaceDetails component, 
                    allowing it to access and display the details of that specific place. */
                  place={place}
                  /* Determine whether the PlaceDetails component should be displayed as "selected" or not. 
                    Passed as a prop to PlaceDetails */
                  selected={Number(childClicked) === i}
                  /* Assign a unique reference to each place object's div element. 
                    Passed as a prop to PlaceDetails */
                  refProp={elRefs[i]}
                />
              </Grid>
            ))}
          </Grid>
        </>
      )}
    </div>
  );
};

export default List;
