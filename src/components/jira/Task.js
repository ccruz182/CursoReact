import React, { Component } from 'react';

class Task extends Component {
  render() {
    return (
      <div className='ui icon compact message'>
        <i className={this.props.icon}></i>
        <div className='content'>
          <div className='header'>{this.props.titulo}</div>
          <p>{this.props.descripcion}</p>
          {this.props.toProgress && (
            <button
              onClick={() => this.props.toProgress(this.props.id)}
              className='ui blue basic animated button'
            >
              <div className='visible content'>Cambiar a 'In Progress'</div>
              <div className='hidden content'>
                <i className='right arrow icon'></i>
              </div>
            </button>
          )}
          {this.props.toDone && (
            <button
              onClick={() => this.props.toDone(this.props.id)}
              className='ui positive basic animated button'
            >
              <div className='visible content'>Cambiar a 'Done'</div>
              <div className='hidden content'>
                <i className='right arrow icon'></i>
              </div>
            </button>
          )}
        </div>
      </div>
    );
  }
}

export default Task;
