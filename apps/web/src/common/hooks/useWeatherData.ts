import { useEffect, useState } from "react";
import { getWeather } from "@/actions/weather";
import { WeatherDataGroupResponse, WeatherData } from "@/common/types";

export const useWeatherData = () => {
  const [weatherData, setWeatherData] = useState<WeatherData[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data: WeatherDataGroupResponse = await getWeather();
        setWeatherData(data.list);
      } catch (err) {
        setError("Failed to fetch weather data");
        console.error("Failed to fetch weather data:", err);
      }
    };

    fetchData();
  }, []);

  return { weatherData, error };
};

