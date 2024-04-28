import React, { ReactElement } from 'react'

export interface SortCardProps {
    name: string;
    icon: ReactElement;
    bgColor: string
}


const SortCard = ({ name, icon, bgColor }: SortCardProps) => {
    return (
        <div className={`flex flex-col w-full`}>
            <button className={`  h-24 mt-5 ${bgColor}  flex items-center justify-center rounded-3xl`} >{icon && icon}</button>
            <p className="text-center mt-5 text-white font-thin text-xs">{name}</p>
        </div>
    )
}


export default SortCard