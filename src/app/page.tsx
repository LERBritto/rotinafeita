import Image from "next/image";
import Link from "next/link";
import Clock from "../components/Clock";
import Routine from "../components/Routine";

export default function Home() {
  return (
    <div className="bg-[#171717] text-white">
      <nav className="mx-[12.5vw] bg-[#171717] border-[1px] border-zinc-600/25 absolute top-12 w-[75vw] z-8 rounded-lg p-4 text-white shadow-sm shadow-zinc-600/75">
        <div className="justify-end flex gap-4 mr-5">
          <Link href="/auth/signin" className="hover:text-gray-400">signin</Link>
          <Link href="/auth/signout" className="hover:text-gray-400">signout</Link>
        </div>
      </nav>   
      <div className="grid grid-cols-2 gap-4">
        <Routine />
        <Clock />
      </div>
    </div>
  );
}
