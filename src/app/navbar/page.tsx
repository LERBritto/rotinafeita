import Link from "next/link";

export default function NavBar(){
    return(
        <nav className="flex flex-row justify-between mx-[12.5vw] bg-[#171717] border-[1px] border-zinc-600/25 absolute top-12 w-[75vw] z-8 rounded-lg p-4 text-white shadow-sm shadow-zinc-600/75">
            <div className="flex gap-4 ml-5">
                <Link href="/dashboard" className="hover:text-gray-400">Dashboard</Link>
                <Link href="/myroutine" className="hover:text-gray-400">Rotinas</Link>
            </div>
            <div className="flex gap-4 mr-5">
                <Link href="/auth/signin" className="hover:text-gray-400">signin</Link>
                <Link href="/auth/signout" className="hover:text-gray-400">signout</Link>
            </div>
        </nav>   
    )
}