"use client";

import { useState } from "react";
import Head from "next/head";
import Tasks from "./components/Tasks";
import DefaultLayout from "./layouts/DefaultLayout";

export default function Home() {
  const [toDoList, settoDoList] = useState([
    {
      id: 3,
      title: "Boxing",
      dueDate: new Date(),
      daysRemaining: 0,
    },
  ]);

  return (
    <DefaultLayout>
      <Head>
        <title>My Application - Home</title>
      </Head>

      <Tasks tasks={toDoList} setTask={settoDoList} />
    </DefaultLayout>
  );
}
