import React from 'react'
import { SlMagnifier } from 'react-icons/sl'
import SortCard from './SortCard'
import { FaFemale, FaMale, FaUsers } from 'react-icons/fa'

const LeftSide = () => {
    return (
        <div className="w-full px-20 my-auto">
            <h2 className="text-3xl text-white font-thin mb-8">Hello, <span className="font-black ">Emerald</span> </h2>
            <p className="text-white font-thin text-sm mb-5">Welcome to your dashboard, kindly sort through the user base</p>
            <div className="relative">
                <SlMagnifier className="absolute top-5 left-5 " size={25} />
                <input type="text" placeholder="Find a user" className="h-16 w-full pl-16 rounded-2xl text-xl placeholder:text-[#3f4350] focus:outline-none bg-[#7c808d] " />
            </div>

            <div className="mt-16">
                <h4 className="text-white text-sm ">Show Users</h4>
                <div className="flex justify-between gap-20">
                    <SortCard name={'All users'} icon={<FaUsers size={40} className='text-white' />} bgColor='bg-[#F935A9]' />
                    <SortCard name={'Male users'} icon={<FaMale size={40} className='text-white' />} bgColor='bg-[#2EBCB5]' />
                    <SortCard name={'Female users'} icon={<FaFemale size={40} className='text-white' />} bgColor='bg-[#7846C1]' />
                </div>
            </div>
        </div>
    )
}

export default LeftSide