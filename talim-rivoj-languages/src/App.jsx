import { useState } from 'react'
import TelegramBotForm from './TelegramBotForm.jsx'
import LandingHomePage from './LandingHomePage.jsx'
import YuborishTgPage from './YuborishTgPage.jsx'
import {Routes , Route} from 'react-router-dom'
function App() {
  const [turk , setTurk] = useState('https://t.me/+gSrDzdbWQac1NmYy')
  const [engilish , setEngilish] = useState('https://t.me/+08inHuxoGCUyNWFi')
  const [rus , setRus] = useState('https://t.me/+LNT3E33_0IYyYzZi')
  const [tillar , setTillar] = useState(turk)

  return (
   <div className="App">
        <Routes>
          <Route path='/' element={< LandingHomePage /> }/>
          <Route path="register" element={< TelegramBotForm setTillar={setTillar} turk={turk} engilish={engilish} rus={rus}/>} />
          <Route path="register/tgkanal" element={<YuborishTgPage tillar={tillar}/>} />
        </Routes>
   </div>
  )
}

export default App
