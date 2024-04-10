"use client";

import React, { useState } from "react";

const page = () => {
  const [title, settitle] = useState("");
  const [view, setview] = useState("");
  const [main, setmain] = useState([]);

  const handlesubmit = (p) => {
    p.preventDefault();
    setmain([...main, { title, view }]);
    settitle("");
    setview("");

  };

  const del = (i)=>
  {
    
    let tasks = [...main]
    tasks.splice(i, 1)
    setmain(tasks)

  }

  let task = <h2>No Task Available</h2>;
  if (main.length > 0) {

    task = main.map((task, i) => {
      return (
        // <li className="flex">
          <div className="flex justify-between gap-5 mb-5 ">
            <h5 className="font-bold text-2xl  gap-10 text-black	  ">{i+1}.   {task.title}</h5>
            <h5 className="font-bold text-2xl text-[#ccc]	">{task.view}</h5>
          <button onClick={()=>{
            del(i)
          }} class="bg-red-500 hover:bg-blue-700 text-white sm:w-[100px]  h-[70px] font-bold py-2 px-3 rounded"> Delete</button>
          </div>

        // </li>
      );
    });
  }

  
  return (
    <>
      <h1 className="font-bold text-white bg-black p-9 justify-center text-center text-4xl">
        TODO List
      </h1>

      <form onSubmit={handlesubmit}>
        <input
          type="text"
          placeholder="Add a new task"
          className=" text-black p-3 border-zinc-800 border-4 w-1/2 m-8 rounded"
          value={title}
          
          onChange={(e) => {
            settitle(e.target.value);
          }}
        />

        <input
          type="text"
          placeholder="Description"
          className=" text-black p-3 m-8 w-1/2 border-zinc-800 border-4  rounded"
          value={view}
          onChange={(e) => {
            setview(e.target.value);
          }}
        />

        <button className="bg-black font-bold text-white rounded p-3">
          Add Task
        </button>
      </form>

        <div >
          <div className="flex basis-[20%_auto]">
            <h4 className="text-xl text-[#676161] mx-[1%] sm:mx-[5%]"> Task Name</h4>
            <h4 className="text-xl text-[#676162] mx-[15%] sm:mx-[27%]">Task Details</h4>
          </div>
          <ul className="p-5 bg-green-800  text-white font-bold text-xl sm:text-2xl">{task}</ul>
        </div>
    </>
  );
};

export default page;
