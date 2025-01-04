import "./index.sass";
import test from "./../../Assets/Images/cont.png";

const Solutions = () => {
  return (
    <div className="solutions">
      <div className="solutions__header">
        <h2>Crafting unique solutions</h2>
        <p>
          Our mission is to elevate brands through innovative design and
          strategic marketing
        </p>
      </div>
      <div className="solutions__image">
        <div className="width">
          <img src={test} alt="" />
        </div>
      </div>
      <div className="width">
        <div className="solutions__block">
          <div className="solutions__block--text">
            <h3>Let's collaborate to bring your vision to life.</h3>
            <p>We believe in the power of creativity to transform brands.</p>
            <a href="github.com">
              Discover security <span>{">"}</span>
            </a>
            <img
              src="https://github.githubassets.com/assets/pillar-2-ff69e872920a.webp"
              alt=""
            />
          </div>
          <div className="solutions__block--text">
            <h3>Innovative strategies for a digital world.</h3>
            <p>
              Our team is dedicated to delivering excellence in every project.
            </p>
            <a href="github.com">
              Learn about it <span>{">"}</span>
            </a>
            <img
              src="https://github.githubassets.com/assets/pillar-2-ff69e872920a.webp"
              alt=""
            />
          </div>
          <div className="solutions__block--text">
            <h3>Elevate your brand with our expert marketing solutions.</h3>
            <p>
              We are here to help you navigate the complexities of digital
              marketing.
            </p>
            <a href="github.com">
              Read about it <span>{">"}</span>
            </a>
            <img
              src="https://github.githubassets.com/assets/pillar-2-ff69e872920a.webp"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solutions;
