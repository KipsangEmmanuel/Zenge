import React, { useEffect, useRef, useState } from 'react'
import '../css/HomeCarousel.css'
import image1 from '../assest/assest/banner/img2.webp';
import image2 from '../assest/assest/banner/img1.webp';
import image3 from '../assest/assest/banner/img3.jpg';
import image4 from '../assest/assest/banner/img4.jpg';
import image5 from '../assest/assest/banner/img5.webp';

const images = [
  image1,
  image2,
  image3,
  image4,
  image5
]

const HomeCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true)
  const carouselRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => prevIndex +1);
    }, 3000);

    return () => clearInterval(interval)
  }, []);

  useEffect(() => {
    const totalImages = images.length;
    if(currentIndex === totalImages) {
      setIsTransitioning(false);
      setTimeout(() =>{
        setCurrentIndex(0);
        setIsTransitioning(true);
      }, 3000);
    }
  }, [currentIndex]);

  useEffect(() => {
    if(carouselRef.current) {
      const offset = -(currentIndex % images.length) * 100;
      carouselRef.current.style.transition = isTransitioning ? 'transform 0.5s ease' : 'none';
      carouselRef.current.style.transform = `translateX(${offset}%)`
    }
  }, [currentIndex, isTransitioning]);

  return (
    <div className='carousel-container'>
      <div className='carousel-inner' ref={carouselRef}>
        {images.map((image, index) => (
          <img src={image} alt={`Slide ${index}`} key={index} className='carousel-image'/>
        ))}
      </div>
    </div>
  )
}

export default HomeCarousel