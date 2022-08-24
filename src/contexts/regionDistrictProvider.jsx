import { createContext } from "react";
import axios from "axios";

const locationInfo =
  "https://raw.githubusercontent.com/ivanmirson/hackathon-laboratoria/main/buybox/regionComuna.json";

function RegionDistrictSchema() {
  const regionDistrictData = async () => {
    const request = await axios.get(locationInfo);
    const data = request.data.regionComuna;
    return data;
  };

  const regionData = async () => {
    const regions = await regionDistrictData();
    // console.log(regions);
    const state = regions.map(item => item.region);
    console.log(state)
    return state
  };
 

  const districtData = async () => {
    const districts = await regionDistrictData();
    // console.log(districts);
    const location = districts.map(item =>  item.comuna);
    console.log(location)
    return location
  };
  return { regionDistrictData, regionData, districtData }
}

const LocationContext = createContext();

export { LocationContext, RegionDistrictSchema}