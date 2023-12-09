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
      <div className="p-4 rounded-md shadow-md bg-secondary w-[40rem]">
        <h1 className="text-4xl font-display text-text mb-4">
          {isEditingTitle ? (
            <input
              value={title}
              onChange={(e) => handleOnChange(e, setTitle)}
              className="p-2 rounded-md w-full"
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
              className="bg-accent text-white px-4 py-2 rounded-md ml-3"
            >
              Edit
            </button>
          )}
        </h1>
        <div className="mb-3 text-sm">
          <p>
            <strong data-testid="created-at">Created At:</strong>{" "}
            {new Date(dream.createdAt).toLocaleString()}
          </p>
          <p>
            <strong data-testid="updated-at">Updated At:</strong>{" "}
            {new Date(dream.updatedAt).toLocaleString()}
          </p>
        </div>
        {isEditingEntry ? (
          <textarea
            value={content}
            onChange={(e) => handleOnChange(e, setContent)}
            className="p-2 rounded-md w-full"
            placeholder="Entry"
            aria-label="Entry"
          />
        ) : (
          <p data-testid="content">{content}</p>
        )}
          <div className="flex flex-row gap-4 mt-3">
            {!isEditingEntry && (
              <button
                data-testid="edit-entry"
                onClick={handleEntryEdit}
                className="bg-accent text-white px-4 py-2 rounded-md"
              >
                Edit Entry
              </button>
            )}
            <button
              onClick={handleOnSubmit}
              className="bg-accent text-white px-4 py-2 rounded-md"
            >
              Update
            </button>
            <button className="bg-accent text-white px-4 py-2 rounded-md">
              <Link href={"/"}>Back to Homepage</Link>
            </button>
          </div>
        </div>
    </div>
  );
};

export default UpdateDream;
