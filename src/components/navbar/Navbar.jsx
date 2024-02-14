import React from 'react'
import { FaRegSun } from "react-icons/fa";
import { IoMoonOutline } from "react-icons/io5";

const Navbar = () => {



  return (
    <nav id="navbar">
        <aside className="nav-side-left"></aside>
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
  )
}

export default Navbar