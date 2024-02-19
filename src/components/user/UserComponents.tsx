import React, { useContext, useReducer, useRef, useState } from "react";
import Calender from "./Calender";
import Birthday from "./Birthday";
import Welcome from "./Welcome";
import Learning from "./Learning";
import SocialLinks from "./SocialLinks";
// import { GlobalContextApi } from "../context/GlobalContext";

const UserComponents = () => {

  let box: any = useRef();

  // let{flag, setFlag}:any = useContext(GlobalContextApi);

  function painter(gc: string) {
    // setFlag(!flag);
    box.current.style.background = gc;
  }

  {
    // flag ? painter("#eee") : painter("#19222F");
  }

  return (
    <section className="components-container">
      <div className="user-component1">
        <div className="user-calender" ref={box}>
          <Calender />
        </div>
      </div>
      <div className="user-component2">
        <div className="user-birthday" ref={box}>
          <Birthday />
        </div>
        <div className="user-welcome" ref={box}>
          <Welcome />
        </div>
      </div>
      <div className="user-component3">
        <div className="user-learning" ref={box}>
          <Learning />
        </div>
        <div className="user-morelinks" ref={box}>
          <SocialLinks />
        </div>
        
      </div>
    </section>
  );
};

export default UserComponents;
