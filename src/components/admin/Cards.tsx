import DATA from "../jsonData/data.json";
import Card from "./Card";
import CommentBox from "./CommentBox";

const Cards = () => {
  return (
    <>
      <main id="cards-container">
        {DATA.map((e, i) => {
          return <Card prop={e} ind={i} />;
        })}

        <CommentBox />
      </main>
    </>
  );
};

export default Cards;
