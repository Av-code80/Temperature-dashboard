"use client";

import React, { useState } from "react";
import Image from "next/image";
import WeatherTable from "@/components/weatherTable/WeatherTable";
import { SortableKeys } from "@/common/type/types";
import CsvDownloadButton from "@/components/csvDownloadButton/CsvDownloadButton";
import { filterWeatherData, sortWeatherData } from "@/utils/weatherUtils";
import { useWeatherData } from "@/common/hooks/useWeatherData";
import TemperatureThresholdForm from "@/components/tempThresholdForm/TempThresholdForm";
import "@/common/style/tailwind.css";

/**
 * Home component that displays the weather data, allows filtering and sorting, and provides CSV download functionality.
 */

const Home: React.FC = () => {
  const { weatherData, error } = useWeatherData();
  const [threshold, setThreshold] = useState<number>(0);
  const [showOnlyExtremeHeat, setShowOnlyExtremeHeat] =
    useState<boolean>(false);
  const [sortConfig, setSortConfig] = useState<{
    key: SortableKeys;
    direction: "ascending" | "descending";
  }>({
    key: "name",
    direction: "ascending",
  });

  const data = weatherData || [];

  const filteredData = filterWeatherData(data, threshold, showOnlyExtremeHeat);
  const sortedData = sortWeatherData(filteredData, sortConfig);

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  return (
    <section
      className="p-7 min-w-full min-h-full bg-gradient text-center"
      aria-labelledby="main-heading"
    >
      <header className="sticky top-0 z-10 bg-gradient p-4">
        <article className="flex flex-col lg:flex-row justify-between items-center mb-4">
          <Image

src="/assets/logo.png"
            width={100}
            height={100}
            alt="Tracklab logo"
            className="m-auto mb-8"
            priority={true}
            style={{ width: "auto", height: "auto" }}
          />
        </article>
        <article className="flex flex-col lg:flex-row justify-between mb-2 ">
          <CsvDownloadButton
            weatherData={sortedData}
            filename="weather_data.csv"
          />
          <TemperatureThresholdForm onThresholdChange={setThreshold} />
        </article>
        <div className="mb-4 flex justify-center items-center">
          <input
            type="checkbox"
            id="extreme-heat-checkbox"
            checked={showOnlyExtremeHeat}
            onChange={() => setShowOnlyExtremeHeat(!showOnlyExtremeHeat)}
            className="mr-2"
            aria-labelledby="extreme-heat-label"
          />
          <label
            id="extreme-heat-label"
            className="text-lg font-semibold text-red-600"
          >
          Only Cities Exceeding Threshold
          </label>
        </div>
      </header>
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
