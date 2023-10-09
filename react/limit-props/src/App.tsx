import { Button } from './Button'
import { IoArrowRedoCircleSharp, IoCheckmarkSharp } from 'react-icons/io5'

import './styles.css'

export const App = () => {
  return (
    <div className="App">
      {/* <Button primary secondary>Click me</Button> */}
      <Button primary>Click me</Button>
      <Button secondary>Click me</Button>
      <Button primary arrow>
        Click me
      </Button>
      <Button secondary icon={<IoArrowRedoCircleSharp />}>
        Click me
      </Button>
      <Button secondary icon={<IoCheckmarkSharp />}>
        Click me
      </Button>
    </div>
  )
}
