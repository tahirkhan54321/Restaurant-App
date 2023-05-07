/*
Author - Tahir Khan (TK)
Modifying authors - Shilin Li (SL)
Reference: the core structure is taken from Youtube:
https://www.youtube.com/watch?v=UKdQjQX1Pko&t=577s
Original Author - YouTube, Javascript Mastery
Modifying Author – Tahir Khan

A class which handles the API call and exports it as a function
*/

import axios from "axios"; /* axios is a library that will help us make our API calls */

/*
    ------------------------------------MAKE API CALL---------------------------------------------------------------------------
*/

/* 
an asynchronous function which will allow App.js to make the API call, takes in type and bounds as parameters
*/

export const getPlacesData = async (type, sw, ne) => {
  try {
    //SL - make the API request using parameters for URL and options. https://rapidapi.com/apidojo/api/travel-advisor
    //note that this uses destructuring and we are using a template string
    const {
      data: { data },
    } = await axios.get(
      `https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary`,
      {
        //note that these are the options from the original API request, moved inside for asynchronicity
        params: {
          bl_latitude: sw.lat,
          tr_latitude: ne.lat,
          bl_longitude: sw.lng,
          tr_longitude: ne.lng,
          /* 
          commenting these out for potential reuse later 
          */
          //   restaurant_tagcategory_standalone: '10591',
          //   restaurant_tagcategory: '10591',
          //   limit: '30',
          //   currency: 'GBP',
          //   open_now: 'true',
          //   lunit: 'km',
          //   lang: 'en_GB'
        },
        headers: {
          "X-RapidAPI-Key": "f4173b19bfmsh37187907498fac7p110a26jsn0a4f42d532e7",
          "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
        },
      }
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};
