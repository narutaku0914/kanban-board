import { useState } from "react";

export const TaskCardTitle = () => {
  const [isClick, setIsClick] = useState(false);
  const [inputCardTitle, setInputCardTitle] = useState("Today");

  const handleClick = () => {
    setIsClick(true);
    console.log(isClick);
  };

  const handleChange = (e) => {
    setInputCardTitle(e.target.value);
    console.log(inputCardTitle);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsClick(false);
  };

  const handleBlur = (e) => {
    e.preventDefault();
    setIsClick(false);
  };

  return (
    <div className="taskCardTitleArea">
      <h3 onClick={handleClick}>
        {isClick ? (
          <form onSubmit={handleSubmit}>
            <input
              autoFocus
              className="taskCardTitleInput"
              type="text"
              onChange={handleChange}
              onBlur={handleBlur}
              value={inputCardTitle}
              maxLength="10"
            />
          </form>
        ) : (
          inputCardTitle
        )}
      </h3>
    </div>
  );
};
