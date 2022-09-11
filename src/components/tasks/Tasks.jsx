import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { Task } from "./Task";

export const Tasks = ({ taskList, setTaskList }) => {
  const reorder = (taskList, startIndex, endIndex) => {
    const remove = taskList.splice(startIndex, 1);
    taskList.splice(endIndex, 0, remove[0]);
  };

  const handleDragEnd = (result) => {
    reorder(taskList, result.source.index, result.destination.index);
    setTaskList(taskList);
  };

  return (
    <>
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="droppable">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {taskList.map((task, index) => (
                <Task
                  index={index}
                  key={task.id}
                  task={task}
                  taskList={taskList}
                  setTaskList={setTaskList}
                />
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </>
  );
};
