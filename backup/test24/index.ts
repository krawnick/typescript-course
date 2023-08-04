// let msg: 'Hello' = 'Hello'

// const port3000: number = 3000
// const port3001: number = 3001

type AnimationTimingFunc = 'ease' | 'ease-out' | 'ease-in'
type AnimationId = string | number
// type Config = { protocol: 'http' | 'https'; port: 3000 | 3001 }
// type Role = { role: string }
// type ConfigWitchRole = Config & Role

interface Config {
  protocol: 'http' | 'https'
  port: 3000 | 3001
  log: (msg: string) => void
}

interface Role {
  role: string
}

interface ConfigWithRole extends Config, Role {}

// const serverConfig: Config = {
//   protocol: 'https',
//   port: 3001,
// }

// const backupConfig: Config = {
//   protocol: 'http',
//   port: 3000,
// }

const serverConfig: ConfigWithRole = {
  protocol: 'https',
  port: 3001,
  role: 'admin',
  log: (msg: string): void => console.log(msg),
}

// const backupConfig: ConfigWitchRole = {
//   protocol: 'http',
//   port: 3000,
//   role: 'sysadmin'
// }

type StartFunction = (
  protocol: 'http' | 'https',
  port: 3000 | 3001,
  log: (msg: string) => void
) => string

const startServer: StartFunction = (
  protocol: 'http' | 'https',
  port: 3000 | 3001,
  log: (msg: string) => void
): 'Server started' => {
  return 'Server started'
}

// startServer('https', 3001)
startServer(serverConfig.protocol, serverConfig.port, serverConfig.log)

function createAnimation(
  id: AnimationId,
  animName: string,
  timingFunc: AnimationTimingFunc = 'ease',
  duration: number,
  iterCount: number | 'infinity'
): void {
  // const elem = document.querySelector(`#${id}`) as HTMLElement

  // if (elem) {
  // elem.style.animation = `${animName} ${timingFunc} ${duration} ${iterCount}`
  console.log(`${animName} ${timingFunc} ${duration} ${iterCount}`)
  // }
}

createAnimation('12ndj232', 'scale', 'ease', 1, 1)

// Индексные свойства

interface Styles {
  [key: string]: string
}

const styles: Styles = {
  position: 'absolute',
  top: '20px',
  left: '50px',
}
