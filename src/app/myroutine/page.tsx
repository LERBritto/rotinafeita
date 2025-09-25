"use client"

import { useState } from "react";
import ModalRoutine from "../../components/crud/ModalRoutine";
import NavBar from "../navbar/page";
import CrudRow from "../../components/crud/CrudRow";

export default function myroutine() {
    const [open, setOpen] = useState(false);

    return(
    <div>
        <NavBar />
        <div className="flex flex-col h-screen w-screen items-center">
            <CrudRow />
            <div className="flex w-full p-5">
                <button onClick={() => setOpen(true)} className="ml-auto mr-auto py-5 px-25 rounded-2xl bg-white text-black cursor-pointer transition-colors duration-300 hover:bg-gray-600 hover:text-white text-[24px] font-bold">Criar tarefa</button>
            </div>
        </div>
        <ModalRoutine open={open} close={() => setOpen(false)} />
    </div>
    )
}