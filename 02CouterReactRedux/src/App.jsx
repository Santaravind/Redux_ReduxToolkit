import { useState } from 'react'

import './App.css'
import Header from './Component/Header'
import DisplayCounter from './Component/DisplayCounter'
import Controlers from './Component/Controlers'
import PrivacyMess from './Component/PrivacyMess'
import { useSelector } from 'react-redux'

function App() {
  const privecy =useSelector(store=>store.privecy)  

  return (
    
    <center>  
       <div className='border-2 w-fit text-center items-center justify-center p-4'>
      <Header/>
      {privecy?<PrivacyMess/>: <DisplayCounter/>}
     <Controlers/>
    </div>
    </center>
  
  )
}

export default App
