import React from "react";
import Avatar from "@mui/material/Avatar";
import { useLocation } from "react-router-dom";

const CommentNotify = ({ content }: { content: string })=> {
  const user = useLocation();
  const userData = user.state.user;
  console.log(userData);
  console.log(userData.comment);
  
  
  return (
    
    <div className="w-[100%] py-2 shadow-lg rounded-md flex justify-between text-[16px] border-b-2 ">
      <article className="flex gap-2">
        <Avatar
          alt="Remy Sharp"
          src="https://mui.com/static/images/avatar/2.jpg"
          className="hover:scale-110 cursor-pointer transition-all duration-200"
        />
        <span className="pt-2 pl-2 text-teal-800">Admin Commented : {content} </span>
      </article>
    </div>
  );
};

export default CommentNotify;
