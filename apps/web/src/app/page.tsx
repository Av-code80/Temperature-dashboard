"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { getWeather } from "@/actions/weather";
import { usePersistData } from "@/components/use-keep-data";
import TemperatureThresholdForm from "@/components/TemperatureThresholdForm";
import WeatherTable from "@/components/WeatherTable";
import { WeatherDataGroupResponse, WeatherData } from "@/common/types";

const Home: React.FC = () => {
  const [weatherData, setWeatherData] = useState<WeatherData[]>([]);
  const [threshold, setThreshold] = useState<number>(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data: WeatherDataGroupResponse = await getWeather();
        setWeatherData(data.list);
      } catch (error) {
        console.error("Failed to fetch weather data:", error);
      }
    };

    fetchData();
  }, []);

  const data = usePersistData(weatherData);


 return (
   <div className="p-7 w-[100%] h-[100%]">
     <Image
       src="/logo.png"
       width={100}
       height={100}
       alt="Tracklab logo"
       className="m-auto mb-8"
       priority={true}
       style={{ width: "auto", height: "auto" }}
     />

     <TemperatureThresholdForm onThresholdChange={setThreshold} />
     <WeatherTable weatherData={data || []} threshold={threshold} />
   </div>
 );
};

export default Home;
