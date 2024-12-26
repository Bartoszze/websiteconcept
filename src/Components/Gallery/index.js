import { useState } from "react";
import GalleryImage1 from "./../../Assets/Images/gallery1.jpg";
import GalleryImage2 from "./../../Assets/Images/gallery2.jpg";
import GalleryImage3 from "./../../Assets/Images/gallery3.jpg";
import ArrorDown from "./../../Assets/Images/ard.png";
import ArrorUp from "./../../Assets/Images/aru.png";

import "./index.sass";

const Gallery = () => {
  const gallery = [GalleryImage1, GalleryImage2, GalleryImage3];
  const [act, setAct] = useState(0);
  const [fade, setFade] = useState(false);

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
  );
};

export default Gallery;
