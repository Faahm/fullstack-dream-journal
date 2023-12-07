import React from "react";
import AddDream from "./components/AddDream";
import DreamsList from "./components/DreamsList";
import { getAllDreams } from "../lib/utils";
import Image from "next/image";

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
      </div>
      <AddDream />
      <DreamsList data={dreams} />
    </div>
  );
};

export default Home;
