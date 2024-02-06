import { useState, useEffect } from "react";
import { MENU_API } from "./constants";
const useRestaurantMenu = (resId) => {
    const [resInfo, setResInfo] = useState(null);
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(MENU_API + resId);
        const jsonData = await data.json();

        setTimeout(() => {
                console.log(jsonData.data, "jsonDataREs");
        }, 5000);
        setResInfo(jsonData.data);
    }
    
    return resInfo;
}

export default useRestaurantMenu;