import './assets/style.css'
import electronLogo from './assets/electron.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.electronjs.org/" target="_blank">
      <img src="${electronLogo}" class="logo" alt="Electron logo" />
    </a>
    <h1>Hello Vite + Electron!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="version">
      This app is using Chrome (v${versions.chrome()}), Node.js (v${versions.node()}), and Electron (v${versions.electron()})
    </p>
  </div>
`

setupCounter(document.querySelector('#counter'))
