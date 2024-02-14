import { FaRegBell } from "react-icons/fa6";

const Navbar = () => {
  return (
    <div className="bg-yellow-500 h-[10vh] flex justify-between items-center px-10">
      Navbar
      <article className="flex">
        <aside className="text-[22px]">
          <FaRegBell />
        </aside>
        <div className="h-[20px] w-[20px] bg-lime-200 rounded-[50%] relative bottom-2 right-1 text-center">
          <span className="relative bottom-[2px]">5</span>
        </div>
      </article>
    </div>
  );
};

export default Navbar;
