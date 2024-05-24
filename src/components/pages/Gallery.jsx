import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Gallery() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };

  return (
    <section style={{ padding: "20px 0"}}>
      <div style={{ margin: "0 auto", maxWidth: "1200px" }}>
        <Slider {...settings}>
          <div>
            <img
              style={{ width: "100%" }}
              src="assets/images/training1.jpg"
              alt="Image 1"
            />
          </div>
          <div>
            <img
              style={{ width: "100%" }}
              src="assets/images/training2.jpg"
              alt="Image 2"
            />
          </div>
          <div>
            <img
              style={{ width: "100%" }}
              src="assets/images/army3.jpg"
              alt="Image 3"
            />
          </div>
          <div>
            <img
              style={{ width: "100%" }}
              src="assets/images/army4.jpg"
              alt="Image 4"
            />
          </div>
          <div>
            <img
              style={{ width: "100%" }}
              src="assets/images/army5.jpg"
              alt="Image 5"
            />
          </div>
          <div>
            <img
              style={{ width: "100%" }}
              src="assets/images/army6.jpg"
              alt="Image 6"
            />
          </div>
        </Slider>
      </div>
    </section>
  );
}

export default Gallery;
