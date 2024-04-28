import React from 'react'
import { SlMagnifier } from 'react-icons/sl'

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
                <div className="">
                    <div className="">

                    </div>
                </div>
            </div>
        </div>
    )
}

export default LeftSide