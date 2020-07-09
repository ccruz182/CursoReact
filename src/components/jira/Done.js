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
    return (
      <div style={{ padding: '1%' }} className='card'>
        <div className='content'>
          <div className='header'>Done</div>
          <div class="ui divider"></div>
          <div className='description'>{doneTasks}</div>          
        </div>
      </div>
    );
  }
}

export default Done;
