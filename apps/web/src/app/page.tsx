"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { getWeather } from "@/actions/weather";
import { usePersistData } from "@/components/use-keep-data";

import WeatherTable from "@/components/WeatherTable";
import { WeatherDataGroupResponse, WeatherData } from "@/common/types";
import TemperatureThresholdForm from "@/components/TempThresholdForm";
import CsvDownloadButton from "@/components/CsvDownloadButton";
const Home: React.FC = () => {
  const [weatherData, setWeatherData] = useState<WeatherData[]>([]);
  const [threshold, setThreshold] = useState<number>(0);
  const [showOnlyExtremeHeat, setShowOnlyExtremeHeat] =
    useState<boolean>(false);
  const [sortConfig, setSortConfig] = useState<{
    key: string;
    direction: "ascending" | "descending";
  }>({ key: "name", direction: "ascending" });

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

  const sortedData = [...filteredData].sort((a, b) => {
    if (a[sortConfig.key] < b[sortConfig.key]) {
      return sortConfig.direction === "ascending" ? -1 : 1;
    }
    if (a[sortConfig.key] > b[sortConfig.key]) {
      return sortConfig.direction === "ascending" ? 1 : -1;
    }
    return 0;
  });

  return (
    <section className="p-7 w-[100%] h-[100%] bg-gray-100">
      <article className="flex justify-between items-center mb-4">
        <Image
          src="/logo.png"
          width={100}
          height={100}
          alt="Tracklab logo"
          className="m-auto mb-8"
          priority={true}
          style={{ width: "auto", height: "auto" }}
        />
      </article>
      <article className="flex justify-between items-center">
        <CsvDownloadButton
          weatherData={sortedData}
          filename="weather_data.csv"
        />
        <TemperatureThresholdForm onThresholdChange={setThreshold} />
      </article>
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
      <WeatherTable
        weatherData={sortedData}
        threshold={threshold}
        onSort={setSortConfig}
        sortConfig={sortConfig}
      />
    </section>
  );
};

export default Home;
