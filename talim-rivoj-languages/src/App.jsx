import { useState } from 'react'
import TelegramBotForm from './TelegramBotForm.jsx'
import LandingHomePage from './LandingHomePage.jsx'
import YuborishTgPage from './YuborishTgPage.jsx'
import {Routes , Route} from 'react-router-dom'
function App() {

  const [tillar , setTillar] = useState("https://t.me/+gSrDzdbWQac1NmYy")

  return (
   <div className="App">
        <Routes>
          <Route path='/' element={< LandingHomePage /> }/>
          <Route path="register" element={< TelegramBotForm setTillar={setTillar} tillar={tillar}/>} />
          <Route path="register/tgkanal" element={<YuborishTgPage tillar={tillar}/>} />
        </Routes>
   </div>
  )
}

export default App
