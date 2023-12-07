"use client";

import Link from "next/link";
import { useState } from "react";
import { updateDreamAction } from "./_actions";

const UpdateDream = ({ dream }) => {
  const [title, setTitle] = useState(dream.title);
  const [content, setContent] = useState(dream.content);

  const handleOnChange = (e, setStateFunction) => {
    setStateFunction(e.target.value);
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    const data = {
      title: title,
      content: content,
      updatedAt: new Date(),
    };

    try {
      await updateDreamAction(dream.id, data);
      console.log("Successful");
    } catch (error) {
      console.error("Error updating dream:", error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form
        onSubmit={(e) => handleOnSubmit(e)}
        className="p-4 rounded-md shadow-md bg-secondary w-auto"
      >
        <h1 className="text-4xl font-display text-text mb-4">
          Update your Dream
        </h1>
        <input
          value={title}
          onChange={(e) => handleOnChange(e, setTitle)}
          className="p-2 rounded-md w-full mb-2"
          placeholder="Title"
        />
        <input
          value={content}
          onChange={(e) => handleOnChange(e, setContent)}
          className="p-2 rounded-md w-full mb-2"
          placeholder="Entry"
        />
        <button
          type="submit"
          className="bg-accent text-white px-4 py-2 rounded-md mt-4"
        >
          Update
        </button>
        {/* Style this pls ty uwu */}
        <button className="bg-accent text-white px-4 py-2 rounded-md mt-4">
          <Link href={"/"}>Back to Homepage</Link>
        </button>
      </form>
    </div>
  );
};

export default UpdateDream;
