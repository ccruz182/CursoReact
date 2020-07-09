import React, { Component } from 'react';
import Task from './Task';

class InProgress extends Component {
  mapper = inProgressTasks =>
    inProgressTasks.map(task => (
      <Task
        id={task.id}
        titulo={task.nombre}
        descripcion={task.descripcion}
        icon={this.props.icon}
        toDone={this.props.toDone}
      />
    ));

  render() {
    const inProgressTasks = this.mapper(this.props.inProgressTasks);
    return (
      <div style={{ padding: '1%' }} className='card'>
        <div className='content'>
          <div className='header'>In Progress</div>
          <div class='ui divider'></div>
          <div className='description'>{inProgressTasks}</div>
        </div>
      </div>
    );
  }
}

export default InProgress;
