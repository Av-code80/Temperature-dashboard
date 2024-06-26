import { WeatherData, SortableKeys } from "@/common/types";

export const filterWeatherData = (
  data: WeatherData[],
  threshold: number,
  showOnlyExtremeHeat: boolean
) => {
  return showOnlyExtremeHeat
    ? data.filter(
        (city: WeatherData) =>
          city.main.temp && parseFloat(city.main.temp) > threshold
      )
    : data;
};

export const sortWeatherData = (
  data: WeatherData[],
  sortConfig: { key: SortableKeys; direction: "ascending" | "descending" }
) => {
  return [...data].sort((a, b) => {
    const aValue = getNestedValue(a, sortConfig.key);
    const bValue = getNestedValue(b, sortConfig.key);

    if (aValue < bValue) {
      return sortConfig.direction === "ascending" ? -1 : 1;
    }
    if (aValue > bValue) {
      return sortConfig.direction === "ascending" ? 1 : -1;
    }
    return 0;
  });
};

const getNestedValue = (obj: any, key: string) => {
  return key.split(".").reduce((acc, part) => acc && acc[part], obj);
};
