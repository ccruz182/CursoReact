const getTodoTasks = tasks => tasks.filter(task => task.completada === 'no');
const getInProcessTasks = tasks =>
  tasks.filter(task => task.completada === 'proceso');
const getDoneTasks = tasks => tasks.filter(task => task.completada === 'si');

export { getDoneTasks, getInProcessTasks, getTodoTasks };
