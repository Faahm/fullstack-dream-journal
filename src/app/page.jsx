import React from "react";
import DreamsList from "./components/DreamsList";
import { getAllDreams } from "../lib/utils";
import Image from "next/image";
import Link from "next/link";

const Home = async () => {
  const dreams = await getAllDreams();

  return (
    <div>
      <div className="justify-center items-center flex flex-col pt-8">
        <Image
          src="Logo.png"
          alt="Logo"
          width={500}
          height={500}
          unoptimized
          priority
        />
      <Link href="/add-dream" className="text-lg bg-white text-text font-semibold px-4 py-2 rounded-md mt-4">
        Add a dream
      </Link>
      </div>
      <DreamsList data={dreams} />
    </div>
  );
};

export default Home;
