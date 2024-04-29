
import { Key, useEffect, useState } from 'react';
import Input from './input'
import { useAppDispatch } from '@/hooks';
import { searchByName } from '@/features/user';


export interface Props {
    pageStep: number
    searchTerm: string
    countries: any;
    filterSearchTerm: (e: any) => void;
}

const FilterHeader = ({ pageStep, filterSearchTerm, searchTerm, countries }: Props) => {


    return (
        <div>
            <h3 className="text-2xl font-bold ">{pageStep === 0 ? 'All Users' : 'User List'}</h3>
            <p className="text-sm ">Filter by</p>

            <div className="flex justify-between flex-wrap items-center mt-5 gap-5">
                <Input onChange={filterSearchTerm} value={searchTerm} name='user' type='text' placeholder={'Find in List'} cssstyles={'h-14 w-80 pl-16 rounded-full text-lg placeholder:text-[#3f4350] focus:outline-none bg-[#E8E8F1]'} />

                <select name="country" id="country" className='h-14 w-80 pl-5 rounded-full text-lg placeholder:text-[#3f4350] focus:outline-none bg-[#E8E8F1]'>
                    {countries.map((item: any, idx: Key | null | undefined) => {
                        const { name: { common }, cca2 } = item;

                        return (
                            <option key={idx} value={cca2}>{common}</option>

                        )
                    })

                    }
                </select>
                <p className="">Toggle</p>
            </div>
        </div>
    )
}

export default FilterHeader