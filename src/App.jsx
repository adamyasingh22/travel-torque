import { useState } from 'react'
import Header from './component/header'
import './App.css'
import Swipers from './component/swiper'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Header/>
     <Swipers/>
    </>
  )
}

export default App
