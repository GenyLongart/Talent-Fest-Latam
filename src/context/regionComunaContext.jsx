import { createContext, useEffect, useState } from "react";
import axios from "axios";
// export const AppContext = createContext();
const locationInfo =
  "https://raw.githubusercontent.com/ivanmirson/hackathon-laboratoria/main/buybox/regionComuna.json";
export function RegionComunaProvider() {
  const [data, setData] = useState([]);
  const [regions, setRegions] = useState([]);
  useEffect(()=>{
  // const getRegionComuna = () => {
    // const regionComunaData =
    axios
    .get(locationInfo)
    .then((response) => {
      // console.log(response.data.regionComuna);
      const all= response.data.regionComuna;
      setData(all)
      // setData(regionComunaData)
    })
    .catch ((error)=> console.log(error.response))
  } , []);
  // getRegionComuna();
  // console.log(data)
  const getRegions = function (data) {
    // const items= getRegionComuna(reg)
    // console.log(items)
  // let regions = [];
    data.map((items) => {
    const result = items.region;
    console.log(result);
    setRegions= result
    // regions.push(result);
  });
  getRegions()
  //   console.log(getRegions)
  // (allRegionComuna) => {
  // let regions = [];
  // allRegionComuna
  // .map((item) => {
  //     const result = item.region
  //     console.log(result)
  //     regions.push(result)
  // }
  // )
  // return regions
  // const regions = allRegionComuna.filter(result => {
  //     return result.region === "Metropolitana de Santiago"
  // })
  // setRegions(regions)
  // console.log(regions)
  // }
  //   getRegions();
  // const getRegions = (getRegionComuna) => { }
  return <div>{}</div>;
}}