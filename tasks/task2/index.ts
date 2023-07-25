const electricityUserData = {
  readings: 95,
  units: 'kWt',
  mode: 'double',
}

const waterUserData = {
  readings: 3,
  units: 'm3',
}

const elRate: number = 0.45
const wRate: number = 2

const monthPayments: number[] = [0, 0] // [electricity, water]

const calculatePayments = (elData :{readings: number, mode: string}, wData: {readings: number}, elRate: number, wRate: number) => {
  if (elData.mode === 'double' && elData.readings < 50) {
    monthPayments[0] = elData.readings * elRate * 0.7
  } else {
    monthPayments[0] = elData.readings * elRate
  }

  monthPayments[1] = wData.readings * wRate
}


calculatePayments(electricityUserData, waterUserData, elRate, wRate)
console.log('MP', monthPayments)

const sendInvoice = (monthPayments: number[], {readingsElec, unitsElec, modeElec} : {readingsElec: number, unitsElec :string, modeElec :string}, {readingsWater, unitsWater} : {readingsWater :number, unitsWater :string}) => {
  const text = `    Hello!
    This month you used ${readingsElec} ${unitsElec} of electricity
    It will cost: ${monthPayments[0]}€
    
    This month you used ${readingsWater} ${unitsWater} of water
    It will cost: ${monthPayments[1]}€`

  return text
}

console.log(sendInvoice(electricityUserData, waterUserData, elRate, wRate))
