const switchToggle = (toggle) => {
  toggle.isOn = !toggle.isOn;
  return toggle;
}

const switchSpecificToggle = (toggleList, specificToggle) => {
  for (let toggle of toggleList) {
    if (toggle.name === specificToggle) {
      toggle = switchToggle(toggle);
      return toggleList;
    }
  }
}

const toggleList = [
  {
    name: "toggleA",
    isOn: false
    }, 
  {
    name: "toggleB",
    isOn: true
  }
]
const specificToggle = "toggleA";
    
console.log(switchSpecificToggle(toggleList, specificToggle));