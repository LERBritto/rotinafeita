import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-[#171717] text-white">
      <nav className="justify-between bg-[#202020] shadow-md">
        <div className="justify-end flex gap-4 mr-5">
          <Link href="/auth/signin" className="hover:text-gray-400">signin</Link>
          <Link href="/auth/signout" className="hover:text-gray-400">signout</Link>
        </div>
      </nav>      
    </div>
  );
}
