import { createContext, useState} from "react";
import axios from "axios";

const locationInfo =
  "https://raw.githubusercontent.com/ivanmirson/hackathon-laboratoria/main/buybox/regionComuna.json";

const [region, setRegion] =useState([]);
const [district, setDistrict] = useState([]);

function RegionDistrictContext() {
  const regionDistrictData = async () => {
    const request = await axios.get(locationInfo);
    const data = request.data.regionComuna;
    return data;
  };

  const regionData = async () => {
    const regions = await regionDistrictData();
    console.log(regions);
    const state = regions.map((item) => {
      console.log(item.region);
    });
    setRegion(state);
    console.log(region)
  };
  regionData();

  const districtData = async () => {
    const districts = await regionDistrictData();
    console.log(districts);
    const location = districts.map((item) => {
      console.log(item.comuna);
    });
    return setDistrict(location);
  };
  districtData();
}

export default createContext(RegionDistrictContext());
