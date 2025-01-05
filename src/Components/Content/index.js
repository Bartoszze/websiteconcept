import "./index.sass";
import Button from "../Reusable/Button";
import { motion } from "framer-motion";

const Content = () => {
  return (
    <div className="content">
      <motion.div
        initial={{ opacity: 0, y: 8, scale: 0.9 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.4, delay: 0.3 }}
        viewport={{ once: true }}
        className="content__header"
      >
        <h2>Engaging content</h2>
        <p>
          Our mission is to elevate brands through innovative design and
          strategic marketing
        </p>
      </motion.div>
      <div className="content__block">
        <div className="width" style={{ height: "100%" }}>
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            viewport={{ once: true }}
            className="content__block--left"
          >
            <h3>Building connections through compelling storytelling.</h3>
            <p>
              Our designs are not just visually appealing; they are
              strategically crafted to achieve your goals.
            </p>
            <Button
              margin="50px 0"
              href="https://www.linkedin.com/in/bartosz-stanek-024360221/"
              text="Check it!"
            />
          </motion.div>
          <div className="content__block--right">
            <motion.div
              initial={{ opacity: 0, y: 1.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              viewport={{ once: true }}
              className="content__block--right--top"
            >
              <h3>Innovative solutions for modern businesses.</h3>
              <p>
                We provide creative solutions that drive business growth and
                success.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 1.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.5 }}
              viewport={{ once: true }}
              className="content__block--right--bottom"
            >
              <h3>Transforming ideas into reality.</h3>
              <p>
                Our team is dedicated to turning your vision into a tangible and
                impactful experience.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
