import { createContext, useEffect, useState } from "react";
import axios from "axios";
// export const AppContext = createContext();
const locationInfo =
  "https://raw.githubusercontent.com/ivanmirson/hackathon-laboratoria/main/buybox/regionComuna.json";
export function RegionDistrictProvider() {

  const regionDistrictData = async () => {
    const request = await axios.get(locationInfo)
    const data = request.data.regionComuna
    return data
  }

  const regionData = async () =>{
    const regions = await regionDistrictData();
    console.log(regions)
    const region = regions.map(item => {console.log(item.region)} )
    return region
  }
  regionData()
 
  const districtData = async () => {
    const districts = await regionDistrictData();
    console.log(districts)
    const district = districts.map(item => {console.log(item.comuna)})
    return district
  }
  districtData()
  return (
    <div>
        {/* <h1>{product.name}</h1>
        <img src={product.images} alt="" /> */}
    </div>
    );
}