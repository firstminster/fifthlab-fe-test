import React, { useEffect, useState } from 'react'
import FilterCard from './FilterCard'
import { FaFemale, FaMale, FaUsers } from 'react-icons/fa'
import Input from './input'
import { useAppDispatch } from '@/hooks'
import { filterUserByGender, searchByName } from '@/features/user'


const UserSearch = () => {
    const dispatch = useAppDispatch();
    const [searchTerm, setSearchTerm] = useState<any>("");


    const filterSearchTerm = (e: any) => {
        setSearchTerm(e.target.value);
    };


    useEffect(() => {
        dispatch(searchByName(searchTerm))
    }, [searchTerm, dispatch]);


    const handleFilterUserByGender = (query: any) => {
        dispatch(filterUserByGender(query));
    }
    return (
        <div className="w-full  px-20 my-auto pt-10 xl:pt-0">
            <h2 className="text-3xl text-white font-thin mb-8">Hello, <span className="font-black ">Emerald</span> </h2>
            <p className="text-white font-thin text-sm mb-5">Welcome to your dashboard, kindly sort through the user base</p>
            <Input onChange={filterSearchTerm} value={searchTerm} name={'user'} type={'text'} placeholder={'Find a user'} cssstyles={'h-16 w-full pl-16 rounded-2xl text-xl placeholder:text-[#3f4350] focus:outline-none bg-[#7c808d]'} />

            <div className="mt-16">
                <h4 className="text-white text-sm ">Show Users</h4>
                <div className="flex justify-between gap-20">
                    <FilterCard query={''} filterUser={handleFilterUserByGender} name={'All users'} icon={<FaUsers size={40} className='text-white' />} bgColor='bg-[#F935A9]' />
                    <FilterCard query={'male'} filterUser={handleFilterUserByGender} name={'Male users'} icon={<FaMale size={40} className='text-white' />} bgColor='bg-[#2EBCB5]' />
                    <FilterCard query={'female'} filterUser={handleFilterUserByGender} name={'Female users'} icon={<FaFemale size={40} className='text-white' />} bgColor='bg-[#7846C1]' />
                </div>
            </div>
        </div>
    )
}

export default UserSearch