export const Tasks = ({ inputText, taskList }) => {
  return (
    <>
      {taskList.map((task) => (
        <div key={task.text}>{task.text}</div>
      ))}
    </>
  );
};
