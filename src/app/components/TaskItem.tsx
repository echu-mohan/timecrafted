import React from "react";
import { Task } from "../types/task";

interface Props {
  taskDetails: Task;
}

const TaskItem = (prop: Props) => {
  const { taskDetails } = prop;

  function isLessThanOrEqualToZero(value: any) {
    return value <= 0;
  }
  //   const taskDetails = prop.taskDetails;

  const isOverdue = isLessThanOrEqualToZero(taskDetails.daysRemaining);

  return (
    <div>
      <h3 className="text-lg font-extrabold text-blue-600 py-2 px-4 shadow-sm ">
        {taskDetails.title}
      </h3>

      <p>
        The Due date is <span>"{taskDetails.dueDate.toDateString()}"</span>
        <span
          className={` p-2 ml-5 mb-5 text-sm text-red-500 border border-red-500 rounded-md shadow-md  ${
            isOverdue ? "bg-red-300 text-red-600" : "bg-green-500 text-gray-800"
          }`}
        >
          The days remaining for this task is{" "}
          <span className="font-bold text-red-700">
            {taskDetails.daysRemaining}
          </span>
        </span>
      </p>
    </div>
  );
};

export default TaskItem;
