const switchAllTogglesOn = (toggleList) => {
  toggleList.forEach((toggle) => {
    toggle.isOn = true;
  })
  return toggleList;
}

const toggleList = [
	{
		name:"Air",
		isOn:true
	},
	{
		name:"Radio",
		isOn:false
	},
]
    
console.log(switchAllTogglesOn(toggleList));