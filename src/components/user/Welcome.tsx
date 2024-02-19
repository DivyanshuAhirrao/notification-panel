import { SiYourtraveldottv } from "react-icons/si";
import { GiTakeMyMoney } from "react-icons/gi";
import { FaHouseLaptop } from "react-icons/fa6";
import { GoProjectSymlink } from "react-icons/go";


const Welcome = () => {
  return (
    <>
        <aside className='w-[100%] h-[20%] flex justify-between px-4 pt-2 border-b-2 border-red-100'>
            <h1 className='text-[20px]'>Welcome</h1>
            <a href="#" className='text-[blue] text-[16px]'>View More</a>
        </aside>
        <aside className='w-[100%] h-[80%] text-[15px] flex flex-wrap gap-2 justify-center items-center pl-2'>
            <div className='h-[70px] w-[140px] border-2 border-emerald-100 flex justify-center items-center text-gray-500 shadow-lg rounded-md'> <GoProjectSymlink className="relative bottom-8 text-[20px]"/> PROJECTS </div>
            <div className='h-[70px] w-[140px] border-2 border-emerald-100 flex justify-center items-center text-gray-500 shadow-lg rounded-md'> <GiTakeMyMoney className="relative bottom-8 right-2 text-[20px]"/> SALARY </div>
            <div className='h-[70px] w-[140px] border-2 border-emerald-100 flex justify-center items-center text-gray-500 shadow-lg rounded-md'> <FaHouseLaptop className="relative bottom-8 right-4 text-[20px]"/> PERKS </div>
            <div className='h-[70px] w-[140px] border-2 border-emerald-100 flex justify-center items-center text-gray-500 shadow-lg rounded-md'> <SiYourtraveldottv className="relative bottom-8 text-[20px]"/> HOLIDAYS</div>
        </aside>
    </>
  )
}

export default Welcome