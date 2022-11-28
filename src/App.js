import React, {useState} from "react"
import Square from './components/Square';
import './App.css';


function App() {
 
 const [squares, setSquares]= useState(["", "", "", "", "", "","", "", ""])
 const [player, setPlayer]= useState(true)
 
  return (
      < Square 
      squares={squares}
      setSquares={setSquares}
      player ={player}
      setPlayers = {setPlayer}
      />
  );
}

export default App;
