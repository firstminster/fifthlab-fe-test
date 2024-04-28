import { MdOutlineArrowBackIosNew, MdOutlineArrowForwardIos } from "react-icons/md";


export interface Props {
    nPages: number;
    currentPage: number;
    setCurrentPage: any;
    pageStep: number;
}

const Pagination = ({ nPages, currentPage, setCurrentPage, pageStep }: Props) => {
    const goToNextPage = () => {
        if (currentPage !== nPages) setCurrentPage(currentPage + 1)
    }
    const goToPrevPage = () => {
        if (currentPage !== 1) setCurrentPage(currentPage - 1)
    }
    return (
        <div className="flex gap-5">
            <button onClick={goToPrevPage} disabled={pageStep === 1} className="bg-[#D2D3DA] h-10 w-12 flex justify-center items-center rounded-lg hover:bg-opacity-90"><MdOutlineArrowBackIosNew /></button>
            <button onClick={goToNextPage} disabled={pageStep === 1} className="bg-[#262B40] text-white  h-10 w-12 flex justify-center items-center rounded-lg hover:bg-opacity-90"><MdOutlineArrowForwardIos /></button>
        </div>
    )
}

export default Pagination