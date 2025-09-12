import Image from "next/image";
import Link from "next/link";
import Clock from "../components/Clock";
import Routine from "../components/Routine";
import NavBar from "./navbar/page";

export default function Home() {
  return (
    <div className="bg-[#171717] text-white">
      <NavBar />
      <div className="grid grid-cols-2 gap-4">
        <Routine />
        <Clock />
      </div>
    </div>
  );
}
