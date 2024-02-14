import { createContext, useRef, useState } from "react";

export const GlobalContextApi = createContext({});

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


const GlobalContext = ({children}:any)=> {
    <GlobalContextApi.Provider value={{ flag, setFlag }}>
        {children}
    </GlobalContextApi.Provider>
}

export default GlobalContext;