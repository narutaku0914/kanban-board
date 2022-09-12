import { AddTaskCardButton } from "./button/AddTaskCardButton";
import { TaskCard } from "./TaskCard";

export const TackCards = () => {
  return (
    <div className="taskCardsArea">
      <TaskCard />
      <AddTaskCardButton />
    </div>
  );
};
