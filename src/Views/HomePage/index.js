import Header from "../../Components/Header";
import Gallery from "../../Components/Gallery";
import Content from "../../Components/Content";
import Clients from "../../Components/Clients";
import Solutions from "../../Components/Solutions";
import AsideImage from "../../Components/Aside";
import Questions from "../../Components/Questions";
import "./index.sass";

const Homepage = () => {
  return (
    <div className="home">
      <Header />
      <Gallery />
      <Content />
      <Clients />
      <Solutions />
      <AsideImage />
      <Questions />
    </div>
  );
};

export default Homepage;
