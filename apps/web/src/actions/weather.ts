export async function getWeather(): Promise<WeatherDataGroupResponse> {
  const response = await fetch(`${process.env.API_BASE_URL}/api/weather`, {
    cache: "no-cache",
  });

  if (!response.ok) {
    const errorText = await response.text();
    console.error(
      `Failed to fetch weather data: ${response.statusText}`,
      errorText
    );
    throw new Error(`Failed to fetch weather data: ${response.statusText}`);
  }

  const data: WeatherDataGroupResponse = await response.json();
  return data;
}
