import React from 'react';

const Task = props => {
  const icon = props.completada ? 'up' : 'down';
  const texto = props.completada ? 'incompleta' : 'completa';
  return (
    <div className='item'>
      <div className='left floated content'>
        <div className='header'>{props.nombre}</div>
        <div className='description'>{props.descripcion}</div>
      </div>
      <div className='right floated content'>
        <button class='fluid ui purple basic labeled icon button' onClick={() => props.toogle(props.id)}>
          <i className={`thumbs ${icon} outline icon`}></i>
          Marcar como {texto}
        </button>
      </div>
    </div>
  );
};

export default Task;
