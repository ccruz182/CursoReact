import React, { Component } from 'react';
import * as uuid from 'uuid/v4';

import { Done, Header, InProgress, ToDo } from '.';

import tasks from './data.json';

import {
  getDoneTasks,
  getInProcessTasks,
  getTodoTasks
} from './contenedor.funciones';
import MyContext from '../../state/context';

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

  nuevoToDo = task => {
    const nuevoTask = {
      id: uuid(),
      nombre: task.nombre,
      descripcion: task.descripcion,
      completada: 'no'
    };

    this.setState({ tasks: [...this.state.tasks, nuevoTask] });
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
      <MyContext.Consumer>
        {context => (
          <div className=''>            
            <div className='content'>
              <Header nuevoToDo={this.nuevoToDo} />
              <div className='ui three stackable cards mq'>
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
                <Done doneTasks={doneTasks} icon={this.icons.done} />
              </div>
            </div>
          </div>
        )}
      </MyContext.Consumer>
    );
  }
}

export default Contenedor;
