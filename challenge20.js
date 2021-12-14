const confirmReentryPlans = (speed, missionData, checks) => {
  let boolReturn = true;
  if (speed > checks.maxSpeed || speed < checks.minSpeed) {
    boolReturn = false;
  }
  Object.keys(checks.dataEntries).forEach((type) => {
    if (missionData[type].length !== checks.dataEntries[type]){
      boolReturn = false;
    }
  });
  return boolReturn;
};

const speed = 40
const missionData = {
  astro:["...","..."], 
  bio:["..."], 
  physics:["..."]
}

const checks = {
  maxSpeed:50,
  minSpeed:20,
  dataEntries:{
    astro:3,
    bio:1,
    physics:1
  }
}
  
console.log(confirmReentryPlans(speed, missionData, checks));