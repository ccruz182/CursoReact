import React, { Component } from 'react';

import Task from './Task';

class ToDo extends Component {
  mapper = toDoTasks => {
    return toDoTasks.map(task => (
      <Task
        key={task.id}
        id={task.id}
        titulo={task.nombre}
        descripcion={task.descripcion}
        icon={this.props.icon}
        toProgress={this.props.toProgress}
      />
    ));
  };

  render() {
    const toDoTasks = this.mapper(this.props.toDoTasks);

    return (
      <div style={{ padding: '1%' }} className='card'>
        <div className='content'>
          <div className='header'>To Do</div>
          <div class='ui divider'></div>
          <div className='description'>{toDoTasks}</div>
        </div>        
      </div>
    );
  }
}

export default ToDo;
