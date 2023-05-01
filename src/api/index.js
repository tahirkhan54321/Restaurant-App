/*
    A class which handles the API call and exports it as a function
  */

import axios from "axios"; /* axios is a library that will help us make our API calls */

/*
    ------------------------------------MAKE API CALL---------------------------------------------------------------------------
*/

/* 
an asynchronous function which will allow App.js to make the API call 
takes in type and bounds as parameters
Note that this has been amended to take in type e.g. restaurants, hotels, attractions 
and the API URL takes this in from the function parameters
*/

export const getPlacesData = async (type, sw, ne) => {
  try {
    // make the API request using parameters for URL and options. https://rapidapi.com/apidojo/api/travel-advisor
    //note that this uses destructuring and we are using a template string
    const {
      data: { data },
    } = await axios.get(
      //Note that the ${type} is only used for the type of place e.g. retaurants, hotels, attractions
      `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,
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
          'X-RapidAPI-Key': 'a563b9624bmsh7086df2ea13a932p1a43dejsnf59c2068a5a4',
          'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com',
        },
      });
    return data;
  } catch (error) {
    console.log(error);
  }
};
