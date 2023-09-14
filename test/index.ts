interface IEngine {
  model: string
  capacity: number
  startEngine: (time: Date) => string
}

abstract class AbstactVehicle {
  model: string
  capacity: number

  abstract startEngine: (time: Date) => string

  stopEngine(time: Date): string {
    this.startEngine(new Date())
    return `Engine stoped`
  }
}

// class Vehicle implements IEngine {
class Vehicle extends AbstactVehicle {
  // model: string
  // capacity: number

  startEngine = (time: Date) => {
    return `Engine started: ${time}`
  }
}
