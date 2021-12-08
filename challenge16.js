const getAverageSpeed = (firstPosition, secondPosition) => {
  const deltaT =  secondPosition.time - firstPosition.time;
  const deltaA = secondPosition.altitude - firstPosition.altitude;
  const avgSpeed = Math.round(10 * (deltaA / deltaT)) / 10;
  return avgSpeed;
}

const firstPosition = {
  time: 1637074462,
  altitude: 1100
}
const secondPosition = {
  time: 1637074558,
  altitude: 2200
}
  
console.log(getAverageSpeed(firstPosition, secondPosition));