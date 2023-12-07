"use client";

import { useState } from "react";
import { createDreamAction } from "./_actions";

const AddForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleOnChange = (e, setStateFunction) => {
    setStateFunction(e.target.value);
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    const data = {
      title: title,
      content: content,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    try {
      await createDreamAction(data);
      setTitle("");
      setContent("");
      console.log("Successful");
    } catch (error) {
      console.error("Error adding dream:", error);
    }
  };

  return (
    <div className="p-8">
      <form
        onSubmit={(e) => handleOnSubmit(e)}
        className="flex flex-col gap-4 p-4 bg-secondary rounded-md"
      >
        <input
          placeholder="Title"
          value={title}
          onChange={(e) => handleOnChange(e, setTitle)}
          className="p-2 border rounded"
          required
        />
        <input
          placeholder="Entry"
          value={content}
          onChange={(e) => handleOnChange(e, setContent)}
          className="p-2 border rounded"
          required
        />
        <button
          type="submit"
          className="font-semibold text-white px-4 py-2 rounded bg-accent"
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default AddForm;
