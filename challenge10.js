const averageWindSpeed = (weatherEntries) => {
  let totalWindspeed = 0;
  weatherEntries.forEach((entry) => {
    totalWindspeed = totalWindspeed + entry.windSpeed;
  });
  return Math.round(totalWindspeed / weatherEntries.length);
}
