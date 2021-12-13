
const chooseLunchWinner = (listOfChoices) => {
  let lunches = {};
  listOfChoices.forEach((choice) => {
    if (!lunches[choice]) {
      lunches[choice] = 1;
    } else {
      lunches[choice]++;
    }
  });
  const highestVotes = Object.keys(lunches).reduce((a, b) => lunches[a] > lunches[b] ? a : b);
  return highestVotes;
};

const listOfChoices = [
  "Chicken Dinner",
  "Chicken Dinner",
  "Chicken Dinner",
  "Ice Cream Sandwich", 
  "Ice Cream Sandwich"
];

console.log(chooseLunchWinner(listOfChoices));