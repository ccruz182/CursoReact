import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const s1 = {
    color: 'red',
    fontSize: '16px'
  };

  const s2 = {
    color: 'blue',
    fontSize: '40px'
  };

  return (
    <div className='App'>
      <MyComponent contenido='Qué onda' style={s1} />
      <MyComponent contenido='Qué show' style={s2} />
    </div>
  );
}

const MyComponent = props => {
  const [state, setState] = useState(true);

  const cambiarEstado = () => {
    setState(!state);
  };

  return (
    <div>
      {state && <div style={props.style}>
        {props.contenido}
        <button onClick={cambiarEstado}>Cambiar estado</button>
      </div>}
    </div>
  );
};

export default App;
