import React, { Component } from 'react';
import Task from './Task';

class Done extends Component {
  mapper = doneTasks =>
    doneTasks.map(task => (
      <Task
        id={task.id}
        titulo={task.nombre}
        descripcion={task.descripcion}
        icon={this.props.icon}
        toDone={this.props.toDone}
      />
    ));

  render() {
    const doneTasks = this.mapper(this.props.doneTasks);
    return <div style={{ padding: '1%' }} className='card'>{doneTasks}</div>;
  }
}

export default Done;
