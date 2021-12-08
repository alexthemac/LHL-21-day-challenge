const timeRemaining = (launchDate, missionName, fakeToday) => {
  const today = fakeToday || new Date(); // Do not alter this line!
  const millisecondsRemaining = new Date(launchDate) - new Date(today);
  const daysRemaining = millisecondsRemaining / (1000 * 60 * 60 * 24);
  const missionDetails = {
    missionName,
    daysRemaining
  }
  return missionDetails;
}

const launchDate = "2021-12-12";
const fakeToday = "2021-12-01";
const missionName = "Moon visit";


console.log(timeRemaining(launchDate, missionName, fakeToday));