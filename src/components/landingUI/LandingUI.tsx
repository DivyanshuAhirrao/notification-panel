// import styled from "styled-components";
import { FaRegSun } from "react-icons/fa";
import { IoMoonOutline } from "react-icons/io5";
import Cards from "./Cards";
import { useRef, useState } from "react";
import '../sass/main.scss'
import SingleUser from "../user/SingleUser";



const LandingUI = () => {

  let [flag, setFlag] = useState(false);

  let box:any = useRef();
  let s1Ref:any = useRef();
  let s2Ref:any = useRef();
  let animate:any = useRef();
  let ball:any = useRef();

  function painter(
    gc: string,
    c: string,
    hid: string,
    vis: string,
    pos: string
  ) {
    box.current.style.background = gc;
    box.current.style.color = c;
    s1Ref.current.style.visibility = hid;
    s2Ref.current.style.visibility = vis;
    animate.current.style.background=c;
    animate.current.style.justifyContent = pos;
    ball.current.style.background = gc;
  }

  function toggle() {
    setFlag(!flag);
    {
      flag
        ? painter("#eee", "#19222F", "hidden", "visible", "start")
        : painter("#19222F", "#eee", "visible", "hidden", "end");
    }
  }


  return (
    <section id="ui-container" ref={box}>
      <nav id="navbar">
        <aside className="nav-side-left">
          Innovators United
        </aside>
        <aside className="nav-side-right">
          <span id="s1" className="toggle-icon" ref={s1Ref}>
            <FaRegSun />
          </span>
          <article className="animate-box" ref={animate} onClick={toggle}>
            <section className="box-ball" ref={ball}></section>
          </article>
          <span id="s2" className="toggle-icon" ref={s2Ref}>
            <IoMoonOutline />
          </span>
        </aside>
      </nav>
      {/* <Cards /> */}
      <SingleUser />
    </section>
  );
};

export default LandingUI;
