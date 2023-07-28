let msg: 'Hello' = 'Hello'

const port3000: number = 3000
const port3001: number = 3001

function startServer(protocol: 'http' | 'https', port: 3000 | 3001 ): 'Server started' {

  if (port === port3000 || port3001) {

  console.log(`Server started on ${protocol}://server:${port}`)
  } else {
    console.error('Invalid port')
  }
  
  
  return 'Server started'
}

startServer('https', 3001)

function createAnimation(id: string | number, 
animName: string, 
timingFunc: 'ease' | 'ease-out' | 'ease-in' = 'ease',
duration: number,
iterCount: number | 'infinity'): void {

  // const elem = document.querySelector(`#${id}`) as HTMLElement

  // if (elem) {
  // elem.style.animation = `${animName} ${timingFunc} ${duration} ${iterCount}`
  console.log(`${animName} ${timingFunc} ${duration} ${iterCount}`)
  // }
}

createAnimation('12ndj232', 'scale', 'ease', 1, 1)
