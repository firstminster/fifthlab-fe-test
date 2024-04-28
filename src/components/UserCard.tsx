import React from 'react'
import StdImage from './atom/StdImage'
import { FaArrowRight } from 'react-icons/fa'
import { MdOutlineMailOutline, MdOutlinePhoneInTalk } from 'react-icons/md'


export interface Props {
    viewUserDetails: (item: any) => void;
    pageStep: number
}

const UserCard = ({ viewUserDetails, pageStep }: Props) => {

    const getUserData = () => {
        // viewUserDetails()
    }


    return (
        <section className={pageStep === 0 ? "bg-white w-full  px-6 py-10 rounded-xl shadow-xl my-10" : "hidden"}>
            <div className="flex items-end justify-between">
                <StdImage
                    src='/images/images-diaz.jpeg'
                    alt="lendsqr-logo"
                    className="rounded-full border-8 border-[#74D6D0]"
                    width={120}
                    height={120}
                />
                <div className="">
                    <h3 className="text-xl font-bold">
                        Diaz Ramirez
                    </h3>
                    <p className="mt-2 text-lg font-light italic">
                        2479, Blessington, Wexford, Nigeria
                    </p>
                    <div className="flex items-center mt-8 w-full">
                        <p className="flex items-center mr-5"><MdOutlineMailOutline className='mr-2' />laura.woods@example.com</p>
                        <p className="flex items-center mr-10 "><MdOutlinePhoneInTalk className='mr-2' />031-623-5189</p>
                    </div>
                </div>
                <button onClick={getUserData} className='bg-[#74D6D0] py-4 px-6 rounded-xl shadow-xl hover:bg-opacity-90 ' ><FaArrowRight className='text-white ' size={20} /></button>
            </div>
        </section>
    )
}

export default UserCard