/*
Author - Tahir Khan (TK)
Modifying authors - Biyuan Zhao (BYZ), Qi Fu (QF), Shilin Li (SL)
Reference: the core structure is taken from Youtube:
  https://www.youtube.com/watch?v=UKdQjQX1Pko&t=577s
  Original Author - YouTube, Javascript Mastery
  Modifying Author – Tahir Khan

A class which displays the map
Map takes in several props from App.js
*/

import React from "react";
import GoogleMapReact from "google-map-react";
import { Paper, Typography, useMediaQuery, Rating } from "@mui/material"; //useMediaQuery helps with making map responsive
import AssistantDirectionIcon from "@mui/icons-material/AssistantDirection"; //QF
import { LocationOnOutlined } from "@mui/icons-material";
import AlarmOnIcon from "@mui/icons-material/AlarmOn"; // BYZ, QF
import Marker from "./Marker"; //SL

import useStyles from "./styles"; //import styling


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

  /* adding styling for use in the remainder of the class, note that we call this as though it were a React hook */
  const classes = useStyles();

  /* checking to see if the device is desktop or not and storing in variable, if width of the device is >600px, isMobile is false */
  const isDesktop = useMediaQuery("(min-width:899px)");

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
        defaultZoom={15}
        margin={[50, 50, 50, 50]}
        //map settings
        options={{
          zoomControl: true,
          streetViewControl: false,
          mapTypeControl: true,
          fullscreenControl: false,
          mapTypeId: "satellite",
        }}
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
        {/* SL - add in the user's location pin */}
        <Marker lat={coordinates.lat} lng={coordinates.lng} /> 
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
              <Paper className={classes.paper} elevation={3} style={{ backgroundColor: "#F9FBFD" }}>
                {/* display place name */}
                <Typography
                  className={classes.Typography}
                  variant="subtitle2"
                  gutterBottom
                >
                  {place.name}
                </Typography>

                {/* TK - Iterate over cuisines and display a single chip for each one, if the place exists and the cuisine exists. 
                Note that we removed this feature for aesthetics but are keeping it in case of reactivation */}
                {/* {place?.cuisine?.slice(0, 1).map(({ name }) => (
                  <Chip
                    key={name}
                    size="small"
                    label={name}
                    className={classes.chip}
                  />
                ))} */}

                {/* display rating */}
                <Rating
                  size="small"
                  value={Number(place.rating)}
                  readOnly
                  className={classes.rating}
                />
                {/* BYZ, QF - Opening hour */}
                {place?.open_now_text && (
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    className={classes.spacing}
                    style={{ display: "flex", alignItems: "center", paddingTop: "5px" }}
                  >
                    <AlarmOnIcon />
                    {place.open_now_text}
                  </Typography>
                )}
                {/* QF - Show the distance between user and restaurant*/}
                {place?.distance_string && (
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    className={classes.spacing}
                    style={{ display: "flex", alignItems: "center", paddingTop: "4px" }}
                  >
                    <AssistantDirectionIcon
                      style={{ marginRight: "0.15rem" }}
                    />
                    {place.distance_string}
                  </Typography>
                )}
              </Paper>
            )}
          </div>
        ))}
      </GoogleMapReact>
    </div>
  );
};

export default Map;
