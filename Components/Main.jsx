"use client"

import Image from "next/image"
import { useState } from 'react';

const Main = () => {
  const [toggle, setToggle] = useState(false);

  const weather = {
    apikey: "1447255ade282f2d899f9cb8d976a24e",
    fetchweather: function (city) {
      fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=" + this.apikey
      ).then((response) => {
        if (!response.ok) {
          alert("No weather details found")
          throw new Error("No Weather Details Found")
        }
        return response.json();

      }).then((data) => this.displayWeather(data))
    },
    city1: function (city) {
      fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=" + this.apikey
      ).then((response) => {
        if (!response.ok) {
          alert("No weather details found")
          throw new Error("No Weather Details Found")
        }
        return response.json();

      }).then((data) => this.displaycity1(data))
    },
    city2: function (city) {
      fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=" + this.apikey
      ).then((response) => {
        if (!response.ok) {
          alert("No weather details found")
          throw new Error("No Weather Details Found")
        }
        return response.json();

      }).then((data) => this.displaycity2(data))
    },
    city3: function (city) {
      fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=" + this.apikey
      ).then((response) => {
        if (!response.ok) {
          alert("No weather details found")
          throw new Error("No Weather Details Found")
        }
        return response.json();

      }).then((data) => this.displaycity3(data))
    },
    city4: function (city) {
      fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=" + this.apikey
      ).then((response) => {
        if (!response.ok) {
          alert("No weather details found")
          throw new Error("No Weather Details Found")
        }
        return response.json();

      }).then((data) => this.displaycity4(data))
    },
    displayWeather: function (data) {
      const { name } = data;
      const { icon, description } = data.weather[0];
      const { temp, humidity } = data.main;
      const { speed } = data.wind;
      const { dt } = data;
      const timestamp = dt * 1000;
      const date = new Date(timestamp)
      const formatdate = date.toLocaleString();
      console.log(name, icon, description, temp, humidity, speed, formatdate)
      document.querySelector(".name").innerHTML = name;
      document.querySelector(".icon").src = "http://openweathermap.org/img/wn/" + icon + ".png";
      document.querySelector(".description").innerHTML = description;
      document.querySelector(".temp").innerHTML = temp + "°C";
      document.querySelector(".feels").innerHTML = data.main.feels_like + "°C";
      document.querySelector(".maxtemp").innerHTML = data.main.temp_max + "°C";
      document.querySelector(".gust").innerHTML = data.wind.gust + "m/s";
      document.querySelector(".humidity").innerHTML = humidity + "%";
      document.querySelector(".windspeed").innerHTML = speed + "m/s";
      document.querySelector(".pressure").innerHTML = data.main.pressure + "hPa";
      document.querySelector(".windD").innerHTML = data.wind.deg + "°";
      document.querySelector(".cloudes").innerHTML = data.clouds.all + "%";
      document.querySelector(".date").innerHTML = formatdate;

    },
    displaycity1: function (data) {
      const { icon, description } = data.weather[0];
      document.querySelector(".city1name").innerHTML = data.name
      document.querySelector(".city1icon").src = "http://openweathermap.org/img/wn/" + icon + ".png";
      document.querySelector(".city1description").innerHTML = description;
      document.querySelector(".city1temp").innerHTML = data.main.temp + "°C";

    },
    displaycity2: function (data) {
      const { icon, description } = data.weather[0];
      document.querySelector(".city2name").innerHTML = data.name
      document.querySelector(".city2icon").src = "http://openweathermap.org/img/wn/" + icon + ".png";
      document.querySelector(".city2description").innerHTML = description;
      document.querySelector(".city2temp").innerHTML = data.main.temp + "°C";

    },
    displaycity3: function (data) {
      const { icon, description } = data.weather[0];
      document.querySelector(".city3name").innerHTML = data.name
      document.querySelector(".city3icon").src = "http://openweathermap.org/img/wn/" + icon + ".png";
      document.querySelector(".city3description").innerHTML = description;
      document.querySelector(".city3temp").innerHTML = data.main.temp + "°C";

    },
    displaycity4: function (data) {
      const { icon, description } = data.weather[0];
      document.querySelector(".city4name").innerHTML = data.name
      document.querySelector(".city4icon").src = "http://openweathermap.org/img/wn/" + icon + ".png";
      document.querySelector(".city4description").innerHTML = description;
      document.querySelector(".city4temp").innerHTML = data.main.temp + "°C";

    },



    search: function () {
      this.fetchweather(document.querySelector(".searchbar").value);
    }
  }

  function entering(event) {
    if (event.key == "Enter") {
      weather.search()
    }
  }

  weather.fetchweather("Agra");
  weather.city1("Russia");
  weather.city2("New Zealand");
  weather.city3("Hawaii");
  weather.city4("Antarctica");



  const toggleChange = () => {
    setToggle(!toggle);
  }

  return (
    <div className={`min-h-screen ${toggle ? 'bg-[#44474A]' : 'bg-[#E4EAF2]'}`}>
      <div className="w-full overflow-hidden bg-black1">
        <div className="flex flex-col sm:flex-row items-center pl-5 sm:pl-[100px] w-full h-auto sm:h-[100px] p-5">
          <div className="flex items-center w-full sm:w-auto">
            <Image src="/logo.svg" alt="logo" width={40} height={40} />
            <p className="font-bold text-2xl mt-2 text-white  sm:ml-2">Weathermon</p>
          </div>
          <div className="relative flex items-center mt-2 sm:mt-0 sm:ml-[128px] w-full sm:w-auto">
            <Image src="/search.svg" width={20} height={20} alt="search" className="absolute left-2 bottom-2" />
            <input
              type="text"
              placeholder="Search your city"
              onKeyDown={entering}
              className="rounded h-[35px] w-full sm:w-[270px] pl-8 p-2 focus:outline-none font-light searchbar"
              aria-label="Search your city"
            />
          </div>
          <div className="flex w-full justify-end mt-3 sm:mt-0 sm:ml-auto">
            <label className="inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                value=""
                className="sr-only peer"
                checked={toggle}
                onChange={toggleChange}
              />
              {toggle ? (
                <div className=" relative left-5 z-10">
                  <Image src="/moon.svg" width={16} height={16} />
                </div>
              ) : (
                <div className="toggleimg relative left-[50px] z-10">
                  <Image src="/sun.svg" width={20} height={20} />
                </div>
              )}
              <div className="relative w-14 h-7 bg-yellow1 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-black"></div>
            </label>
          </div>
        </div>
      </div>
      <div className={`min-h-screen overflow-hidden p-5 ${toggle ? 'text-white' : 'text-black'}`}>
        <div className={`flex flex-col lg:flex-row h-full w-full space-y-10 lg:space-y-0 lg:space-x-10 lg:pl-[100px] mt-[100px]`}>

          <div className="flex flex-col w-full p-5 ">
            <div className={`flex justify-center font-light mb-1  date`}>
              Full Date
            </div>
            <hr className="border-gray-400" />
            <div className={`mt-3 rounded p-6 ${toggle ? 'bg-[#2C2C2C]' : 'bg-white'}`}>
              <div className="flex flex-row justify-between font-light mb-2">
                <p className={toggle ? 'text-white' : 'text-black'}>Today’s Weather</p>
                <p className={` name `}>Name</p>
              </div>
              <hr className="border-gray-300" />
              <div className="font-light">
                <div className="flex flex-row p-5">
                  <Image src="" width={100} height={100} alt="icon" className="icon" />
                  <div className="pl-5">
                    <p className="text-[50px] font-bold temp frontbanner">temperature</p>
                    <p className="description">description</p>
                  </div>
                </div>

                <div className="flex flex-row resttxt">
                  <div className="w-1/2 p-4">
                    <div className="mb-2">
                      <div className="flex flex-row">
                        <p className="w-full">
                          Feels Like
                        </p>
                        <p className="feels">
                          hello
                        </p>
                      </div>
                      <hr className="border-gray-300 mt-2" />
                    </div>
                    <div className="mb-2">
                      <div className="flex flex-row">
                        <p className="w-full">
                          Gust
                        </p>
                        <p className="gust">
                          hello
                        </p>
                      </div>
                      <hr className="border-gray-300 mt-2" />
                    </div>
                    <div className="mb-2">
                      <div className="flex flex-row">
                        <p className="w-full">
                          Maximum Temperature
                        </p>
                        <p className="maxtemp">
                          hello
                        </p>
                      </div>
                      <hr className="border-gray-300 mt-2" />
                    </div>
                    <div className="mb-2">
                      <div className="flex flex-row">
                        <p className="w-full">
                          Humidity
                        </p>
                        <p className="humidity">
                          hello
                        </p>
                      </div>
                      <hr className="border-gray-300 mt-2" />
                    </div>
                  </div>
                  <div className="w-1/2 p-4">
                    <div className="mb-2">
                      <div className="flex flex-row">
                        <p className="w-full">
                          Wind Speed
                        </p>
                        <p className="windspeed">
                          hello
                        </p>
                      </div>
                      <hr className="border-gray-300 mt-2" />
                    </div>
                    <div className="mb-2">
                      <div className="flex flex-row">
                        <p className="w-full">
                          Pressure
                        </p>
                        <p className="pressure">
                          hello
                        </p>
                      </div>
                      <hr className="border-gray-300 mt-2" />
                    </div>
                    <div className="mb-2">
                      <div className="flex flex-row">
                        <p className="w-full">
                          Wind Direction
                        </p>
                        <p className="windD">
                          hello
                        </p>
                      </div>
                      <hr className="border-gray-300 mt-2" />
                    </div>
                    <div className="mb-2">
                      <div className="flex flex-row">
                        <p className="w-full">
                          Clouds
                        </p>
                        <p className="cloudes">
                          hello
                        </p>
                      </div>
                      <hr className="border-gray-300 mt-2" />
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

          <div className={`flex flex-col w-full lg:w-2/4 h-auto font-light `}>
            <div className={`flex justify-center font-light mb-1 `}>
              Weather Around the World
            </div>
            <div className={`mt-3 rounded ${toggle ? 'bg-[#2C2C2C]' : 'bg-white'}`}>
              <div className="p-6">
                <div className="flex flex-row mb-2">
                  <p className={` w-full city1name `}>Country</p>
                  <p className="city1description text-center">des</p>
                  <hr className="border-gray-400" />
                </div>
                <div className="flex flex-row justify-center">
                  <Image src="" width={60} height={60} alt="icon" className="city1icon" />
                  <p className="city1temp flex text-center justify-center mt-4 font-bold text-lg">temp</p>
                </div>
              </div>
              <hr className="border-gray-400" />
              <div className="p-6">
                <div className="flex flex-row mb-2">
                  <p className={` w-full city2name `}>Country</p>
                  <p className="city2description text-center">des</p>
                  <hr className="border-gray-400" />
                </div>
                <div className="flex flex-row justify-center">
                  <Image src="" width={60} height={60} alt="icon" className="city2icon" />
                  <p className="city2temp flex text-center justify-center mt-4 font-bold text-lg">temp</p>
                </div>
              </div>
              <hr className="border-gray-400" />
              <div className="p-6">
                <div className="flex flex-row mb-2">
                  <p className={` w-full city3name`}>Country</p>
                  <p className="city3description text-center">des</p>
                  <hr className="border-gray-400" />
                </div>
                <div className="flex flex-row justify-center">
                  <Image src="" width={60} height={60} alt="icon" className="city3icon" />
                  <p className="city3temp flex text-center justify-center mt-4 font-bold text-lg">temp</p>
                </div>
              </div>
              <hr className="border-gray-400" />
              <div className="p-6">
                <div className="flex flex-row mb-2">
                  <p className={` w-full city4name`}>Country</p>
                  <p className="city4description text-center">des</p>
                  <hr className="border-gray-400" />
                </div>
                <div className="flex flex-row justify-center">
                  <Image src="" width={60} height={60} alt="icon" className="city4icon" />
                  <p className="city4temp flex text-center justify-center mt-4 font-bold text-lg">temp</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main
