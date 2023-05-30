import { useState } from "react"

export const Input = ({ type, label}) => {


    return (
        <div className="flex flex-col">
            <label htmlFor={label} className="capitalize text-white lg:text-lg text-[12px]"> {label} </label>
            <input type={type} id={label} className="border-b-2 outline-none text-lg border-white bg-transparent w-full" />
        </div>
    ) 
}