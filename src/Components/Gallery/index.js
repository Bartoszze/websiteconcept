import { useState, useRef } from "react";
import GalleryImage1 from "./../../Assets/Images/gallery1.jpg";
import GalleryImage2 from "./../../Assets/Images/gallery2.jpg";
import GalleryImage3 from "./../../Assets/Images/gallery3.jpg";
import ArrorDown from "./../../Assets/Images/ard.png";
import ArrorUp from "./../../Assets/Images/aru.png";
import { motion, useScroll, useTransform } from "framer-motion";

import "./index.sass";

const Gallery = () => {
  const gallery = [GalleryImage3, GalleryImage2, GalleryImage1];
  const [act, setAct] = useState(0);
  const [fade, setFade] = useState(false);

  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const rotateX = useTransform(scrollYProgress, [0.4, 0.8], [15, 0]);
  const rotateY = useTransform(scrollYProgress, [0.2, 0.4], [-15, 0]);
  const rotateZ = useTransform(scrollYProgress, [0.2, 0.4], [10, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [0.7, 1]);

  const changeImage = (newAct) => {
    setFade(true);
    setTimeout(() => {
      setAct(newAct);
      setFade(false);
    }, 200);
  };

  const handleUp = () => {
    if (act < gallery.length - 1) changeImage((act) => act + 1);
  };

  const handleDown = () => {
    if (act > 0) changeImage((act) => act - 1);
  };

  return (
    <div className="overflow-hidden" style={{ overflow: "hidden" }}>
      <motion.div
        ref={ref}
        style={{
          scale: scale,
          rotateX: rotateX,
          rotateY: rotateY,
          rotateZ: rotateZ,
        }}
        transition={{ duration: 0.4 }}
      >
        <div className="gallery">
          <div className="gallery__buttons">
            <img
              className={`gallery__buttons--up ${
                act === gallery.length - 1 ? "shadow" : ""
              }`}
              onClick={handleUp}
              src={ArrorUp}
              alt="Arrow up"
            />
            <img
              className={`gallery__buttons--down ${act === 0 ? "shadow" : ""}`}
              onClick={handleDown}
              src={ArrorDown}
              alt="Arrow down"
            />
          </div>
          <div className="gallery__block">
            <img
              src={gallery[act]}
              alt="Marketing pictures"
              className={`gallery__image ${fade ? "fade-out" : "fade-in"}`}
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Gallery;
