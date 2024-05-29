import React from "react";
import { Button } from "./ui/button";
import GetLocation from "./GetLocation";
import Logo from '../../public/logo.png'
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <div className="bg-white text-black flex p-3 justify-between items-center">
      <div className="h-[50px] w-[200px] relative">

      <Image fill={true} src={Logo} alt="logo" className="object-cover !top-[10px]"  />
      </div>
      <div className="flex gap-5 items-center">
        <GetLocation />
        <Link className="cursor-pointer text-[14px] font-medium" href="/favourites" >Favourites</Link>
        <Button>Login</Button>
      </div>
    </div>
  );
};

export default Header;
