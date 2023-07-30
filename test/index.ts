// let msg: 'Hello' = 'Hello'

// const port3000: number = 3000
// const port3001: number = 3001

const serverConfig: { protocol: 'http' | 'https'; port: 3000 | 3001 } = {
  protocol: 'https',
  port: 3001,
}

const startServer: (protocol: 'http' | 'https', port: 3000 | 3001) => string = (
  protocol: 'http' | 'https',
  port: 3000 | 3001
): 'Server started' => {
  console.log(`Server started on ${protocol}://server:${port}`)

  return 'Server started'
}

// startServer('https', 3001)
startServer(serverConfig.protocol, serverConfig.port)

type AnimationTimingFunc = 'ease' | 'ease-out' | 'ease-in'
type AnimationId = string | number

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
