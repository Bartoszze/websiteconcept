import "./index.sass";
import banner from "./../../Assets/Images/cont.png";
import rec from "./../../Assets/Images/rectangle.png";
import { motion } from "framer-motion";

const Solutions = () => {
  return (
    <div className="solutions">
      <div className="solutions__header">
        <motion.h2
          initial={{ scale: 0.9, y: 28 }}
          whileInView={{ scale: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
        >
          <h2>Crafting unique solutions</h2>
        </motion.h2>
        <motion.p
          initial={{ scale: 0.9, y: 28 }}
          whileInView={{ scale: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
        >
          Our mission is to elevate brands through innovative design and
          strategic marketing
        </motion.p>
      </div>
      <div className="solutions__image">
        <div className="width">
          <img src={banner} alt="sample banner" />
        </div>
      </div>
      <div className="width">
        <div className="solutions__block">
          <div className="solutions__block--text">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3>Let's collaborate to bring your vision to life.</h3>
              <p>We believe in the power of creativity to transform brands.</p>
              <a href="github.com">
                Discover security <span>{">"}</span>
              </a>
              <img src={rec} alt="rectangle" />
            </motion.div>
          </div>
          <div className="solutions__block--text">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.35 }}
              viewport={{ once: true }}
            >
              <h3>Innovative strategies for a digital world.</h3>
              <p>
                Our team is dedicated to delivering excellence in every project.
              </p>
              <a href="github.com">
                Learn about it <span>{">"}</span>
              </a>
              <img src={rec} alt="rectangle" />
            </motion.div>
          </div>
          <div className="solutions__block--text">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h3>Elevate your brand with our expert marketing solutions.</h3>
              <p>
                We are here to help you navigate the complexities of digital
                marketing.
              </p>
              <a href="github.com">
                Read about it <span>{">"}</span>
              </a>
              <img src={rec} alt="rectangle" />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solutions;
