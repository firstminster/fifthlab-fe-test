import React, { useEffect, useState } from 'react'
import UserCard from './UserCard'
import { MdOutlineCloudDownload } from 'react-icons/md'
import FilterHeader from './FilterHeader'
import UserDetails from './UserDetails'
import { getAllUsers, getUserByNationality, getUserCSV, searchByName, toggleState, userSelector } from '@/features/user'
import { useAppDispatch, useAppSelector } from '@/hooks'
import Pagination from './Pagination'
import { downloadCSV } from '../../utils'
import User from '@/types'
import { countrySelector, getCountries } from '@/features/country'
import Button from './button'
import { ButtonSize, ButtonState } from './button/enum'

const UserLists = () => {
    const dispatch = useAppDispatch();
    const [pageStep, setPageStep] = useState(0);
    const [userData, setUserData] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [recordsPerPage] = useState(3);
    const [searchTerm, setSearchTerm] = useState<any>("");

    const {
        users,
        filteredUsers,
        response,
        toggleStatus,
        pending,
        error,

    } = useAppSelector(userSelector);
    const {
        countries
    } = useAppSelector(countrySelector);

    // handle single user view
    const viewUserDetails = (item: any) => {
        setPageStep((cur) => cur + 1);
        setUserData(item);
    }

    // go back to users list
    const goBackToList = () => {
        setPageStep((cur) => cur - 1);
    }

    const filterSearchTerm = (e: any) => {
        setSearchTerm(e.target.value);
    };
    const filterByNationality = (e: any) => {
        dispatch(getUserByNationality(e.target.value))
    };

    useEffect(() => {
        dispatch(getAllUsers())
        dispatch(getCountries())
    }, [])

    useEffect(() => {
        dispatch(searchByName(searchTerm))
    }, [searchTerm, dispatch]);



    // pagination
    const indexOfLastRecord = currentPage * recordsPerPage;
    const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
    const currentRecords = filteredUsers.slice(indexOfFirstRecord, indexOfLastRecord);
    const nPages = Math.ceil(filteredUsers.length / recordsPerPage)

    const downloadCSVUsers = () => {
        dispatch(getUserCSV())
        downloadCSV(
            [response],
            users,
            'users record'
        )
    }


    return (
        <div className="bg-[#F7F7FF] w-full rounded-[30px] h-auto py-20 px-10 mt-20 xl:mt-0 ">
            <FilterHeader pageStep={pageStep} filterSearchTerm={filterSearchTerm} searchTerm={searchTerm} filterByNationality={filterByNationality} />
            {pageStep >= 0 && (
                <div className="">
                    {currentRecords?.map((item: User, idx: number) => {
                        return (
                            <UserCard key={item.cell} viewUserDetails={viewUserDetails} pageStep={pageStep} item={item} toggleStatus={toggleStatus} />
                        )
                    })}
                </div>
            )}

            {pageStep >= 1 && (
                <UserDetails goBackToList={goBackToList} pageStep={pageStep} user={userData} />
            )}

            <div className="flex justify-between items-center pt-10">
                <Button
                    variant={ButtonState.NEUTRAL}
                    icon={<MdOutlineCloudDownload size={25} className='mr-4' />}
                    value={"Download Results"}
                    disabled={pageStep === 1}
                    size={ButtonSize.lg}
                    onClick={() => downloadCSVUsers()}
                    className={"flex"}
                />

                <Pagination
                    pageStep={pageStep}
                    nPages={nPages}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                />
            </div>
        </div>


    )
}

export default UserLists

