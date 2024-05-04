import React, { ReactElement } from 'react'

export interface FilterCardProps {
    name: string;
    icon: ReactElement;
    bgColor: string
    query: string
    filterUser?: any
    getUser?: any
}


const FilterCard = ({ name, icon, bgColor, query, filterUser, getUser }: FilterCardProps) => {

    const handleClick = () => {
        filterUser(query);
        if (!query) getUser()
    };

    return (
        <div className={`flex flex-col w-full`}>
            <button onClick={handleClick} className={`  h-24 mt-5 ${bgColor}  flex items-center justify-center rounded-3xl shadow-xl`} >{icon && icon}</button>
            <p className="text-center mt-5 text-white font-thin text-xs">{name}</p>
        </div>
    )
}


export default FilterCard