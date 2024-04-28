import React, { useState } from 'react'
import Input from './input'
import UserCard from './UserCard'
import { MdOutlineArrowBackIosNew, MdOutlineArrowForwardIos, MdOutlineCloudDownload } from 'react-icons/md'
import FilterHeader from './FilterHeader'
import UserDetails from './UserDetails'

const UserLists = () => {
    const [pageStep, setPageStep] = useState(0);

    // handle single user view
    const viewUserDetails = (item: any) => {
        setPageStep((cur) => cur + 1);
        console.log(item);
    }

    // go back to users list
    const goBackToList = () => {
        setPageStep((cur) => cur - 1);
    }

    return (
        <div className="bg-[#F7F7FF] w-full rounded-[30px] h-auto  py-20 px-10 mt-20 xl:mt-0 ">
            <FilterHeader />
            {pageStep >= 0 && (
                <div className="">
                    <UserCard viewUserDetails={viewUserDetails} pageStep={pageStep} />
                </div>
            )}

            {pageStep >= 1 && (
                <UserDetails goBackToList={goBackToList} pageStep={pageStep} />
            )}

            <div className="flex justify-between">
                <button className='bg-[#7846C1] flex items-center justify-center text-sm font-medium text-white px-5 py-3 rounded-full hover:bg-opacity-90 h-14'><MdOutlineCloudDownload size={25} className='mr-4' />Download Results</button>

                <div className="flex gap-5">
                    <button className="bg-[#D2D3DA] h-10 w-12 flex justify-center items-center rounded-lg hover:bg-opacity-90"><MdOutlineArrowBackIosNew /></button>
                    <button className="bg-[#262B40] text-white  h-10 w-12 flex justify-center items-center rounded-lg hover:bg-opacity-90"><MdOutlineArrowForwardIos /></button>
                </div>
            </div>
        </div>


    )
}

export default UserLists