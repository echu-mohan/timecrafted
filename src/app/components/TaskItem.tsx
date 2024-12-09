import React from "react";

const TaskItem = ({ taskDetails }) => {
  return (
    <div>
      <h3>{taskDetails.title}</h3>

      <p>
        The Due date is <span>"{taskDetails.dueDate.toDateString()}"</span>
      </p>
    </div>
  );
};

export default TaskItem;
