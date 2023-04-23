/*
A class which displays details ('cards') about each individual place in the List. 
These are then stacked on one another within the List.
PlaceDetails takes in several props from App.js
*/

import React from "react";

import {
  Box,
  Typography,
  Button,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Chip,
  Rating,
} from "@mui/material";
import { LocationOnOutlined } from "@mui/icons-material";
import { Phone } from "@mui/icons-material";
import Rating from "@mui/material";
import useStyles from "./styles"; //note that this doesn't work anymore and will need to be replaced

/*
    ------------------------------------CREATE PLACEDETAILS---------------------------------------------------------------------------
  */

const PlaceDetails = ({ place, selected, refProp }) => {

  /*
    ------------------------------------DECLARING VARIABLES & FUNCTIONS-----------------------------------------------------------
  */

  /* adding styling for use in the remainder of the class, note that we call this as though it were a React hook 
    note that this doesn't work anymore and will need to be replaced */
  const classes = useStyles();

  /* if a place from the List has been selected, scroll to it */
  if (selected)
    refProp?.current?.scrollIntoView({ behavior: "smooth", block: "start" });


  /*
    ------------------------------------RENDER PLACEDETAILS CARD-------------------------------------------------------------------
  */

  return (
    //wrapping everything inside an MUI card component
    <Card elevation={6}>
      {/*An MUI card which is used to display images*/}
      <CardMedia
        style={{ height: 350 }}
        //if the is an image, use it. If not, use a default
        image={
          place.photo
            ? place.photo.images.large.url
            : "https://burst.shopifycdn.com/photos/table-for-two.jpg?width=1850&format=pjpg&exif=1&iptc=1"
        }
        title={place.name}
      />
      <CardContent>
        {/*Display the place name with some margin at the bottom */}
        <Typography gutterBottom variant="h5">
          {place.name}
        </Typography>
        {/*Display the rating */}
        <Box display="flex" justifyContent="space-between">
          <Rating value={Number(place.rating)} readOnly />
          <Typography gutterBottom variant="subtitle1">
            out of {place.num_reviews} reviews
          </Typography>
        </Box>
        {/*Display the place price level in a box with some margin at the bottom */}
        <Box display="flex" justifyContent="space-between">
          <Typography variant="subtitle1">Price</Typography>
          <Typography gutterBottom variant="subtitle1">
            {place.price_level}
          </Typography>
        </Box>
        {/*Display the ranking in a box with some margin at the bottom */}
        <Box display="flex" justifyContent="space-between">
          <Typography variant="subtitle1">Ranking</Typography>
          <Typography gutterBottom variant="subtitle1">
            {place.ranking}
          </Typography>
        </Box>
        {/*Iterate over and display all the awards the place has achieved. Todo: get rid of this, unnecessary */}
        {place?.awards?.map((award) => (
          <Box
            display="flex"
            justifyContent="space-between"
            my={1}
            alignItems="center"
          >
            <img src={award.images.small} />
            <Typography variant="subtitle2" color="textSecondary">
              {award.display_name}
            </Typography>
          </Box>
        ))}
        {/*Iterate over cuisines and display a chip for each one, if the place exists and the cuisine exists. Todo: use chip or not?*/}
        {place?.cuisine?.map(({ name }) => (
          <Chip key={name} size="small" label={name} className={classes.chip} />
        ))}
        {/*Displays the addresses and puts a location icon in from MUI. Only renders the below if place.address exists */}
        {place?.address && (
          <Typography
            gutterBottom
            variant="subtitle2"
            color="textSecondary"
            className={classes.subtitle}
          >
            <LocationOnIcon />
            {place.address}
          </Typography>
        )}
        {/*Displays the phone number and puts a Phone icon in from MUI. Only renders the below if place.phone exists */}
        {place?.phone && (
          <Typography
            variant="body2"
            color="textSecondary"
            className={classes.spacing}
          >
            <PhoneIcon /> {place.phone}
          </Typography>
        )}
        {/*Displays clickable buttons for the tripadvisor site and the place website */}
        <CardActions>
          <Button
            size="small"
            color="primary"
            onClick={() => window.open(place.web_url, "_blank")}
          >
            Trip Advisor
          </Button>
          <Button
            size="small"
            color="primary"
            onClick={() => window.open(place.website, "_blank")}
          >
            Website
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  );
};

export default PlaceDetails;
