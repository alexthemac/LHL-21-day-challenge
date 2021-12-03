const bookFreePlatform = (platformList, missionDate) => {
  for (const platform of platformList) {
    if (platform.bookDate === undefined && missionDate) {
      platform.bookDate = missionDate;
      return platformList;
    }
  }
}

const platformList = [
  {
    name:"Platform A",
    bookDate:"2021-12-11"
  },
  {
    name:"Platform B",
    bookDate:undefined
  },
  {
    name:"Platform C",
    bookDate:"2022-01-12"
  },
]  
const missionDate = "2021-12-12"

console.log(bookFreePlatform(platformList, missionDate));