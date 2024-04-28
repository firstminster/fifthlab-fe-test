export enum ButtonState {
    PRIMARY = "bg-blue-primary rounded flex justify-center items-center text-white",
    SECONDARY = "bg-blue-primary rounded flex justify-center items-center text-white font-normal text-sm-headline my-1",
    OUTLINE = "rounded flex justify-center items-center border border-primary-500 font-semibold text-sm-headline my-1",
    TERTIARY = "rounded flex justify-center items-center px-2 pt-2.5 pb-2 text-primary-500 hover:text-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:text-primary-700",
    DEACTIVATE = "rounded px-2 flex justify-center items-center pt-2.5 pb-2 text-white bg-[#E63532] focus:outline-none focus:ring-0 ",
    ACTIVATE = "rounded flex justify-center items-center px-2 pt-2.5 pb-2 text-white bg-green-600 focus:outline-none focus:ring-0 ",

}

export enum ButtonSize {
    lg = "py-4 px-6",
    md = "py-3 px-5",
    sm = "py-2 px-4",
    xs = "py-1 px-1.5",
}