import { v4 as uuidv4 } from "uuid";

export const AddTaskCardButton = ({ taskCardsList, setTaskCardsList }) => {
  const addTaskCard = () => {
    const taskCardId = uuidv4();
    setTaskCardsList([
      ...taskCardsList,
      { id: taskCardId, draggableId: `card${taskCardId}` },
    ]);
  };
  return (
    <div>
      <button className="addTaskCardButton" onClick={addTaskCard}>
        +
      </button>
    </div>
  );
};
