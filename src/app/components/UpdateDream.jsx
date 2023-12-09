"use client";

import Link from "next/link";
import { useState } from "react";
import { updateDreamAction } from "./_actions";

const UpdateDream = ({ dream }) => {
  const [title, setTitle] = useState(dream.title);
  const [content, setContent] = useState(dream.content);
  const [isEditingTitle, setIsEditingTitle] = useState(false);
  const [isEditingEntry, setIsEditingEntry] = useState(false);

  const handleOnChange = (e, setStateFunction) => {
    setStateFunction(e.target.value);
  };

  const handleTitleEdit = () => {
    setIsEditingTitle(true);
  };

  const handleEntryEdit = () => {
    setIsEditingEntry(true);
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
      setIsEditingTitle(false);
      setIsEditingEntry(false);
    } catch (error) {
      console.error("Error updating dream:", error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="p-4 rounded-md shadow-md bg-secondary w-auto">
        <h1 className="text-4xl font-display text-text mb-4">
          {isEditingTitle ? (
            <input
              value={title}
              onChange={(e) => handleOnChange(e, setTitle)}
              className="p-2 rounded-md w-full mb-2"
              placeholder="Title"
              aria-label="Title"
            />
          ) : (
            <span data-testid="title">{title}</span>
          )}
          {!isEditingTitle && (
            <button
              data-testid="edit-title"
              onClick={handleTitleEdit}
              className="ml-3 text-accent underline"
            >
              Edit
            </button>
          )}
        </h1>
        <p>
          <strong data-testid="created-at">Created At:</strong>{" "}
          {new Date(dream.createdAt).toLocaleString()}
        </p>
        <p>
          <strong data-testid="updated-at">Updated At:</strong>{" "}
          {new Date(dream.updatedAt).toLocaleString()}
        </p>
        {isEditingEntry ? (
          <textarea
            value={content}
            onChange={(e) => handleOnChange(e, setContent)}
            className="p-2 rounded-md w-full mb-2"
            placeholder="Entry"
            aria-label="Entry"
          />
        ) : (
          <p data-testid="content">{content}</p>
        )}
        {!isEditingEntry && (
          <button
            data-testid="edit-entry"
            onClick={handleEntryEdit}
            className="text-accent underline"
          >
            Edit Entry
          </button>
        )}
        <button
          onClick={handleOnSubmit}
          className="bg-accent text-white px-4 py-2 rounded-md mt-4"
        >
          Update
        </button>
        <button className="bg-accent text-white px-4 py-2 rounded-md mt-4 ml-5">
          <Link href={"/"}>Back to Homepage</Link>
        </button>
      </div>
    </div>
  );
};

export default UpdateDream;
