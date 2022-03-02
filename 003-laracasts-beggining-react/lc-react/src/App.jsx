import logo from './logo.svg';
import OutroComponente from './OutroComponente';
import { useState } from 'react'
import './App.css';

function App() {

  const [contador, setContador] = useState(0)

  function incrementa() {
    setContador(valorAnterior => valorAnterior + 1)
  }

  function decrementa() {
    setContador(valorAnterior => valorAnterior - 1)
  }

  return (
    <div className="App">
      <header className="App-header">
        <OutroComponente nome="Cezar" />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <span>
            { contador }
            <button onClick={incrementa}>+1</button>
            <button onClick={decrementa}>-1</button>
          </span>
        </p>
        <p>{ "o que tiver aqui é interpretado como JavaScript" }</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
