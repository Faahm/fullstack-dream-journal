"use client";

import Link from "next/link";
import { deleteDreamAction } from "./_actions";

const formatDateTime = (dateTime) => {
  return new Date(dateTime).toLocaleString();
};

const DreamsList = ({ data }) => {
  const handleOnClickDelete = async (id) => {
    try {
      await deleteDreamAction(id);
      console.log(`Successfully deleted ${id}`);
    } catch (error) {
      console.error("Error: ", error);
    }
  };

  return (
    <div className="grid grid-cols-4 grid-rows-1 p-8 gap-8">
      {data &&
        data.map((dream) => (
          <div
            key={dream.id}
            className="h-fit p-4 rounded-md shadow-md bg-secondary w-auto hover:bg-accent transition duration-300"
          >
            <Link href={`/dreams/${dream.id}`}>
              <h1 className="text-4xl font-display text-text truncate">
                {dream.title}
              </h1>
              <p className="text-white break-words font-semibold">{dream.content}</p>
              <p className="text-white text-sm mt-3">
                Created At: {formatDateTime(dream.createdAt)}
              </p>
              <p className="text-white text-sm">
                Updated At: {formatDateTime(dream.updatedAt)}
              </p>
            </Link>
            <button
              onClick={() => handleOnClickDelete(dream.id)}
              className="bg-white text-text font-semibold px-4 py-2 rounded-md mt-4"
            >
              Delete
            </button>
          </div>
        ))}
    </div>
  );
};

export default DreamsList;
