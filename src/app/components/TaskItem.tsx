import React from "react";
import { Task } from "../types/task";

interface Props {
  taskDetails: Task;
}

const TaskItem = (prop: Props) => {
  const { taskDetails } = prop;
  //   const taskDetails = prop.taskDetails;

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
