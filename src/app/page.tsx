import Head from "next/head";
import Task from "./components/Tasks";
import DefaultLayout from "./layouts/DefaultLayout";

const myArray = [
  { id: 1, title: "Snow Shoeing", dueDate: new Date("2024-12-03") },
  { id: 2, title: "Front End Developement", dueDate: new Date("2024-12-03") },
  { id: 3, title: "Boxing", dueDate: new Date("2024-12-03") },
];

export default function Home() {
  return (
    <DefaultLayout>
      <Head>
        <title>My Application - Home</title>
      </Head>

      <Task tasks={myArray} />
    </DefaultLayout>
  );
}
