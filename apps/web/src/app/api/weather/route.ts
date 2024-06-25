"use server";

import { NextResponse } from "next/server";

/**
 * Treat this file as an API controller
 *
 * This file is only here to mimic an API. In the real world, we use NestJS
 * but this is not the purpose of the test.
 */

// Exemple d'objet conforme à l'interface WeatherData
// const weatherData: WeatherData = {
//   coord: { lon: 2.3488, lat: 48.8534 },
//   weather: [{ id: 800, main: 'Clear', description: 'clear sky', icon: '01d' }],
//   base: 'stations',
//   main: {
//     temp: 297.34,
//     feels_like: 297.54,
//     temp_min: 296.48,
//     temp_max: 298.29,
//     pressure: 1012,
//     humidity: 66
//   },
//   visibility: 10000,
//   wind: { speed: 3.09, deg: 210 },
//   clouds: { all: 0 },
//   dt: 1718722113,
//   sys: {
//     type: 2,
//     id: 2012208,
//     country: 'FR',
//     sunrise: 1718682396,
//     sunset: 1718740622
//   },
//   timezone: 7200,
//   id: 2988507,
//   name: 'Paris',
//   cod: 200
// };

const cities = [
  2800866, // Belgium (Brussels)
  727011, // Bulgaria (Sofia)
  3186886, // Croatia (Zagreb)
  3067696, // Czech Republic (Prague)
  2618425, // Denmark (Copenhagen)
  588409, // Estonia (Tallinn)
  658225, // Finland (Helsinki)
  2988507, // France (Paris)
  2950159, // Germany (Berlin)
  264371, // Greece (Athens)
  3413829, // Iceland (Reykjavik)
  3169070, // Italy (Rome)
  3042030, // Liechtenstein (Vaduz)
  3168070, // San Marino (San Marino)
  792680, // Serbia (Belgrade)
  3060972, // Slovakia (Bratislava)
  3196359, // Slovenia (Ljubljana)
  2661552, // Switzerland (Bern)
  2643743, // United Kingdom (London)
  6691831, // Vatican City (Vatican City)
];

export async function GET(_request: Request) {
  if (!process.env.OPEN_WEATHER_MAP_API_URL) {
    throw new Error('Missing "OPEN_WEATHER_MAP_API_URL"');
  }
  if (!process.env.OPEN_WEATHER_MAP_API_KEY) {
    throw new Error('Missing "OPEN_WEATHER_MAP_API_KEY"');
  }

  const newApiUrl = new URL(process.env.OPEN_WEATHER_MAP_API_URL);

  newApiUrl.searchParams.set("appid", process.env.OPEN_WEATHER_MAP_API_KEY);
  newApiUrl.searchParams.set("id", cities.join(","));

  const response = await fetch(newApiUrl, {
    next: { tags: ["openWeatherApiGET"] },
  });

  return NextResponse.json(await response.json());
}
