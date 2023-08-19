const box = document.querySelector('.box') as HTMLElement

const input = document.querySelector('input') // as HTMLInputElement

input?.value

const link = document.querySelector('a') // as HTMLAnchorElement
const links = document.querySelectorAll('a')

// link?.href

// if (link) {
//   link.href
// }

const p = document.querySelector('.paragraph') as HTMLParagraphElement

const elem = document.createElement('a')

link?.addEventListener('click', (e) => {
  e.preventDefault()
})
