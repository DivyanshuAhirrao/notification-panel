import "../sass/main.scss";
import SingleUser from "../user/SingleUser";
import Navbar from "../navbar/Navbar";

const LandingUI = () => {

  return (
    <section id="ui-container">
      <Navbar />
      <SingleUser />
    </section>
  );
};

export default LandingUI;
