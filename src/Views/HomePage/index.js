import Header from "../../Components/Header";
import Gallery from "../../Components/Gallery";
import Content from "../../Components/Content";
import Clients from "../../Components/Clients";
import Solutions from "../../Components/Solutions";
import AsideImage from "../../Components/Aside";
import Questions from "../../Components/Questions";
import Footer from "../../Components/Footer";
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
      <Footer />
    </div>
  );
};

export default Homepage;
