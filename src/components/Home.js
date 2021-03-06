import React, { useEffect}   from "react";
import axios from "axios";
import Filter from "./Filter";
import Hotel from "./Hotel";

const Home = ({dataHotels,urlImgs,setUrlImgs,setDataHotels,setCopiaDataHotels,copiaDataHotels}) => {

    useEffect(() => {

      const getHotels = async() => {
        try {
          const hotel = await axios.get("http://localhost:8000/listHotels")
          setCopiaDataHotels(hotel.data.Hotels)
          setDataHotels(hotel.data.Hotels)
          setUrlImgs(hotel.data.urlImg)
        } catch (err) {
          console.log(err)
        }
      }

      getHotels()
    },[setDataHotels,setCopiaDataHotels,setUrlImgs])

   

  return (
    <div className="home">
      <Filter setDataHotels = {setDataHotels} dataHotels = {dataHotels} copiaDataHotels = {copiaDataHotels} />
      <div>
        {
          dataHotels.map((hotel) => <Hotel  urlImgs={urlImgs} key={hotel.id} hotel={hotel}/>)
        }
        
      </div>
    </div>
  );
};

export default Home;
