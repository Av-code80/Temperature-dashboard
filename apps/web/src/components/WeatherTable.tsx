import React from "react";
import { WeatherData } from '@/common/types';

interface Props {
  weatherData: WeatherData[];
  threshold: number;
}

const WeatherTable: React.FC<Props> = ({ weatherData, threshold }) => {
  return (
    <table className="min-w-full bg-white">
      <thead>
        <tr>
          <th className="py-2">City</th>
          <th className="py-2">Temperature</th>
          <th className="py-2">Coordinates</th>
        </tr>
      </thead>
      <tbody>
        {weatherData.map((data) => {
          const temp = data.main.temp ? parseFloat(data.main.temp) : null;
          const isExtremeHeat = temp !== null && temp > threshold;
          return (
            <tr key={data.name} className={isExtremeHeat ? 'bg-red-100' : ''}>
              <td className="py-2">{data.name}</td>
              <td className="py-2">{data.main.temp}</td>
              <td className="py-2">{`(${data.coord.lat}, ${data.coord.lon})`}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default WeatherTable;
