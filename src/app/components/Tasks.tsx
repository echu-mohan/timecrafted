import { FormEvent, useState } from "react";
import React from "react";
import TaskItem from "./TaskItem";
import { Task } from "../types/task";

interface Props {
  tasks: Task[];
  setTask: (tasks: Task[]) => void;
}

const Tasks = ({ tasks, setTask }: Props) => {
  const [title, setTitle] = useState("");
  let nextId = 1;

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    setTask([
      ...tasks,
      { id: nextId++, title: title, dueDate: new Date("2024-12-03") },
    ]);
    setTitle("");
  };

  return (
    <>
      <form className=" grid justify-items-center mt-10" onSubmit={onSubmit}>
        <label>
          Enter The task:
          <input
            name="test"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </label>

        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-4"
          type="submit"
        >
          Add to Daily Taks
        </button>
      </form>

      <ul className="mt-10 mx-6 rounded-md border-4 list-disc">
        {tasks.map((task, index) => (
          <li key={index}>
            <TaskItem taskDetails={task}></TaskItem>
          </li>
        ))}
      </ul>
    </>
  );
};
export default Tasks;
