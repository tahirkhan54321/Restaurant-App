/*
A class which displays the map
Map takes in several props from App.js
*/

import React from "react";
import GoogleMapReact from "google-map-react";
import { Paper, Typography, useMediaQuery, Rating } from "@mui/material"; //useMediaQuery helps with making map more responsive
import { LocationOnOutlined } from "@mui/icons-material";

import useStyles from "./styles"; //note that this doesn't work anymore and will need to be replaced

/*
    ------------------------------------CREATE MAP---------------------------------------------------------------------------
  */

//Map takes in props for setCoordinates, setBounds, coordinates, places to update its state - note this is 'destructuring'
const Map = ({
  setCoordinates,
  setBounds,
  coordinates,
  places,
  setChildClicked,
}) => {
  /*
    ------------------------------------DECLARING VARIABLES-----------------------------------------------------------------------
  */

  /* adding styling for use in the remainder of the class, note that we call this as though it were a React hook 
    note that this doesn't work anymore and will need to be replaced */
  const classes = useStyles();

  /* checking to see if the device is desktop or not and storing in variable, if width of the device is >600px, isMobile is false */
  const isDesktop = useMediaQuery("(min-width:600px)");

  /*
    ------------------------------------DEFINE MAP---------------------------------------------------------------------------
  */

  return (
    <div className={classes.mapContainer}>
      {/* ---------------------------------------------RENDER THE MAP ITSELF-------------------------------------------------*/}
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyDHJE1zWEbcLaB8ieoeIpG54TezvC2NEY4" }}
        defaultCenter={coordinates}
        //actual center
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        //unknown entity atm, todo
        options={""}
        //when the map changes, use callback function to set the new center of the map
        onChange={(e) => {
          //e is a placeholder object for the callback function which has properties from Google Maps React object
          setCoordinates({ lat: e.center.lat, lng: e.center.lng });
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
        }}
        // when you click on a pin, update the prop
        onChildClick={(child) => setChildClicked(child)}
      >
        {/* -------------------------------------RENDER THE PINS OR PAPER ON THE MAP----------------------------------------- */}

        {/* Iterate over the places with key i */}
        {places?.map((place, i) => (
          <div
            className={classes.markerContainer}
            // convert lat/long from place into numbers instead of strings
            lat={Number(place.latitude)}
            lng={Number(place.longitude)}
            key={i}
          >
            {/* if on mobile, only render pins, if on desktop, render a "paper" from MUI */}
            {!isDesktop ? (
              // ------------------------------------------RENDER PINS-------------------------------------------------------------
              <LocationOnOutlined color="primary" fontSize="large" />
            ) : (
              // ------------------------------------------RENDER PAPER------------------------------------------------------------
              <Paper className={classes.paper} elevation={3}>
                {/* display place name */}
                <Typography
                  className={classes.Typography}
                  variant="subtitle2"
                  gutterBottom
                >
                  {place.name}
                </Typography>
                {/* display image */}
                <img
                  className={classes.pointer}
                  src={
                    place.photo
                      ? place.photo.images.large.url
                      : "https://burst.shopifycdn.com/photos/table-for-two.jpg?width=1850&format=pjpg&exif=1&iptc=1"
                  }
                  alt={place.name}
                />
                {/* display rating */}
                <Rating size="small" value={Number(place.rating)} readOnly />
              </Paper>
            )}
          </div>
        ))}
      </GoogleMapReact>
    </div>
  );
};

export default Map;
