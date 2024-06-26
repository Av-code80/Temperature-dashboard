import React from "react";
import { WeatherData, SortableKeys } from "@/common/types";
import { FaSort, FaSortUp, FaSortDown } from "react-icons/fa";

interface Props {
  weatherData: WeatherData[];
  threshold: number;
  onSort: (sortConfig: {
    key: SortableKeys;
    direction: "ascending" | "descending";
  }) => void;
  sortConfig: { key: SortableKeys; direction: "ascending" | "descending" };
}

const WeatherTable: React.FC<Props> = ({
  weatherData,
  threshold,
  onSort,
  sortConfig,
}) => {
  const requestSort = (key: SortableKeys) => {
    let direction: "ascending" | "descending" = "ascending";
    if (sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }
    onSort({ key, direction });
  };

  const getClassNamesFor = (key: SortableKeys) => {
    if (sortConfig.key === key) {
      return sortConfig.direction === "ascending" ? "asc" : "desc";
    }
    return "";
  };

  const renderSortIcon = (key: SortableKeys) => {
    if (sortConfig.key === key) {
      if (sortConfig.direction === "ascending") {
        return <FaSortUp />;
      } else {
        return <FaSortDown />;
      }
    } else {
      return <FaSort />;
    }
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border-collapse shadow-md rounded-lg">
        <thead>
          <tr>
            <th
              className={`py-2 px-4 border-b border-gray-300 bg-gray-100 cursor-pointer ${getClassNamesFor("name")}`}
              onClick={() => requestSort("name")}
            >
              City {renderSortIcon("name")}
            </th>
            <th
              className={`py-2 px-4 border-b border-gray-300 bg-gray-100 cursor-pointer ${getClassNamesFor("dt")}`}
              onClick={() => requestSort("dt")}
            >
              Date {renderSortIcon("dt")}
            </th>
            <th
              className={`py-2 px-4 border-b border-gray-300 bg-gray-100 cursor-pointer ${getClassNamesFor("main.temp")}`}
              onClick={() => requestSort("main.temp")}
            >
              Temperature {renderSortIcon("main.temp")}
            </th>
            <th
              className={`py-2 px-4 border-b border-gray-300 bg-gray-100 cursor-pointer ${getClassNamesFor("main.feels_like")}`}
              onClick={() => requestSort("main.feels_like")}
            >
              Feels Like {renderSortIcon("main.feels_like")}
            </th>
            <th
              className={`py-2 px-4 border-b border-gray-300 bg-gray-100 cursor-pointer ${getClassNamesFor("main.temp_min")}`}
              onClick={() => requestSort("main.temp_min")}
            >
              Min Temp {renderSortIcon("main.temp_min")}
            </th>
            <th
              className={`py-2 px-4 border-b border-gray-300 bg-gray-100 cursor-pointer ${getClassNamesFor("main.temp_max")}`}
              onClick={() => requestSort("main.temp_max")}
            >
              Max Temp {renderSortIcon("main.temp_max")}
            </th>
            <th
              className={`py-2 px-4 border-b border-gray-300 bg-gray-100 cursor-pointer ${getClassNamesFor("main.humidity")}`}
              onClick={() => requestSort("main.humidity")}
            >
              Humidity {renderSortIcon("main.humidity")}
            </th>
            <th
              className={`py-2 px-4 border-b border-gray-300 bg-gray-100 cursor-pointer ${getClassNamesFor("main.pressure")}`}
              onClick={() => requestSort("main.pressure")}
            >
              Pressure {renderSortIcon("main.pressure")}
            </th>
            <th
              className={`py-2 px-4 border-b border-gray-300 bg-gray-100 cursor-pointer ${getClassNamesFor("wind.speed")}`}
              onClick={() => requestSort("wind.speed")}
            >
              Wind Speed {renderSortIcon("wind.speed")}
            </th>
            <th
              className={`py-2 px-4 border-b border-gray-300 bg-gray-100 cursor-pointer ${getClassNamesFor("coord.lat")}`}
              onClick={() => requestSort("coord.lat")}
            >
              Latitude {renderSortIcon("coord.lat")}
            </th>
            <th
              className={`py-2 px-4 border-b border-gray-300 bg-gray-100 cursor-pointer ${getClassNamesFor("coord.lon")}`}
              onClick={() => requestSort("coord.lon")}
            >
              Longitude {renderSortIcon("coord.lon")}
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
                >
                  {data.coord.lat}
                </td>
                <td
                  className={`py-2 px-4 border-b ${isExtremeHeat ? "border-red-500" : "border-gray-300"}`}
                >
                  {data.coord.lon}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default WeatherTable;
