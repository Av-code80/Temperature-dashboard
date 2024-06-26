import React from "react";
import { CSVLink } from "react-csv";
import { WeatherData } from "@/common/types";

interface Props {
  weatherData: WeatherData[];
  filename: string;
}

const CsvDownloadButton: React.FC<Props> = ({ weatherData, filename }) => {
  const headers = [
    { label: "City", key: "name" },
    { label: "Date", key: "date" },
    { label: "Temperature", key: "temp" },
    { label: "Feels Like", key: "feels_like" },
    { label: "Min Temp", key: "temp_min" },
    { label: "Max Temp", key: "temp_max" },
    { label: "Humidity", key: "humidity" },
    { label: "Pressure", key: "pressure" },
    { label: "Wind Speed", key: "wind_speed" },
    { label: "Coordinates", key: "coordinates" },
  ];

  const data = weatherData.map((data) => ({
    name: data.name,
    date: new Date(data.dt * 1000).toLocaleDateString(),
    temp: data.main.temp,
    feels_like: data.main.feels_like,
    temp_min: data.main.temp_min,
    temp_max: data.main.temp_max,
    humidity: data.main.humidity,
    pressure: data.main.pressure,
    wind_speed: data.wind.speed,
    coordinates: `(${data.coord.lat}, ${data.coord.lon})`,
  }));

  return (
    <CSVLink
      data={data}
      headers={headers}
      filename={filename}
      className="p-2 bg-blue-500 text-white rounded"
    >
      Download CSV
    </CSVLink>
  );
};

export default CsvDownloadButton;
