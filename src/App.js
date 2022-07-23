import React, { useEffect, useRef, useState } from "react";
import Nav from "./components/Nav";
import City from "./components/City";
import axios from "axios";
import Footer from "./components/Footer";

export default function App() {
  var city = useRef(null);
  const [cities, setcities] = useState([]);
  var temp = "";
  var url = ``;

  return (
    <div className='h-screen overflow-x-hidden'>
      <Nav></Nav>
      <div className='flex flex-col items-center'>
        <input
          className='outline ease-in duration-300 outline-2 focus:outline-purple-800 mt-6 text-xl w-[70%] px-4 py-1 rounded-md border-black'
          ref={city}
        />
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-2 gap-y-4 bg-purple-400 top-4 relative rounded-md p-4'>
          {cities.map((e) => (
            <City data={e.data} city={e.city_}></City>
          ))}
          {cities.length === 0 && <h1 className='text-2xl my-6'>No Data.</h1>}
        </div>
        <button
          className='px-4 py-2 relative top-6 rounded-lg text-white bg-purple-500'
          onClick={() => {
            // console.log(city.current.value);
            axios
              .get(
                `https://api.weatherapi.com/v1/current.json?key=f085666e291a4e75a19104227222107&q=${city.current.value}`
              )
              .then((rs) => {
                setcities([
                  ...cities,
                  {
                    city_: city.current.value,
                    data: rs.data,
                  },
                ]);
              });
          }}>
          Add City
        </button>
      </div>
      <Footer></Footer>
    </div>
  );
}
