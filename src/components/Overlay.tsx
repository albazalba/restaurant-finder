import React from "react";
import Bg from "../../public/restaurant-1.webp";
import Image from "next/image";
import { Input } from "./ui/input";
const Overlay = () => {
  return (
    <div className="flex justify-center items-center w-[100%] h-[400px] bg-[url('../../public/restaurant-1.webp')] bg-cover bg-center backdrop-blur-lg bg-no-repeat">
      <Input
        className="w-[40%]"
        type="text"
        placeholder="Search for restaurant"
      />
    </div>
  );
};

export default Overlay;
