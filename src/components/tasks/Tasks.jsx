import { Task } from "./Task";

export const Tasks = ({ taskList, setTaskList }) => {
  return (
    <>
      {taskList.map((task) => (
        <Task
          key={task.text}
          task={task}
          taskList={taskList}
          setTaskList={setTaskList}
        />
      ))}
    </>
  );
};
