import React from 'react'
import StdImage from './atom/StdImage'
import { MdOutlineMailOutline, MdOutlinePhoneInTalk } from 'react-icons/md'
import { FaArrowLeft } from 'react-icons/fa'

export interface Props {
    goBackToList: () => void;
    pageStep: number
    user: any
}

const UserDetails = ({ goBackToList, pageStep, user }: Props) => {
    const { name: { first, last }, location: { street: { name, number } }, picture: { large }, email, cell, dob: { age } } = user;
    return (
        <div className={pageStep === 1 ? "my-20" : "hidden"}>
            <button onClick={goBackToList} className='flex items-center uppercase mb-6' ><FaArrowLeft className='text-[#74D6D0] mr-4' size={20} /> Results</button>
            <div className="flex items-start justify-start">
                <StdImage
                    src='/images/images-diaz.jpeg'
                    alt="lendsqr-logo"
                    className="rounded-full border-8 border-[#74D6D0]"
                    width={220}
                    height={220}
                />
                <div className="ml-20">
                    <div className="flex items-center mt-3">
                        <h3 className="text-2xl font-black mr-4">
                            {first} {last}
                        </h3>
                        <span className="text-2xl font-thin">{age}</span>
                    </div>
                    <p className="my-2 text-sm font-light italic">
                        {number}, {name}
                    </p>
                    <p className="my-4 flex items-center mr-5 bg-[#D9D9E0] px-4 py-2 rounded-full"><MdOutlineMailOutline className='mr-2' size={20} />laura.woods@example.com</p>
                    <p className="my-6 flex items-center mr-10 bg-[#E5CAE1] px-4 py-2 rounded-full uppercase">Joined: 2014-12-23-44rrffr</p>
                    <p className="pt-6 flex items-center mr-10 "><MdOutlinePhoneInTalk className='mr-2' size={20} />031-623-5189</p>
                    <p className="my-5 flex items-center mr-10 "><MdOutlinePhoneInTalk className='mr-2' size={20} />031-623-5189</p>
                </div>

            </div>
        </div>
    )
}

export default UserDetails