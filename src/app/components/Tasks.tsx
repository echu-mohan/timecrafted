import {
  FormEvent,
  useState,
  useEffect,
  ChangeEventHandler,
  ChangeEvent,
} from "react";
import React from "react";
import TaskItem from "./TaskItem";
import { Task } from "../types/task";

interface Props {
  tasks: Task[];
  setTask: (tasks: Task[]) => void;
}

const Tasks = ({ tasks, setTask }: Props) => {
  const [title, setTitle] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [error, setError] = useState("");
  const [daysRemaining, setDaysRemaining] = useState<number | undefined>();
  const [isClient, setIsClient] = useState(false);

  let nextId = 1;

  const calculateDaysRemaining = (dueDate: string) => {
    const today = new Date().valueOf();
    const due = new Date(dueDate).valueOf();

    // Calculate the difference in milliseconds
    const timeDifference: number = due - today;

    // Convert milliseconds to days
    const daysRemaining = Math.ceil(timeDifference / (1000 * 3600 * 24));

    setDaysRemaining(daysRemaining);
  };

  const handleDateChange = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedDueDate = event.target.value;
    setTaskDate(selectedDueDate);

    if (selectedDueDate && isClient) {
      calculateDaysRemaining(selectedDueDate);
    }
    setError(""); // Clear error when the user starts typing
  };

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    setTask([
      ...tasks,
      {
        id: nextId++,
        title: title,
        dueDate: new Date(taskDate),
        daysRemaining: daysRemaining,
      },
    ]);
    setTitle("");

    if (!title || !taskDate) {
      setError("Please provide both task description and due date.");
      return;
    }

    setTaskDate("");
  };

  // Use effect to check if the component has mounted (only runs on the client)
  useEffect(() => {
    setIsClient(true);
  }, []); // This runs only once after the component mounts on the client

  return (
    <>
      <form
        className=" text-lg font-medium text-black grid justify-items-center mt-10"
        onSubmit={onSubmit}
      >
        <label>
          Enter The task:
          <input
            className="w-full py-3 px-4 bg-gray-50 border border-gray-300 rounded-lg text-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400 shadow-sm"
            name="test"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </label>

        <label className="block text-sm font-medium text-gray-700 mb-2">
          Due Date (MM/DD/YYYY)
          <input
            className="w-full py-3 pl-10 pr-4 bg-gray-50 border border-gray-300 rounded-lg text-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm"
            id="due-date"
            name="due-date"
            value={taskDate}
            onChange={handleDateChange}
            placeholder="MM/DD/YYYY"
            type="date"
          />
        </label>

        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

        <button
          className="bg-amber-500 hover:bg-amber-400 text-white text-lg font-bold py-2 px-4 rounded m-4"
          type="submit"
        >
          Add to Daily Taks
        </button>
      </form>
      <div className="grid justify-center ">
        <ul className=" bg-blue-100 mt-10 mx-6 rounded-md border-4 ">
          {tasks.map((task, index) => (
            <li key={index} className="list-decimal">
              <TaskItem taskDetails={task}></TaskItem>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
export default Tasks;
