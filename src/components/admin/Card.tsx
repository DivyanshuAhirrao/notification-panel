import { FaRegHeart } from "react-icons/fa";
import { FcLike } from "react-icons/fc";
import { useState } from "react";
import { PiTagChevron } from "react-icons/pi";
import { PiTagChevronFill } from "react-icons/pi";
import { FiSend } from "react-icons/fi";
import { LiaCommentDots } from "react-icons/lia";
import { useEffect } from "react";
// importing aos
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";
import toast from "react-hot-toast";

const Card = ({ prop }: any) => {
  let [liked, setLiked] = useState(true);
  let [save, setSave] = useState(false);
  // const payload = prop?.userData.payload;
  console.log(prop);

  const likes = async () => {
    setLiked(!liked);
    // const newLike = liked;

    if (!prop) {
      console.error("Payload is empty");
      return;
    }

    try {
      const { id, like } = prop;

      // Construct the new notifications array including the new notification
      // const newNotifications = [...comment, notification];

      await axios.patch(`http://localhost:5000/users/${id}`, {
        like: liked,
      });

      toast.success(`You Liked ${prop.firstName}`);
    } catch (error) {
      console.error("Error updating notifications:", error);
      toast.error("Failed to send notification");
    }
  };

  console.log(prop);

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
      data-aos="zoom-out-up"
      className="card shadow-lg shadow-gray-400"
      key={prop.id}
    >
      <aside className="card-img-box">
        <img
          className="card-img"
          src={prop.imageUrl}
          alt={prop.id}
          onDoubleClick={likes}
        />
      </aside>
      <aside className="card-details px-4 pt-3">
        <div className="flex gap-[10px] text-[18.45px]">
          {liked ? (
            <FaRegHeart className="card-icon" onClick={likes} />
          ) : (
            <FcLike className="card-icon" onClick={likes} />
          )}

          <LiaCommentDots />
          <FiSend />
        </div>
        {!save ? (
          <PiTagChevron className="rotate-90" onClick={() => setSave(!save)} />
        ) : (
          <PiTagChevronFill
            className="rotate-90"
            onClick={() => setSave(!save)}
          />
        )}
      </aside>
    </div>
  );
};

export default Card;
