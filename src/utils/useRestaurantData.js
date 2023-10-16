import { useState, useEffect } from "react";

const useRestaurantData = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/mapi/homepage/getCards?lat=12.9298689&lng=77.6848366"
    );

    let jsonData = await data.json();

    if (jsonData?.data?.success?.cards[3]?.gridWidget?.gridElements?.infoWithStyle?.restaurants === undefined) {
      const newData = await fetch(
        "https://www.swiggy.com/mapi/homepage/getCards?lat=12.9298689&lng=77.6848366"
      );
      jsonData = await newData.json();
      setListOfRestaurants(jsonData?.data?.success?.cards[4]?.gridWidget?.gridElements?.infoWithStyle?.restaurants);
    } else {
      setListOfRestaurants(jsonData?.data?.success?.cards[3]?.gridWidget?.gridElements?.infoWithStyle?.restaurants);
    }
  };

  return listOfRestaurants;
};

export default useRestaurantData;
