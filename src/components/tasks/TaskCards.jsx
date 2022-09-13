import { useState } from "react";
import { AddTaskCardButton } from "./button/AddTaskCardButton";
import { TaskCard } from "./TaskCard";

export const TaskCards = () => {
  const [taskCardsList, setTaskCardsList] = useState([]);
  return (
    <div className="taskCardsArea">
      {taskCardsList.map((taskCard) => (
        <TaskCard
          key={taskCard.id}
          taskCard={taskCard}
          taskCardsList={taskCardsList}
          setTaskCardsList={setTaskCardsList}
        />
      ))}
      <AddTaskCardButton
        taskCardsList={taskCardsList}
        setTaskCardsList={setTaskCardsList}
      />
    </div>
  );
};
