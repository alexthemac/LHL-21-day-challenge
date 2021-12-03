const listAstronautJobs = (roster) => {
  let jobsArray = [];
  roster.forEach((astronaut) => {
    jobsArray.push(astronaut.job);
  })
  return jobsArray;
}