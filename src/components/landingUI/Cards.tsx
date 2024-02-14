import DATA from '../jsonData/data.json'
import Card from "./Card";

const Cards = () => {
  
  let dates = new Date();
  console.log(dates.getDate());

  return (
    <main id="cards-container">
      {
        DATA.map((e,i)=>{
          return(
            <Card prop={e} ind={i} />
          )
        })
      }
      </main>
  );
};

export default Cards;
