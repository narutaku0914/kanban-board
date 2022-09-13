import { v4 as uuidv4 } from "uuid";

export const TaskAddInput = ({
  inputText,
  setInputText,
  taskList,
  setTaskList,
}) => {
  const handleSubmit = (e) => {
    const taskId = uuidv4();

    e.preventDefault();

    // taskListへ追加
    setTaskList([
      ...taskList,
      {
        id: taskId,
        text: inputText,
        draggableId: `task-${taskId}`,
      },
    ]);

    // 入力欄を空に
    setInputText("");
  };

  const handleChage = (e) => {
    setInputText(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="add a task"
          className="taskAdd"
          onChange={handleChage}
          value={inputText}
        />
      </form>
    </div>
  );
};
