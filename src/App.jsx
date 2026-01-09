import { useState } from 'react'
import './App.css'
import Home from './Component/Home/Home'
import Game from './Component/Game/Game';
export default function App() {
  const [isGameStarted, SetisGameStarted] = useState(false);
  const handleplay = () => {
    SetisGameStarted(true)
  }
  return (
 
       <>
    
      {
        !isGameStarted? (<Home onplaynow={handleplay}/> ) :( <Game/>)
      }
    </>
  )
}
