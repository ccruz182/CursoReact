import React, { useState } from 'react';

import Task from './Task';

import tasks from './data.json';

const Tasks = () => {
  const [state, setState] = useState(tasks.tasks);

  const toogleCompletada = id => {
    const newState = state.map(task => {
        if (task.id === id) {
            task.completada = ! task.completada;
        }

        return task;
    });

    setState(newState);
  };

  const _tasks = state.map(task => (
    <Task
      key={task.id}
      id={task.id}
      nombre={task.nombre}
      descripcion={task.descripcion}
      completada={task.completada}
      toogle={toogleCompletada}
    />
  ));

  return <div className='ui relaxed divided big list'>{_tasks}</div>;
};

export default Tasks;
