import { useState, useEffect } from "react";

const useRestaurantData = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9230803&lng=77.6630559&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    let jsonData = await data.json();

    setTimeout(() => {
      console.log(jsonData, "jsonData");
    }, 5000);

    setListOfRestaurants(
      jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );

    // const newData = await fetch("https://www.swiggy.com/dapi/restaurants/list/update", {
    //   method: "POST",
    //   lat: "12.9230803",
    //   lng: "77.6630559",
    //   filters: {},
    //   nextOffset: "COVCELQ4KICYk73O6M2GHzCnEw==",
    //   page_type: "DESKTOP_WEB_LISTING",
    //   referrerPolicy: "origin-when-cross-origin",
    //   _csrf: "26jJez4OnD91-VFxoJEmCbSRVXIFLtlKPXz7KS88"
    // });

    // const newJsonData = await newData.json();

    // setTimeout(() => {
    //   console.log(newData, "newData");
    //   console.log(newJsonData, "newJsonData");
    // }, 10000)
  };

  return listOfRestaurants;
};

export default useRestaurantData;

// ?NEW API AND DESTRUCTURE, 2 feb, 2024
// const data = await fetch(
//   "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9298689&lng=77.6848366"
// );

// let jsonData = await data.json();

// if (jsonData?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants === undefined) {
//   const newData = await fetch(
//     "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9298689&lng=77.6848366"
//   );
//   jsonData = await newData.json();
//   setListOfRestaurants(jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
// } else {
//   setListOfRestaurants(jsonData?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
// }
