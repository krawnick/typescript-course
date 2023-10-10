import Text from './Text'
import Button from './Button'
import './styles.css'

export default function App() {
  return (
    <div className="App">
      <Text>Hello CodeSandbox</Text>
      <Text>Start editing to see some magic happen!</Text>
      <div>
        <Button primary as="a" href="https://google.ru">
          Click me
        </Button>
        <Button secondary type="button" disabled>
          Click me
        </Button>
      </div>
    </div>
  )
}
