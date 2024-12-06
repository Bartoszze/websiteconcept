import "./index.sass";
import img from "../../Assets/Images/que.png";

const Questions = () => {
  return (
    <div className="width">
      <div className="questions">
        <div className="questions__left">
          <div className="questions__left--block"></div>
          <div className="questions__left--block"></div>
          <div className="questions__left--block"></div>
          <div className="questions__left--block"></div>
        </div>
        <div className="questions__right">
          <img src={img} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Questions;
