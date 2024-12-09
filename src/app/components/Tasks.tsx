import React from "react";
import TaskItem from "./TaskItem";

const Tasks = ({ tasks }) => {
  return (
    <ul className="mt-10 mx-6 rounded-md border-4 list-disc">
      {tasks.map((task, index) => (
        <li key={index}>
          <TaskItem taskDetails={task}></TaskItem>
        </li>
      ))}
    </ul>
  );
};

export default Tasks;
