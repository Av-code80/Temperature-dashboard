import React from "react";
import { WeatherData, SortableKeys } from "@/common/type/types";
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

/**
 * WeatherTable component that displays weather data in a sortable and filterable table.
 */
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
    <div
      className="overflow-x-auto"
      role="table"
      aria-label="Weather data table"
    >
      <table className="min-w-full bg-white border-collapse shadow-md rounded-lg table-border-gradient transition-ease">
        <thead>
          <tr>
            {[
              { key: "name", label: "City" },
              { key: "dt", label: "Date" },
              { key: "main.temp", label: "Temperature" },
              { key: "main.feels_like", label: "Feels Like" },
              { key: "main.temp_min", label: "Min Temp" },
              { key: "main.temp_max", label: "Max Temp" },
              { key: "main.humidity", label: "Humidity" },
              { key: "main.pressure", label: "Pressure" },
              { key: "wind.speed", label: "Wind Speed" },
              { key: "coord.lat", label: "Latitude" },
              { key: "coord.lon", label: "Longitude" },
            ].map(({ key, label }) => (
              <th
                key={key}
                className={`py-2 px-4 border-b border-gray-300 bg-gray-100 cursor-pointer ${getClassNamesFor(
                  key as SortableKeys
                )}`}
                onClick={() => requestSort(key as SortableKeys)}
                scope="col"
                aria-sort={
                  sortConfig.key === key
                    ? sortConfig.direction === "ascending"
                      ? "ascending"
                      : "descending"
                    : "none"
                }
              >
                {label} {renderSortIcon(key as SortableKeys)}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {weatherData.map((data) => {
            const temp = data.main.temp ? parseFloat(data.main.temp) : null;
            const isExtremeHeat = temp !== null && temp > threshold;
            const date = new Date(data.dt * 1000).toLocaleDateString();
            return (
              <tr
                key={data.id}
                className={
                  isExtremeHeat
                    ? "bg-blue-100 table-cell-hover"
                    : "table-cell-hover"
                }
              >
                <td
                  className={`py-2 px-4 border-b ${isExtremeHeat ? "border-red-500" : "border-gray-300"}`}
                  role="cell"
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
                  role="cell"
                >
                  {date}
                </td>
                <td
                  className={`py-2 px-4 border-b ${isExtremeHeat ? "border-red-500" : "border-gray-300"}`}
                  role="cell"
                >
                  {data.main.temp}
                </td>
                <td
                  className={`py-2 px-4 border-b ${isExtremeHeat ? "border-red-500" : "border-gray-300"}`}
                  role="cell"
                >
                  {data.main.feels_like}
                </td>
                <td
                  className={`py-2 px-4 border-b ${isExtremeHeat ? "border-red-500" : "border-gray-300"}`}
                  role="cell"
                >
                  {data.main.temp_min}
                </td>
                <td
                  className={`py-2 px-4 border-b ${isExtremeHeat ? "border-red-500" : "border-gray-300"}`}
                  role="cell"
                >
                  {data.main.temp_max}
                </td>
                <td
                  className={`py-2 px-4 border-b ${isExtremeHeat ? "border-red-500" : "border-gray-300"}`}
                  role="cell"
                >
                  {data.main.humidity}
                </td>
                <td
                  className={`py-2 px-4 border-b ${isExtremeHeat ? "border-red-500" : "border-gray-300"}`}
                  role="cell"
                >
                  {data.main.pressure}
                </td>
                <td
                  className={`py-2 px-4 border-b ${isExtremeHeat ? "border-red-500" : "border-gray-300"}`}
                  role="cell"
                >
                  {data.wind.speed}
                </td>
                <td
                  className={`py-2 px-4 border-b ${isExtremeHeat ? "border-red-500" : "border-gray-300"}`}
                  role="cell"
                >
                  {data.coord.lat}
                </td>
                <td
                  className={`py-2 px-4 border-b ${isExtremeHeat ? "border-red-500" : "border-gray-300"}`}
                  role="cell"
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
