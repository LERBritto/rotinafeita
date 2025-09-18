export default function signup() {
    return (
        <div className="flex justify-center h-screen items-center">
            <div className="max-w-lg w-full py-20 px-10 text-white">
                <h1 className="text-left text-[60px] font-bold">Register</h1>
                <input className="text-white w-full rounded-[10px] py-4 px-4 bg-gray-800 outline-none" placeholder="Digite seu e-mail"></input>
                <input className="text-white w-full rounded-[10px] py-4 px-4 mt-3 bg-gray-800 outline-none" placeholder="Digite novamente seu e-mail"></input>
                <input type="password" className="text-white w-full rounded-[10px] py-4 px-4 mt-3 bg-gray-800 outline-none" placeholder="Digite sua senha"></input>
                <input type="password" className="text-white w-full rounded-[10px] py-4 px-4 mt-3 bg-gray-800 outline-none" placeholder="Digite novamente sua senha"></input>
                <button className="block mx-auto mt-3 py-4 w-full rounded-[10px] bg-white text-[#171717] text-[24px] font-bold cursor-pointer hover:bg-blue-300 transition-colors duration-300">Log In</button>
            </div>
        </div>
    )
}