/*
Author - Tahir Khan (TK)
Modifying authors - Biyuan Zhao (BYZ), Qi Fu (QF)
Reference: the core structure is taken from Youtube:
  https://www.youtube.com/watch?v=UKdQjQX1Pko&t=577s
  Original Author - YouTube, Javascript Mastery
  Modifying Author – Tahir Khan

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
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AssistantDirectionIcon from "@mui/icons-material/AssistantDirection"; //QF
import PhoneIcon from "@mui/icons-material/Phone";
import useStyles from "./styles"; //import styling
import AccessTimeIcon from "@mui/icons-material/AccessTime"; // BYZ, QF
import AlarmOnIcon from "@mui/icons-material/AlarmOn"; // BYZ, QF

/*
    ------------------------------------CREATE PLACEDETAILS---------------------------------------------------------------------------
  */

const PlaceDetails = ({ place, selected, refProp }) => {
  /*
    ------------------------------------DECLARING VARIABLES & FUNCTIONS-----------------------------------------------------------
  */

  /* adding styling for use in the remainder of the class, note that we call this as though it were a React hook */
  const classes = useStyles();

  /* BYZ, QF
  for calculating the walking time, average walking pace for a human is 5km/h */
  const walkingSpeed = 5;

  /* if a place from the List has been selected, scroll to it */
  if (selected)
    refProp?.current?.scrollIntoView({ behavior: "smooth", block: "start" });

  /*
    ------------------------------------RENDER PLACEDETAILS CARD-------------------------------------------------------------------
  */

  return (
    //wrapping everything inside an MUI card component
    <Card elevation={6} style={{ paddingRight: "5px" }}>
      {/*An MUI card which is used to display images*/}
      <CardMedia
        style={{ height: 225 }}
        //if the is an image, use it. If not, use a royalty-free default
        image={
          place.photo
            ? place.photo.images.large.url
            : "https://burst.shopifycdn.com/photos/table-for-two.jpg?width=1850&format=pjpg&exif=1&iptc=1"
        }
        title={place.name}
      />
      <CardContent>
        {/*Display the place name with some margin at the bottom */}
        <Typography gutterBottom variant="h5" className={classes.title}>
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
        {/* QF - Show the distance between user and restaurant*/}
        {place?.distance_string && (
          <Typography
            variant="body2"
            color="textSecondary"
            className={classes.distance}
          >
            <AssistantDirectionIcon />
            {place.distance_string}
          </Typography>
        )}
        {/** BYZ, QF - Walking time calculation */}
        {place?.distance_string && (
          <Typography
            variant="body2"
            color="textSecondary"
            className={classes.spacing}
          >
            <AccessTimeIcon />
            {(Number.parseFloat(place.distance / walkingSpeed) * 60).toFixed(0)}
            mins
          </Typography>
        )}
        {/* BYZ, QF - Opening hour */}
        {place?.open_now_text && (
          <Typography
            variant="body2"
            color="textSecondary"
            className={classes.spacing}
          >
            <AlarmOnIcon />
            {place.open_now_text}
          </Typography>
        )}
        {/*Displays clickable buttons for the website */}
        <CardActions>
          <Button
            size="small"
            onClick={() => window.open(place.website, "_blank")}
            className={classes.website}
          >
            Website
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  );
};

export default PlaceDetails;
