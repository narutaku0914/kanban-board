import { useState } from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { AddTaskCardButton } from "./button/AddTaskCardButton";
import { TaskCard } from "./TaskCard";

export const TaskCards = () => {
  const [taskCardsList, setTaskCardsList] = useState([]);

  const reorder = (taskCardsList, startIndex, endIndex) => {
    const remove = taskCardsList.splice(startIndex, 1);
    taskCardsList.splice(endIndex, 0, remove[0]);
  };

  const handleDragEnd = (result) => {
    reorder(taskCardsList, result.source.index, result.destination.index);
    setTaskCardsList(taskCardsList);
  };
  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId="droppable" direction="horizontal">
        {(provided) => (
          <div
            className="taskCardsArea"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {taskCardsList.map((taskCard, index) => (
              <TaskCard
                key={taskCard.id}
                index={index}
                taskCard={taskCard}
                taskCardsList={taskCardsList}
                setTaskCardsList={setTaskCardsList}
              />
            ))}
            <AddTaskCardButton
              taskCardsList={taskCardsList}
              setTaskCardsList={setTaskCardsList}
            />
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};
