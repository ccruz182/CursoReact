import React, { Component } from 'react';

import Header from './Header';
import ToDo from './ToDo';
import InProgress from './InProgress';
import Done from './Done';

import tasks from './data.json';

import {
  getDoneTasks,
  getInProcessTasks,
  getTodoTasks
} from './contenedor.funciones';

class Contenedor extends Component {
  state = {
    tasks: tasks.tasks
  };

  toDoToInProgress = id => {
    this.setState({ tasks: this.changer(this.state.tasks, id, 'proceso') });
  };

  inProgressToDone = id => {
    this.setState({ tasks: this.changer(this.state.tasks, id, 'si') });
  };

  changer = (tasks, id, status) => {
    const updatedTasks = tasks.map(task => {
      if (task.id === id) {
        task.completada = status;
      }

      return task;
    });

    return updatedTasks;
  };

  icons = {
    toDo: 'tasks icon',
    inProgress: 'spinner icon',
    done: 'calendar check outline icon'
  };

  render() {
    console.log(this.state);

    const toDoTasks = getTodoTasks(this.state.tasks);
    const inProgressTasks = getInProcessTasks(this.state.tasks);
    const doneTasks = getDoneTasks(this.state.tasks);
    console.log('toDo', toDoTasks);

    return (
      <div className='ui fluid card'>
        <div className='content'>
          <Header />
          <div className='ui three cards'>
            <ToDo
              toDoTasks={toDoTasks}
              icon={this.icons.toDo}
              toProgress={this.toDoToInProgress}
            />
            <InProgress
              inProgressTasks={inProgressTasks}
              icon={this.icons.inProgress}
              toDone={this.inProgressToDone}
            />
            <Done doneTasks={doneTasks} icon={this.icons.done}/>
          </div>
        </div>
      </div>
    );
  }
}

export default Contenedor;
