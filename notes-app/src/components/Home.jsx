import React, { useState } from "react";

const Home = () => {
  const [title, setTitle] = useState("");
  const [detail, setDetail] = useState("");

  // adding task to an array so that we can use map fun to make cards from the array to display the content in the form of card

  const [task, setTask] = useState([]);

  const formHandling = (e) => {
    e.preventDefault();
    console.log(`title of the note is ${title} and the details are ${detail}`);
    const data = [...task];
    data.push({ title, detail });
    setTask(data);
    setTitle("");
    setDetail("");
  };

  const deleteTask = (idx) => {
    const copyTask = [...task];
    copyTask.splice(idx, 1);
    setTask(copyTask);
  };

  return (
    <div className="h-screen lg:flex bg-black text-white">
      <form
        onSubmit={(e) => {
          formHandling(e);
        }}
        className="lg:w-1/2 flex flex-col items-start gap-4 p-10"
      >
        <h2 className="text-2xl font-bold mb-2">Add Notes</h2>
        <input
          className="rounded w-1/2 py-2 px-5 border-2"
          type="text"
          placeholder="Notes heading"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <input
          className="rounded w-1/2 py-2 px-5 border-2"
          type="text"
          placeholder="Notes heading"
          value={detail}
          onChange={(e) => {
            setDetail(e.target.value);
          }}
        />
        <button className="bg-white w-1/2 active:scale-90 text-black px-5 py-2 rounded">
          Add task
        </button>
      </form>
      <div className="p-10   w-full">
        <div className="flex flex-wrap gap-4 p-10"></div>
        {task.map(function (e, idx) {
          return (
            <div
              key={idx}
              className="bg-black border-2 rounded-lg p-6 w-full lg:w-1/4"
            >
              <h2 className="text-2xl capitalize text-center underline-offset-8 font-bold mb-2">
                {e.title}
              </h2>
              <p className="text-xl text-white">{e.detail}</p>
              <button
                onClick={() => {
                  deleteTask(idx);
                }}
                className="mt-4 bg-black border-2 hover:bg-zinc-500 text-white px-4 py-2 rounded active:scale-90"
              >
                Task Completed
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
