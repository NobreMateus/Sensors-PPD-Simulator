import './App.css';
import { io } from "socket.io-client";
import { useState } from 'react';
import SensorStatus from './components/SensorStatus';

const socket = io("http://localhost:4000");

function App() {

  const [showTemp, setShowTemp] = useState(true)
  const [showUmid, setShowUmid] = useState(false)
  const [showVeloc, setShowVeloc] = useState(false)



  return (
    <div className="container">
      <div className="buttons-area">
        <div onClick={()=>{setShowTemp(old=>!old)}} className="button"  style={{boxShadow: showTemp?"none":"6px 4px 10px gray"}}>Temperatura</div>
        <div onClick={()=>{setShowUmid(old=>!old)}} className="button"  style={{boxShadow: showUmid?"none":"6px 4px 10px gray"}}>Umidade</div>
        <div onClick={()=>{setShowVeloc(old=>!old)}} className="button" style={{boxShadow: showVeloc?"none":"6px 4px 10px gray"}}>velocidade</div>
      </div>

    <div className="App">
      {showTemp && <SensorStatus socket={socket} sensor="temperatura" />}
      {showUmid && <SensorStatus socket={socket} sensor="umidade" />}
      {showVeloc && <SensorStatus socket={socket} sensor="velocidade" />}
    </div>
    </div>
  );
}

export default App;
