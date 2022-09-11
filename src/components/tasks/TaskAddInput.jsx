export const TaskAddInput = ({
  inputText,
  setInputText,
  taskList,
  setTaskList,
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    // taskListへ追加
    setTaskList([...taskList, { id: taskList.length, text: inputText }]);

    // 入力欄を空に
    setInputText("");
  };

  const handleChage = (e) => {
    setInputText(e.target.value);
  };

  console.log(taskList);

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
