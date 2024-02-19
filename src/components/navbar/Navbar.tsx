// import { FaRegSun } from "react-icons/fa";
// import { IoMoonOutline } from "react-icons/io5";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import { Avatar, Badge } from "@mui/material";
import { purple } from "@mui/material/colors";
import NotifyBell from "./NotifyBell";
const Navbar = () => {
  return (
    <nav id="navbar">
      <aside className="nav-side-left text-purple-100">Innovators United</aside>
      <aside className="nav-side-right">
        {/* <span id="s1" className="toggle-icon">
          <FaRegSun />
        </span>
        <article className="animate-box">
          <section className="box-ball"></section>
        </article>
        <span id="s2" className="toggle-icon">
          <IoMoonOutline />
        </span> */}

        <NotifyBell />
        
        <article className="nav-profile">
          <Avatar
            alt="Remy Sharp"
            src="data:image/jpeg;base64,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"
          />
        </article>
      </aside>
    </nav>
  );
};

export default Navbar;
