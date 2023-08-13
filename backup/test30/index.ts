// const TOP = 'Top'
// const RIGHT = 'Right'

enum Directions {
  TOP,
  RIGHT,
  LEFT,
  BOTTOM,
}

enum TimingFunc {
  EASE = 'ease',
  EASE_IN = 'easi-in',
  LINEAR = 'linear',
}

function frame(elem: string, dir: Directions, tFunc: TimingFunc): void {
  if (dir === Directions.RIGHT) {
    console.log(tFunc)
  }
}

frame('id', Directions.RIGHT, TimingFunc.LINEAR)
