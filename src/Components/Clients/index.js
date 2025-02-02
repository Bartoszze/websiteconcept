import React, { useRef } from "react";
import "./index.sass";
import reviews from "../../Assets/ClientsReviews";
import { motion } from "framer-motion";

const Clients = () => {
  const blockRef = useRef(null);
  let isDown = false;
  let startX;
  let scrollLeft;

  const handleMouseDown = (e) => {
    isDown = true;
    blockRef.current.classList.add("active");
    startX = e.pageX - blockRef.current.offsetLeft;
    scrollLeft = blockRef.current.scrollLeft;
  };

  const handleMouseLeave = () => {
    isDown = false;
    blockRef.current.classList.remove("active");
  };

  const handleMouseUp = () => {
    isDown = false;
    blockRef.current.classList.remove("active");
  };

  const handleMouseMove = (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - blockRef.current.offsetLeft;
    const walk = (x - startX) * 3;
    blockRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <div className="clients">
      <motion.div
        initial={{ opacity: 0, y: 8, scale: 0.9 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
        className="clients__header"
      >
        <h2>What clients say</h2>
      </motion.div>
      <div
        className="clients__block"
        ref={blockRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        {reviews.map((rev, index) => (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.12 * index }}
            viewport={{ once: true }}
            className="clients__block--review"
            key={index}
          >
            <div className="clients__block--review--info">
              <img
                className="clients__block--gap"
                src={rev.avatar}
                alt={`${rev.name}'s avatar`}
              />
              <div className="clients__block--review--info--headline">
                <h3>{rev.name}</h3>
                <h4>{rev.title}</h4>
              </div>
            </div>
            <div className="clients__block--review--content">
              <div className="clients__block--gap" />
              <p>{rev.feedback}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Clients;
