import React from "react";
import { WeatherData } from "@/common/types";

interface Props {
  weatherData: WeatherData[];
  threshold: number;
}

const WeatherTable: React.FC<Props> = ({ weatherData, threshold }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border-collapse shadow-md rounded-lg">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b border-gray-300 bg-gray-100">
              City
            </th>
            <th className="py-2 px-4 border-b border-gray-300 bg-gray-100">
              Date
            </th>
            <th className="py-2 px-4 border-b border-gray-300 bg-gray-100">
              Temperature
            </th>
            <th className="py-2 px-4 border-b border-gray-300 bg-gray-100">
              Feels Like
            </th>
            <th className="py-2 px-4 border-b border-gray-300 bg-gray-100">
              Min Temp
            </th>
            <th className="py-2 px-4 border-b border-gray-300 bg-gray-100">
              Max Temp
            </th>
            <th className="py-2 px-4 border-b border-gray-300 bg-gray-100">
              Humidity
            </th>
            <th className="py-2 px-4 border-b border-gray-300 bg-gray-100">
              Pressure
            </th>
            <th className="py-2 px-4 border-b border-gray-300 bg-gray-100">
              Wind Speed
            </th>
            <th className="py-2 px-4 border-b border-gray-300 bg-gray-100">
              Coordinates
            </th>
          </tr>
        </thead>
        <tbody>
          {weatherData.map((data) => {
            const temp = data.main.temp ? parseFloat(data.main.temp) : null;
            const isExtremeHeat = temp !== null && temp > threshold;
            const date = new Date(data.dt * 1000).toLocaleDateString();
            return (
              <tr key={data.id} className={isExtremeHeat ? "bg-red-100" : ""}>
                <td
                  className={`py-2 px-4 border-b ${isExtremeHeat ? "border-red-500" : "border-gray-300"}`}
                >
                  {data.name}{" "}
                  {isExtremeHeat && (
                    <span className="text-red-600 font-bold">
                      (Extreme Heat)
                    </span>
                  )}
                </td>
                <td
                  className={`py-2 px-4 border-b ${isExtremeHeat ? "border-red-500" : "border-gray-300"}`}
                >
                  {date}
                </td>
                <td
                  className={`py-2 px-4 border-b ${isExtremeHeat ? "border-red-500" : "border-gray-300"}`}
                >
                  {data.main.temp}
                </td>
                <td
                  className={`py-2 px-4 border-b ${isExtremeHeat ? "border-red-500" : "border-gray-300"}`}
                >
                  {data.main.feels_like}
                </td>
                <td
                  className={`py-2 px-4 border-b ${isExtremeHeat ? "border-red-500" : "border-gray-300"}`}
                >
                  {data.main.temp_min}
                </td>
                <td
                  className={`py-2 px-4 border-b ${isExtremeHeat ? "border-red-500" : "border-gray-300"}`}
                >
                  {data.main.temp_max}
                </td>
                <td
                  className={`py-2 px-4 border-b ${isExtremeHeat ? "border-red-500" : "border-gray-300"}`}
                >
                  {data.main.humidity}
                </td>
                <td
                  className={`py-2 px-4 border-b ${isExtremeHeat ? "border-red-500" : "border-gray-300"}`}
                >
                  {data.main.pressure}
                </td>
                <td
                  className={`py-2 px-4 border-b ${isExtremeHeat ? "border-red-500" : "border-gray-300"}`}
                >
                  {data.wind.speed}
                </td>
                <td
                  className={`py-2 px-4 border-b ${isExtremeHeat ? "border-red-500" : "border-gray-300"}`}
                >{`(${data.coord.lat}, ${data.coord.lon})`}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default WeatherTable;
