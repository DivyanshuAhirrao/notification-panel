import { FaRegHeart } from "react-icons/fa";
import { FcLike } from "react-icons/fc";
// import { BiCommentDetail } from "react-icons/bi";
import { useState } from "react";
// import Accordion from "@mui/material/Accordion";
// import AccordionActions from "@mui/material/AccordionActions";
// import AccordionDetails from "@mui/material/AccordionDetails";
// import Button from "@mui/material/Button";
import { PiTagChevron } from "react-icons/pi";
import { PiTagChevronFill } from "react-icons/pi";
import { FiSend } from "react-icons/fi";
import { LiaCommentDots } from "react-icons/lia";

const Card = ({ prop, ind }: any) => {
  let [like, setLike] = useState(true);
  let [save, setSave] = useState(false);

  return (
    <div className="card shadow-lg shadow-gray-400" key={ind} >
      <aside className="card-img-box">
        <img
          className="card-img"
          src={prop.avatar_url}
          alt={prop.login}
          onDoubleClick={() => setLike(!like)}
        />
      </aside>
      <aside className="card-details px-4 pt-3">
        <div className="flex gap-[10px] text-[18.45px]">
          {like ? (
            <FaRegHeart className="card-icon" onClick={() => setLike(false)} />
          ) : (
            <FcLike className="card-icon" onClick={() => setLike(true)} />
          )}

          <LiaCommentDots />
          <FiSend />
        </div>
        {!save ? (
          <PiTagChevron
            className="rotate-90"
            onClick={() => setSave(!save)}
          />
        ) : (
          <PiTagChevronFill
            className="rotate-90"
            onClick={() => setSave(!save)}
          />
        )}
        {/* {comment ? (
          <>
            <Accordion defaultExpanded>
              
              <AccordionDetails>
                <form>
                  <textarea
                    name=""
                    id=""
                    placeholder="Type Message here"
                    className="text-[14px] border-2 border-yellow-500-400 w-[100%]"
                  ></textarea>
                </form>
              </AccordionDetails>
              <AccordionActions>
                <Button onClick={()=> setComment(!comment)}>Send</Button>
              </AccordionActions>
            </Accordion>
          </>
        ) : (
          ""
        )} */}
      </aside>
    </div>
  );
};

export default Card;
