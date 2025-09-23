"use client"

export default function CrudRow() {
    return (
        <div className="flex justify-center items-center">
            <div className="flex justify-between items-center border-2 rounded-2xl border-zinc-600/25 shadow-sm shadow-zinc-600/75 p-4 w-[85vw] mt-3 text-white text-[32px] font-bold">
                <p className="text-left">{"{Rotinas}"}</p>
                <div className="flex gap-4 text-base font-normal">
                    <button className="">Search</button>
                    <button className="">View</button>
                    <button className="">Delete</button>
                </div>
            </div>
        </div>
    )
}
