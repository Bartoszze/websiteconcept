import "./index.sass";
import Stars from "./../../Assets/Images/stars.svg";
import Button from "../Reusable/Button";
import { motion } from "motion/react";

const Header = () => {
  return (
    <div className="header">
      <div className="width">
        <div className="header__block">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            viewport={{ once: true }}
            className="header__info"
          >
            <div className="header__info--text">
              <h2>Crafting beautiful user experiences since 2015.</h2>
            </div>
            <div className="header__info--img" id="starsTop">
              <img src={Stars} alt="yellow stars" />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.7 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            viewport={{ once: true }}
            className="header__text"
          >
            <h1>
              <span id="f">Innovative</span>
              <span id="s">Branding</span>
              <span id="t">Creative studio</span>
            </h1>
            <Button
              margin="40px 0"
              href="https://www.linkedin.com/in/bartosz-stanek-024360221/"
              text="Explore more!"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            viewport={{ once: true }}
            className="header__info"
          >
            <div className="header__info--img">
              <img src={Stars} alt="yellow stars" />
            </div>
            <div className="header__info--text">
              <h2>Located in the vibrant heart of San Francisco, CA.</h2>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Header;
