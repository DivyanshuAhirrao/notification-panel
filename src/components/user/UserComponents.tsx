import React, { useReducer, useRef, useState } from "react";

const UserComponents = () => {

  let box: any = useRef();

  function painter(gc: string) {
    box.current.style.background = gc;
  }

//   {
//     flag ? painter("#eee") : painter("#19222F");
//   }

  return (
    <section className="components-container">
      <div className="user-component1">
        <div className="user-calender" ref={box}>
          Calender
        </div>
      </div>
      <div className="user-component2">
        <div className="user-birthday" ref={box}>
          Birthday
        </div>
        <div className="user-welcome" ref={box}>
          Welcome Employee
        </div>
      </div>
      <div className="user-component3">
        <div className="user-learning" ref={box}>
          Learning
        </div>
        <div className="user-survey" ref={box}>
          Survey
        </div>
        <div className="user-morelinks" ref={box}>
          More Links
        </div>
        <div className="user-socialmedia" ref={box}>
          Social Media
        </div>
      </div>
    </section>
  );
};

export default UserComponents;
