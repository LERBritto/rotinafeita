"use client"

import { Eye, Search, Trash } from "lucide-react"

export default function CrudRow() {
    return (
        <div className="flex justify-center items-center">
            <div className="flex justify-between items-center border-2 rounded-2xl border-zinc-600/25 shadow-sm shadow-zinc-600/75 p-4 mx-[12.5vw] mt-50 w-[75vw] text-white text-[32px] font-bold">
                <p className="text-left">{"{Rotinas}"}</p>
                <div className="flex gap-4 text-base font-normal">
                    <Search />
                    <Eye />
                    <Trash />
                </div>
            </div>
        </div>
    )
}
