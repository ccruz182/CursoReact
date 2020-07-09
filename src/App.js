import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import Card from './components/Card';
import Tasks from './components/tasks/Tasks';

import Contenedor from './components/jira/Contenedor';


import MyContext from './state/context';
import Hooks from './components/hooks/Hooks';

function App() {
  return (
    <div style={{ marginBottom: '10%' }} className='ui container'>
      <MyContext.Provider value='dark'>
        <Card titulo='Tasks'>
          <Tasks />
        </Card>
        <Card titulo='JIRA'>
          <Contenedor />
        </Card>
        <Card titulo='Hooks'>
          <Hooks />
        </Card>
      </MyContext.Provider>
    </div>
  );
}

export default App;
