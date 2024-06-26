import React from "react";
import { render } from "@testing-library/react";
import { CSVLink } from "react-csv";
import CsvDownloadButton from "@/components/CsvDownloadButton";
import { WeatherData } from "@/common/types";

const weatherData: WeatherData[] = [
  {
    coord: { lon: 139, lat: 35 },
    weather: [
      { id: 800, main: "Clear", description: "clear sky", icon: "01n" },
    ],
    base: "stations",
    main: {
      temp: "296.71",
      feels_like: 298.5,
      temp_min: "296.71",
      temp_max: "296.71",
      pressure: 1013,
      humidity: 53,
    },
    visibility: 10000,
    wind: { speed: 4.1, deg: 80 },
    clouds: { all: 0 },
    dt: 1560350192,
    sys: {
      type: 1,
      id: 8074,
      country: "JP",
      sunrise: 1560281377,
      sunset: 1560333478,
    },
    timezone: 32400,
    id: 1851632,
    name: "Shuzenji",
    cod: 200,
  },
];

describe("CsvDownloadButton", () => {
  it("renders without crashing", () => {
    const { getByText } = render(
      <CsvDownloadButton
        weatherData={weatherData}
        filename="weather_data.csv"
      />
    );
    expect(getByText("Download CSV")).toBeInTheDocument();
  });

  it("renders CSVLink correctly", () => {
    const { container } = render(
      <CsvDownloadButton
        weatherData={weatherData}
        filename="weather_data.csv"
      />
    );
    expect(container.querySelector("a")).toHaveAttribute(
      "download",
      "weather_data.csv"
    );
  });
});
