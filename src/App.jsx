import { useState } from 'react';
import Header from './Header';
import Resultados from './Resultados';
import {mock1} from './constants/users.js'
import './App.css'

function App() {
  const [query, setQuery] = useState("");
  const [resultado, setResultado] = useState(null);
  
  const callServer = () => {
    console.log("CLICK!");
    setResultado(mock1.users);
  }
  return (
    <div className='App'>
      <Header />
      <h2 id='buscador' >Buscador de usuarios</h2>
      <input type="text" id='query' value={query} onChange={e=>setQuery(e.target.value)} placeholder='Texto a buscar'/>
      <button id='bottonsearch' onClick={()=>callServer()}>Buscar</button>

      {resultado && <Resultados resultado={resultado}/>}
    </div>
  )
}

export default App
