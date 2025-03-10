export interface Coord {
  lon: number;
  lat: number;
}

export interface Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface Main {
  temp: string | null;
  feels_like: number;
  temp_min: string | null;
  temp_max: string | null;
  pressure: number;
  humidity: number;
}

export interface Wind {
  speed: number;
  deg: number;
}

export interface Clouds {
  all: number;
}

export interface Sys {
  type: number;
  id: number;
  country: string;
  sunrise: number;
  sunset: number;
}

export interface WeatherData {
  coord: Coord;
  weather: Weather[];
  base: string;
  main: Main;
  visibility: number;
  wind: Wind;
  clouds: Clouds;
  dt: number;
  sys: Sys;
  timezone: number;
  id: number;
  name: string;
  cod: number;
}

export interface WeatherDataGroupResponse {
  cnt: number;
  list: WeatherData[];
}

export type SortableKeys =
  | "name"
  | "dt"
  | "main.temp"
  | "main.feels_like"
  | "main.temp_min"
  | "main.temp_max"
  | "main.humidity"
  | "main.pressure"
  | "wind.speed"
  | "coord.lat"
  | "coord.lon";
