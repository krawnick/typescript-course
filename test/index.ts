const arr: Array<number> = [1, 2, 3]
const arr1: number[] = [1, 2, 3]

const roarr: ReadonlyArray<string> = ['abc']
// roarr[0] = 'weqw'

interface IState {
  readonly data: {
    name: string
  }
  tag?: string
}

const state: Partial<IState> = {
  data: {
    name: 'John',
  },
}

const strictState: Required<IState> = {
  data: {
    name: 'qwerty',
  },
  tag: 'zxcvb',
}

// state.data = 'qwe'
// strictState.data = 'qwe'

function action(state: Readonly<IState>) {
  state.data.name = 'abc'
}
