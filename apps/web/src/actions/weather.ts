export async function getWeather(): Promise<WeatherDataGroupResponse> {
  const response = await fetch(`${process.env.API_BASE_URL}/api/weather`, {
    cache: "no-cache",
  });

  return await response.json();
}
