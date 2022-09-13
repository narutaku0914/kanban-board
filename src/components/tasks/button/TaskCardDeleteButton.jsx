export const TaskCardDeleteButton = ({
  taskCard,
  taskCardsList,
  setTaskCardsList,
}) => {
  const taskCardDelete = (id) => {
    setTaskCardsList(taskCardsList.filter((e) => e.id !== id));
  };
  return (
    <div>
      <button
        className="taskCardDeleteButton"
        onClick={() => taskCardDelete(taskCard.id)}
      >
        <i className="fa-solid fa-xmark"></i>
      </button>
    </div>
  );
};
