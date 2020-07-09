import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

import Card from './components/Card';
import Tasks from './components/tasks/Tasks';

import Contenedor from './components/jira/Contenedor';

import MyContext from './state/context';
import Hooks from './components/hooks/Hooks';
import Navbar from './components/Navbar';
import NotFound from './components/NotFound';

function App() {
  return (
    <Router>
      <Navbar />
      <div style={{ marginBottom: '10%' }} className='ui container'>
        <Switch>
          <Route
            exact
            path='/tasks'
            render={() => (
              <Card titulo='Tasks'>
                <Tasks />
              </Card>
            )}
          />
          <Route
            exact
            path='/jira'
            render={() => (
              <Card titulo='JIRA'>
                <Contenedor />
              </Card>
            )}
          />
          <Route
            exact
            path='/hooks'
            render={() => (
              <Card titulo='Hooks'>
                <Hooks />
              </Card>
            )}
          />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
