import { useState } from 'react'
import TelegramBotForm from './TelegramBotForm.jsx'
import LandingHomePage from './LandingHomePage.jsx'

function App() {

  const [modal , setModal] = useState("none")
  function openModal(){
    setModal('Modal')
  }
  function closeModal(){
    setModal('none')
  }
  return (
   <div className="App">
        <TelegramBotForm modal={modal} closeModal={closeModal}/>
        <LandingHomePage openModal={openModal} />
   </div>
  )
}

export default App
