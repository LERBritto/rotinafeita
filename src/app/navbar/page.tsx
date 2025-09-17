import Link from "next/link";

export default function NavBar(){
    return(
        <nav className="flex flex-row justify-between mx-[12.5vw] bg-[#171717] border-[1px] border-zinc-600/25 absolute top-12 w-[75vw] z-8 rounded-lg p-4 text-white shadow-sm shadow-zinc-600/75">
            <div className="flex gap-4 ml-5">
                <Link href="/dashboard" className="font-bold hover:text-gray-400">Dashboard</Link>
                <span>|</span>
                <Link href="/myroutine" className="font-bold hover:text-gray-400">Rotinas</Link>
                <span>|</span>
                <Link href="/leaderboard" className="font-bold hover:text-gray-400">Leaderboard</Link>
            </div>
            <div className="flex gap-4 mr-5">
                <Link href="/auth/signin" className="font-bold hover:text-gray-400">Signin</Link>
                <span>|</span>
                <Link href="/auth/signout" className="font-bold hover:text-gray-400">Signout</Link>
            </div>
        </nav>   
    )
}