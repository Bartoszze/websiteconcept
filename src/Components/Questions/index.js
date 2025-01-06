import "./index.sass";
import img from "../../Assets/Images/que.png";
import questions from "../../Assets/Questions";
import { useState } from "react";

const Questions = () => {
  const [visibility, setVisibility] = useState(
    Array(questions.length).fill(false)
  );

  const toggleVisibility = (index) => {
    setVisibility((prev) =>
      prev.map((item, i) => (i === index ? !item : item))
    );
  };

  return (
    <div className="width">
      <div className="questions">
        <div className="questions__left">
          {questions.map((content, index) => (
            <div
              className="questions__left--block"
              key={content.question}
              onClick={() => toggleVisibility(index)}
            >
              <h3>{content.question}</h3>
              <p className={`${visibility[index] ? "" : "hide"}`}>
                {content.answer}
              </p>
            </div>
          ))}
        </div>
        <div className="questions__right">
          <img src={img} alt="sample" />
        </div>
      </div>
    </div>
  );
};

export default Questions;
