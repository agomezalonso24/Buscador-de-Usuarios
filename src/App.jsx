import { useState } from 'react';
import Header from './Header';
import Resultados from './Resultados';
import {mock1} from './constants/users.js'
import './App.css'
import CONFIG from './config/config.js'
import Formulario from './Formulario.jsx';

function App() {
  const [query, setQuery] = useState("");
  const [resultado, setResultado] = useState(null);
  const [error, setError] = useState(null);
  
  const callServer = async (param) => {
    console.log("CLICK!");
    if(CONFIG.use_server){
      try{
        let queryparams;
        if(param==="all"){
          queryparams = '?limit=' + CONFIG.num_items;
        }else{
          queryparams = '/search?q=' + query;
        }
        const response = await fetch(`${CONFIG.server_url}${queryparams}`);
        const data = await response.json();
        console.log(data);
        setResultado(data.users);
    } catch(error){
      console.log(error);
      setError({description: error.message})
    }
    } else {
      setResultado(mock1.users);
    }
  }
  return (
    <div className='App'>
      <Header />
      <h2 id='buscador' >Buscador de usuarios</h2>
      <Formulario query = {query} setQuery={setQuery} callServer={callServer}/>
      <button id='botonall' onClick={()=>callServer("all")}>Buscar Todos</button>
      {error && <h1>Lo sentimos, ha ocurrido un error: {error.description}</h1>}
      {resultado && <Resultados resultado={resultado}/>}
    </div>
  )
}

export default App
