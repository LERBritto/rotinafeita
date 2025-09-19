"use client"

import { useState } from "react";
import ModalRoutine from "../../components/ModalRoutine";
import NavBar from "../navbar/page";

export default function myroutine() {
    const [open, setOpen] = useState(false);

    return(
    <div>
        <NavBar />
        <div className="flex flex-col h-screen w-screen items-center">
            <div className="flex w-full p-5">
                <button onClick={() => setOpen(true)} className="ml-auto mt-30 mr-50 py-2 px-5 rounded-2xl bg-white text-black cursor-pointer transition-colors duration-300 hover:bg-gray-600 hover:text-white">Criar Rotina</button>
            </div>
            <div className="flex justify-center items-center">
                <p className="text-white text-[32px] font-bold">{"{Rotinas}"}</p>
            </div>
        </div>
        <ModalRoutine open={open} close={() => setOpen(false)} />
    </div>
    )
}