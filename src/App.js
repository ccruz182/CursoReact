import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import Card from './components/Card';
import Tasks from './components/tasks/Tasks';

import Contenedor from './components/jira/Contenedor';

function App() {
  return (
    <div className="ui container">
      <Card titulo='Tasks'>
          <Tasks />
      </Card>
      <Card titulo='JIRA'>
        <Contenedor />
      </Card>
    </div>
  );
}

export default App;
