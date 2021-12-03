const storeWeatherConditions = (temperature, condition, windSpeed, windDirection) => {
  const weatherConditions = { 
    temperature: Math.round((temperature - 32) * 5/9), 
    condition, 
    windSpeed: Math.round(windSpeed / 2.237), 
    windDirection 
  };
  return weatherConditions;
}
