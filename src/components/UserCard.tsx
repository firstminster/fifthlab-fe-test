import React from 'react'
import StdImage from './atom/StdImage'
import { FaArrowRight } from 'react-icons/fa'
import { MdOutlineMailOutline, MdOutlinePhoneInTalk } from 'react-icons/md'
import User from '@/types';
import Button from './button';
import { ButtonSize, ButtonState } from './button/enum';


export interface Props {
    viewUserDetails: (item: any) => void;
    pageStep: number
    item: User
    toggleStatus: boolean
}

const UserCard = ({ viewUserDetails, pageStep, item, toggleStatus }: Props) => {
    const { name: { first, last }, location: { street: { name, number } }, picture: { large }, email, cell } = item;

    const getUserData = () => {
        viewUserDetails(item)
    }

    return (
        <section className={pageStep === 0 ? "bg-white w-full  px-6 py-10 rounded-xl shadow-xl my-10" : "hidden"}>
            <div className="flex flex-wrap flex-col lg:flex-row items-center lg:items-end justify-center lg:justify-between">
                <StdImage
                    src={large}
                    alt="lendsqr-logo"
                    className="rounded-full border-8 border-[#74D6D0]"
                    width={120}
                    height={120}
                />
                <div className="flex flex-col items-center lg:items-start justify-center mt-5 ">
                    <h3 className="text-xl font-bold">
                        {first} {last}
                    </h3>
                    <p className="mt-2 text-lg font-light italic">
                        {number}, {name},{toggleStatus && <span> Nigeria</span>}
                    </p>
                    <div className="flex flex-wrap justify-center items-center mt-8 w-full gap-3 lg:gap-0">
                        <p className="flex items-center mr-5"><MdOutlineMailOutline className='mr-2' />{email}</p>
                        <p className="flex items-center mr-10 "><MdOutlinePhoneInTalk className='mr-2' />{cell}</p>
                    </div>
                </div>


                <Button
                    variant={ButtonState.PRIMARY}
                    iconTwo={<FaArrowRight className='text-white' size={20} />}
                    size={ButtonSize.lg}
                    onClick={() => getUserData()}
                    className={"flex mt-5 "}
                />
            </div>
        </section>
    )
}

export default UserCard