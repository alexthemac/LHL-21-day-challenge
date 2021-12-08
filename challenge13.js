const checkGaugeStatus = (gauge) => {
  if (gauge.current > gauge.min && gauge.current < gauge.max) {
    return true;
  }
  return false;
}

const checkAllGauges = (gaugeList) => {
  for (const gauge of gaugeList) {
    if (!checkGaugeStatus(gauge)) {
      return false;
    }
  }
  return true;
}


const gaugeList = [
  {
    current:0.4,
    min:0.1,
    max:0.9
  },
  {
    current:1.2,
    min:0.1,
    max:0.6
  }
]

console.log(checkAllGauges(gaugeList));