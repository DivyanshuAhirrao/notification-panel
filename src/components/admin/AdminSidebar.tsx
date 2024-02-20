import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { MdSpaceDashboard } from "react-icons/md";
import { VscDebugBreakpointLogUnverified } from "react-icons/vsc";
import { Button } from "flowbite-react";
import { TbProgressHelp } from "react-icons/tb";
import { HiCloudDownload } from "react-icons/hi";
import { FaLaptopCode } from "react-icons/fa6";
import ProjectTrack from "./ProjectTrack";

const AdminSidebar = () => {
  return (
    <div className="bg-slate-100 h-[89.4vh] w-[20vw] sticky top-[75px] shadow-lime-800 shadow-lg flex flex-col font-mono">
      <article className="w-[100%] bg-purple-100 text-[20px] h-[7%] flex items-center justify-between px-3">
        <h1 className="text-[28px] font-bold text-gray-500 tracking-widest px-3 rounded-lg">
          ADMIN
        </h1>
        <MenuIcon />
      </article>
      <hr />
      <article className="w-[100%] text-[20px] h-[93%] flex flex-col px-3 pt-2 gap-2">
        <ul className="pt-2 bg-slate-200 rounded-md py-2">
          <div className="w-[100%] flex px-3 gap-2 cursor-pointer">
            <MdSpaceDashboard />{" "}
            <h1 className="relative bottom-[5.7px] font-bold cursor-pointer">
              {" "}
              Dashboard{" "}
            </h1>
          </div>
          <article className="flex flex-col gap-1">
            <div className="w-[100%] flex pl-8 gap-1 cursor-pointer">
              <VscDebugBreakpointLogUnverified />{" "}
              <li className="hover:bg-[#c8fce289] rounded-lg px-3">
                Attendance Tracker
              </li>
            </div>
            <div className="w-[100%] flex pl-8 gap-1 cursor-pointer">
              <VscDebugBreakpointLogUnverified />{" "}
              <li className="hover:bg-[#c8fce289] rounded-lg px-3">Calendar</li>
            </div>
            <div className="w-[100%] flex pl-8 gap-1 cursor-pointer">
              <VscDebugBreakpointLogUnverified />{" "}
              <li className="hover:bg-[#c8fce289] rounded-lg px-3">Holiday List</li>
            </div>
            <div className="w-[100%] flex pl-8 gap-1 cursor-pointer">
              <VscDebugBreakpointLogUnverified />{" "}
              <li className="hover:bg-[#c8fce289] rounded-lg px-3">Users</li>
            </div>
            <div className="w-[100%] flex pl-8 gap-1 cursor-pointer">
              <VscDebugBreakpointLogUnverified />{" "}
              <li className="hover:bg-[#c8fce289]  rounded-lg px-3">Ongoing Projects</li>
            </div>
            <div className="w-[100%] flex pl-8 gap-1 cursor-pointer">
              <VscDebugBreakpointLogUnverified />{" "}
              <li className="hover:bg-[#c8fce289] rounded-lg px-3">Notes</li>
            </div>
          </article>
        </ul>

        {/* <ul className="pt-2 bg-slate-200 rounded-md py-2">
          <div className="w-[100%] flex px-3 gap-2 cursor-pointer">
            <FaLaptopCode />{" "}
            <h1 className="relative bottom-[5.7px] font-bold cursor-pointer">
             Domains
            </h1>
          </div>
          <article className="flex flex-col gap-1">
            <div className="w-[100%] flex pl-8 gap-1 cursor-pointer">
              <VscDebugBreakpointLogUnverified />{" "}
              <li className="hover:bg-[#c8fce289] rounded-lg px-3">
               Advanced UI
              </li>
            </div>
            <div className="w-[100%] flex pl-8 gap-1 cursor-pointer">
              <VscDebugBreakpointLogUnverified />{" "}
              <li className="hover:bg-[#c8fce289] rounded-lg px-3">Backend</li>
            </div>
            <div className="w-[100%] flex pl-8 gap-1 cursor-pointer">
              <VscDebugBreakpointLogUnverified />{" "}
              <li className="hover:bg-[#c8fce289] rounded-lg px-3">Testers</li>
            </div>
          </article>
        </ul> */}
        <ProjectTrack />
      </article>
      <main className="w-[100%] h-[9%] relative bottom-8  flex justify-evenly py-2">
        <Button>
          <TbProgressHelp className="mr-2 h-5 w-5" />
          Help
        </Button>
        <Button outline gradientDuoTone="cyanToBlue">
          <HiCloudDownload className="mr-3 h-4 w-4" />
          Messages
        </Button>
      </main>
    </div>
  );
};

export default AdminSidebar;
