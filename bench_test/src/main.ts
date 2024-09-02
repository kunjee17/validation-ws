import { time, iterations } from './bench_config'
import './style.css'
import { startBenching } from './table_ui'


document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>Benchmarking</h1>
    <div class="bench-info">
      <div class="bench-time">
        <strong>Time:</strong> <span id="bench-time">${time} ms</span>
      </div>
      <div class="bench-iterations">
        <strong>Iterations:</strong> <span id="bench-iterations">${iterations}</span>
      </div>
    </div>
    <div class="card">
      <button id="counter" type="button">Start</button>
    </div>
    
    <table id="bench"></table>
  </div>
`

startBenching(document.querySelector<HTMLButtonElement>('#counter')!, document.querySelector<HTMLDivElement>("#bench")!)
