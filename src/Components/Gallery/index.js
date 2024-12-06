import { useState } from "react";
import GalleryImage1 from "./../../Assets/Images//gallery1.jpg";
import GalleryImage2 from "./../../Assets/Images//gallery2.jpg";
import GalleryImage3 from "./../../Assets/Images//gallery3.jpg";

import "./index.sass";

const Gallery = () => {
  const gallery = [GalleryImage1, GalleryImage2, GalleryImage3];

  return (
    <div className="gallery">
      {gallery.map((src, i) => (
        <div className="gallery__block" id={i}>
          <img src={src} alt="Marketing pictures" />
        </div>
      ))}
    </div>
  );
};

export default Gallery;
