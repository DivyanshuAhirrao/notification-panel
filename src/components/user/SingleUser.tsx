import { LuUserCircle } from "react-icons/lu";
import { SlPencil } from "react-icons/sl";
import { AiOutlineHome } from "react-icons/ai";
import { FaChartLine } from "react-icons/fa6";
import { BiHome } from "react-icons/bi";
import UserComponents from "./UserComponents";

const SingleUser = () => {
  return (
    <main id="user-container">
      <section id="user-box">
        <aside className="user-box-left">
          <LuUserCircle className="user-icon" />
          <span className="user-welacome-name">
            Welcome , Divyanshu Ahirrao
          </span>
        </aside>
        <aside className="user-box-right">
          <SlPencil className="personalize-icon" />{" "}
          <span className="personalize"> Personalize </span>
        </aside>
      </section>
      <div className="user-nav-box">
        <span className="triangle-1"></span>
        <article className="user-nav-first">
          <AiOutlineHome /> <span className="user-nav-icon-label">Home</span>
        </article>
        <article className="user-nav-second">
          <FaChartLine />
        <span className="user-nav-icon-label">Growth</span>
        </article>
      </div>
      <UserComponents />
    </main>
  );
};

export default SingleUser;
