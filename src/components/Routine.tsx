"use client"

export default function Routine() {
    
    
    return (
        <div className="flex justify-center items-center ml-55 min-h-screen bg-[#171717] text-white">
            <div className="flex flex-col mt-20 items-center">
                <span className="text-[40px] font-bold">
                    {"{taskName}"}
                </span>
                <span className="text-[20px]">
                    {"{timeRemaining}"}
                </span>
                <button className="border-3 rounded-3xl mt-4 p-3 cursor-pointer font-bold
                                   transition-all duration-500 ease-in-out transform hover:scale-110">
                    Concluir Tarefa
                </button>
            </div>
        </div>
    );
}