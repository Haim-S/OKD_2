import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageSlider = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
      };

      const images = [
        {
          id: 1,
          src: "https://www.okd.co.il/wp-content/uploads/2023/03/COMMIT_OFFICE_001.jpg",
          alt: "Image 1",
        },
        {
          id: 2,
          src: "https://www.okd.co.il/wp-content/uploads/2022/02/Peled-Studios-Emendo-Bio_-41-HDR-copy-1-scaled.jpg",
          alt: "Image 2",
        },
        {
          id: 3,
          src: "https://www.okd.co.il/wp-content/uploads/2021/08/Peled-Studios-Forcepoint_-327-HDR-copy-scaled.jpg",
          alt: "Image 3",
        },
      ];

    
  return (
    <div className='pt-24'>
         
    <Slider {...settings}>
    {images.map((image) => (
      <div key={image.id} className="w-full h-364">
        <img className="mx-auto object-cover" src={image.src} alt={image.alt} />
      </div>
    ))}
  </Slider>
  <h1 className="absolute top-0 left-0 w-full text-center text-3xl font-bold mb-4">My Image Slider</h1>
  </div>
  )
}

export default ImageSlider