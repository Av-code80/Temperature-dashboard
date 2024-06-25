// apps/web/src/app/page.tsx
"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { getWeather } from "@/actions/weather";
import { usePersistData } from "@/components/use-keep-data";

const Home: React.FC = () => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getWeather();
      setWeatherData(data);
    };

    fetchData();
  }, []);

  const data = usePersistData(weatherData);

  console.log("weatherData : ", data);

  return (
    <div className="p-7 w-[100%] h-[100%]">
      <Image
        src="/logo.png"
        width={500}
        height={200}
        alt="Tracklab logo"
        className="m-auto mb-8"
      />
      <h1 className="text-2xl font-bold text-center">
        Welcome to the test, you can start writing in this file 👇
      </h1>
      <h2 className="text-xl font-semibold text-center">
        Good luck and do not hesitate if you have any questions to reach us
      </h2>
    </div>
  );
};

export default Home;
