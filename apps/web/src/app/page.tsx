"use client";

import React, { useState } from "react";
import Image from "next/image";
import { usePersistData } from "@/components/use-keep-data";
import WeatherTable from "@/components/WeatherTable";
import { SortableKeys } from "@/common/types";
import TemperatureThresholdForm from "@/components/TempThresholdForm";
import CsvDownloadButton from "@/components/CsvDownloadButton";
import { filterWeatherData, sortWeatherData } from "@/utils/weatherUtils";
import { useWeatherData } from "@/common/hooks/useWeatherData";

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

  const data = usePersistData(weatherData) || [];

  const filteredData = filterWeatherData(data, threshold, showOnlyExtremeHeat);
  const sortedData = sortWeatherData(filteredData, sortConfig);

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

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
      <article className="flex justify-between items-center mb-4">
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
