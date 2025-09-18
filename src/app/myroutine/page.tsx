import NavBar from "../navbar/page";

export default function myroutine() {
    return(
    <div>
        <NavBar />
        <div className="flex justify-center h-screen w-screen items-center">
            <button className="text-right py-2 px-5 rounded-2xl bg-white text-black cursor-pointer">Criar Rotina</button>
        </div>
    </div>
    )
}