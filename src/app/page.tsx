import Head from "next/head";
import Task from "./components/Task";
import DefaultLayout from "./layouts/DefaultLayout";

export default function Home() {
  return (
    <DefaultLayout>
      <Head>
        <title>My Application - Home</title>
      </Head>

      <h1 className="flex justify-center mt-8 ">Welcome</h1>

      <Task />
    </DefaultLayout>
  );
}
