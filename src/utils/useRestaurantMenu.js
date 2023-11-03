import { useState, useEffect } from "react";
import { MENU_API } from "./constants";
const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const list = await fetch(MENU_API + resId);
    const json = await list.json();
    setResInfo(json.data);
  };
  return resInfo;
};

export default useRestaurantMenu;
