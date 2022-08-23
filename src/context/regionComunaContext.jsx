import { createContext, useEffect, useState } from "react";
import axios from "axios";
// export const AppContext = createContext();
const locationInfo =
  "https://raw.githubusercontent.com/ivanmirson/hackathon-laboratoria/main/buybox/regionComuna.json";
export function RegionComunaProvider() {

  const regionComunaData = async () => {
    const request = await axios.get(locationInfo)
    const data = request.data.regionComuna
    return data
  }

  const regionData = async () =>{
    const regions = await regionComunaData();
    console.log(regions)
    regions.map(item => {console.log(item.region)} )
  }
  regionData()
 
  return (
    <div>
        {/* <h1>{product.name}</h1>
        <img src={product.images} alt="" /> */}
    </div>
    );
}