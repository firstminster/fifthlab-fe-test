import React from 'react'
import StdImage from './atom/StdImage'
import { FaArrowRight } from 'react-icons/fa'
import { MdOutlineMailOutline, MdOutlinePhoneInTalk } from 'react-icons/md'
import User from '@/types';


export interface Props {
    viewUserDetails: (item: any) => void;
    pageStep: number
    item: User
}

const UserCard = ({ viewUserDetails, pageStep, item }: Props) => {
    const { name: { first, last }, location: { street: { name, number } }, picture: { large }, email, cell } = item;

    const getUserData = () => {
        viewUserDetails(item)
    }


    return (
        <section className={pageStep === 0 ? "bg-white w-full  px-6 py-10 rounded-xl shadow-xl my-10" : "hidden"}>
            <div className="flex items-end justify-between">
                <StdImage
                    src={large}
                    alt="lendsqr-logo"
                    className="rounded-full border-8 border-[#74D6D0]"
                    width={120}
                    height={120}
                />
                <div className="">
                    <h3 className="text-xl font-bold">
                        {first} {last}
                    </h3>
                    <p className="mt-2 text-lg font-light italic">
                        {number}, {name}, Nigeria
                    </p>
                    <div className="flex items-center mt-8 w-full">
                        <p className="flex items-center mr-5"><MdOutlineMailOutline className='mr-2' />{email}</p>
                        <p className="flex items-center mr-10 "><MdOutlinePhoneInTalk className='mr-2' />{cell}</p>
                    </div>
                </div>
                <button onClick={getUserData} className='bg-[#74D6D0] py-4 px-6 rounded-xl shadow-xl hover:bg-opacity-90 ' ><FaArrowRight className='text-white ' size={20} /></button>
            </div>
        </section>
    )
}

export default UserCard