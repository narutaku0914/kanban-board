import { Task } from "./Task";

export const Tasks = ({ inputText, taskList }) => {
  return (
    <>
      {taskList.map((task) => (
        <Task key={task.text} task={task} />
      ))}
    </>
  );
};
