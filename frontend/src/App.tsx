import { useEffect, useState } from 'react'
import reactLogo from './logo.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [message, setMessage] = useState(" ");

  useEffect(() => {
    fetch("http://127.0.0.1:5000/hello").then(response => response.json()).then(data => { setMessage(data.message) });

  }, [])

  return (
    <>
      <div>
          <img src={reactLogo} className="logo react" alt="React logo" />
      </div>
      <h1>React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <h1 className="logo react">{message}</h1>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
    </>
  )
}

export default App
