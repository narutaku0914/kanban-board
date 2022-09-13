import { useState } from "react";
import { TaskCardDeleteButton } from "./button/TaskCardDeleteButton";
import { TaskAddInput } from "./TaskAddInput";
import { TaskCardTitle } from "./TaskCardTitle";
import { Tasks } from "./Tasks";

export const TaskCard = ({ taskCard, taskCardsList, setTaskCardsList }) => {
  const [inputText, setInputText] = useState("");
  const [taskList, setTaskList] = useState([]);
  return (
    <div className="taskCard">
      <div className="taskCardTitleAndDelete">
        <TaskCardTitle />
        <TaskCardDeleteButton
          taskCard={taskCard}
          taskCardsList={taskCardsList}
          setTaskCardsList={setTaskCardsList}
        />
      </div>
      <TaskAddInput
        inputText={inputText}
        setInputText={setInputText}
        taskList={taskList}
        setTaskList={setTaskList}
      />
      <Tasks
        inputText={inputText}
        taskList={taskList}
        setTaskList={setTaskList}
      />
    </div>
  );
};
