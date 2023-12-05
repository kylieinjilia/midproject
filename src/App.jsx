import { useState } from 'react'
import './assets/css/aos.css'
import './assets/css/bootstrap.min.css'
import './assets/css/main.css'
import HomePage from './pages/homepages'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <HomePage/>
    </>
  )
}

export default App
