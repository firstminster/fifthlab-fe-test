
import Input from './input'


export interface Props {
    pageStep: number
}

const FilterHeader = ({ pageStep }: Props) => {
    return (
        <div>
            <h3 className="text-2xl font-bold ">{pageStep === 0 ? 'All Users' : 'User List'}</h3>
            <p className="text-sm ">Filter by</p>

            <div className="flex justify-between items-center mt-5">
                <Input name='users' type='text' placeholder={'Find in List'} cssstyles={'h-16 w-full pl-16 rounded-full text-lg placeholder:text-[#3f4350] focus:outline-none bg-[#E8E8F1]'} />

                <select name="" id="">
                    <option value="">hello</option>
                </select>
                <p className="">Toggle</p>
            </div>
        </div>
    )
}

export default FilterHeader