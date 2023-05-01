/* 
Driver class which renders all the components.
It uses the following structure:
Header
Grids which contain List and Map
*/

import React, { useState, useEffect } from "react";

import { CssBaseline, Grid } from "@mui/material";

import Header from "./components/Header/Header";
import List from "./components/List/List";
import Map from "./components/Map/Map";

import { getPlacesData } from "./api/index";

const App = () => {
  /*
    ------------------------------------DECLARING VARIABLES---------------------------------------------------------------------------
  */

  //Variable to store places and useState allows the places to update when the map is moved.
  const [places, setPlaces] = useState([]);

  //Variable to store which places have been selected by the filter
  const [filteredPlaces, setFilteredPlaces] = useState([]);

  //Variable to store coordinates and useState allows us to update coordinates
  const [coordinates, setCoordinates] = useState({});

  //Variable to store bounds (i.e. the lat/long of the top right and bottom left of the map) and useState allows us to update bounds
  const [bounds, setBounds] = useState({});

  //Variable to store whether a pin has been clicked on to scroll to that place in the List
  const [childClicked, setChildClicked] = useState(null);

  //Variable to give loading symbol (circular progress) to List
  const [isLoading, setIsLoading] = useState(false);

  //Variable to set type of place (restaurant, hotel, attraction), defaults to restaurants. Used for filter
  const [type, setType] = useState("restaurants");

  //Variable to set rating filter, defaults to empty string
  const [rating, setRating] = useState("");

  /*
    ------------------------------------DECLARING USEEFFECTS---------------------------------------------------------------------------
  */

  /*
  Get the user's current location and set the 'coordinates' state
  */
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoordinates({ lat: latitude, lng: longitude });
      }
    );
  }, []);

  /*
  Filter places based on the rating dropdown selection
  */
  useEffect(() => {
    const filteredPlaces = places.filter((place) => Number(place.rating) > rating);
    setFilteredPlaces(filteredPlaces);
  }, [rating]);

  /* 
  Whenever type, coordinates or bounds change, getPlacesData (API call) is rerun.
  Note that .then is needed because this is an async request and needs to take in a callback function. See JS 'Promises'.
  setPlaces, setFilteredPlaces and setIsLoading are also updated.
  */
  useEffect(() => {
    setIsLoading(true); //at the beginning of the useEffect, display loading symbol
    console.log('south west is ' + bounds.sw);
    console.log('north east is:' + bounds.ne);
    getPlacesData(type, bounds.sw, bounds.ne).then((data) => {
      console.log('data before setPlacesData is ' + data);
      setPlaces(data); //update the places array with the output of the function setPlaces
      setFilteredPlaces([]); //set filteredPlaces back to an empty array
      setIsLoading(false); //once setPlaces has happened, stop loading symbol
    });
  }, [type, bounds]); //dependencies to run this useEffect if type, coordinates or bounds change

  /*
    ------------------------------------RENDERING COMPONENTS---------------------------------------------------------------------------
  */
  return (
    <>
      {/* The CssBaseline component helps to kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
      <Header />
      {/* MUI responsive Grid adapts to screen size and orientation */}
      <Grid container spacing={3} style={{ width: "100%" }}>
        {/* takes all 12 spaces on small devices, only 4/12 spaces on medium devices*/}
        <Grid item xs={12} md={4}>
          {/* passing the places prop to the List component (filteredPlaces if that array is non-empty)
              passing the childClicked prop to the List
              passing loading status prop to the List 
              passing type, setType and rating, setRating to List */}
          <List
            places={filteredPlaces.length ? filteredPlaces : places}
            childClicked={childClicked}
            isLoading={isLoading}
            type={type}
            setType={setType}
            rating={rating}
            setRating={setRating}
          />
        </Grid>

        <Grid item xs={12} md={8}>
          <Map
            // passing setter functions to Map as props
            setCoordinates={setCoordinates}
            setBounds={setBounds}
            // Map needs to make use of the co-ordinates, so pass in the state itself
            coordinates={coordinates}
            // passing a places prop to allow the Map to display places (pins) on it (filteredPlaces if that array is non-empty)
            places={filteredPlaces.length ? filteredPlaces : places}
            // passing a prop to Map if a pin on the map has been clicked
            setChildClicked={setChildClicked}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default App;
