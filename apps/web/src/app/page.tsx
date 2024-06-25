"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { getWeather } from "@/actions/weather";
import { usePersistData } from "@/components/use-keep-data";

import WeatherTable from "@/components/WeatherTable";
import { WeatherDataGroupResponse, WeatherData } from "@/common/types";
import TemperatureThresholdForm from "@/components/TempThresholdForm";

const Home: React.FC = () => {
  const [weatherData, setWeatherData] = useState<WeatherData[]>([]);
  const [threshold, setThreshold] = useState<number>(0);
  const [showOnlyExtremeHeat, setShowOnlyExtremeHeat] =
    useState<boolean>(false);

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

  const data = usePersistData(weatherData) || [];

  const filteredData = showOnlyExtremeHeat
    ? data.filter(
        (city: WeatherData) =>
          city.main.temp && parseFloat(city.main.temp) > threshold
      )
    : data;

  return (
    <div className="p-7 w-[100%] h-[100%] bg-gray-100">
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
      <div className="mb-4 flex justify-center items-center">
        <input
          type="checkbox"
          checked={showOnlyExtremeHeat}
          onChange={() => setShowOnlyExtremeHeat(!showOnlyExtremeHeat)}
          className="mr-2"
        />
        <label className="text-lg font-semibold">
          Show Only Cities Exceeding Threshold
        </label>
      </div>
      <WeatherTable weatherData={filteredData} threshold={threshold} />
    </div>
  );
};

export default Home;
