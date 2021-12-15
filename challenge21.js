const parseMessage = (origin, message) => {
  return `${origin}: ${message}`;
};

const parseMissionSummary = (exchanges, missionData) => {
  let transcript = [];
  exchanges.forEach((exchange) => {
    transcript.push(parseMessage(exchange.origin, exchange.message));
  });
  return { transcript, missionData };
};

const exchanges = [
  {origin:"MC", message:"So how is it out there?"},
  {origin:"Shuttle", message:"Oh it's pretty nice!"},
  {origin:"MC", message:"Did you like the challenges?"},
];
   
const missionData = {
  astro:["...","..."], 
  bio:["..."], 
  physics:["..."]
};

console.log(parseMissionSummary(exchanges, missionData));