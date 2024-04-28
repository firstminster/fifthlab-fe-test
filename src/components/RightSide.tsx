import React from 'react'
import Input from './input'
import UserCard from './UserCard'

const RightSide = () => {
    return (
        <div className="bg-[#F7F7FF] w-full rounded-[30px] h-auto  py-20 px-10 mt-20 xl:mt-0 ">
            <h3 className="text-2xl font-bold ">All Users</h3>
            <p className="text-xs ">Filter by</p>

            <div className="flex justify-between items-center mt-5">
                <Input name='users' type='text' placeholder={'Find a user'} cssstyles={'h-16 w-full pl-16 rounded-full text-xl placeholder:text-[#3f4350] focus:outline-none bg-[#E8E8F1]'} />

                <select name="" id="">
                    <option value="">hello</option>
                </select>
                <p className="">Toggle</p>
            </div>

            <div className="">
                <UserCard />
            </div>

            <div className="">
                <button></button>
            </div>
        </div>
    )
}

export default RightSide