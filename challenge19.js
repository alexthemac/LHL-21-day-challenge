const organizeData = (receivedData) => {
  organizedData = {};
  receivedData.forEach((dataPoint) => {
    if (!organizedData[dataPoint.type]) {
      organizedData[dataPoint.type] = [dataPoint.data];
    } else {
      organizedData[dataPoint.type].push(dataPoint.data);
    }
  });
  return organizedData;
};

const listOfReceivedData = [
  {type: "astro", data: "Saturn Data"},
  {type: "bio", data: "Space Potatoes"},
  {type: "physics", data: "Lagrange Points"},
  {type: "bio", data: "OMG Tardigrades"},
  {type: "physics", data: "Material reflectivity"},
  {type: "astro", data: "Mercury is not the hottest"},
];
    

console.log(organizeData(listOfReceivedData));