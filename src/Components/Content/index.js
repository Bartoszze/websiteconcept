import "./index.sass";
import Button from "../Reusable/Button";

const Content = () => {
  return (
    <div className="content">
      <div className="content__header">
        <h2>Engaging content</h2>
        <p>
          Our mission is to elevate brands trough innovative deisgn and
          strategic marketing
        </p>
      </div>
      <div className="content__block">
        <div className="width" style={{ height: "100%" }}>
          <div className="content__block--left">
            <h3>Building connections through compelling storytelling.</h3>
            <p>
              Our designs are not just visually appealing; they are
              strategically crafted to achieve your goals.
            </p>
            <Button
              margin="40px 0"
              href="https://www.linkedin.com/in/bartosz-stanek-024360221/"
              text="Check it!"
            />
          </div>
          <div className="content__block--right">
            <div className="content__block--right--top">
              <h3>Building connections through compelling storytelling.</h3>
              <p>
                Our designs are not just visually appealing; they are
                strategically crafted to achieve your goals.
              </p>
            </div>
            <div className="content__block--right--bottom">
              <h3>Building connections through compelling storytelling.</h3>
              <p>
                Our designs are not just visually appealing; they are
                strategically crafted to achieve your goals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
