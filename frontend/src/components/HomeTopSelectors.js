
import React, { useState } from 'react';
import Airpods from "../assest/assest/products/airpodes/podA.webp"
import Mouse from "../assest/assest/products/mouse/mouse1.webp"
import Camera from "../assest/assest/products/camera/camera1.jpg"
import Earphones from "../assest/assest/products/earphones/ear1.webp"
import Mobiles from "../assest/assest/products/mobile/mobile2.webp"
import Printers from "../assest/assest/products/printers/printer1.webp"
import Processor from "../assest/assest/products/processor/processor1.webp"
import Refrigerator from "../assest/assest/products/refrigerator/Refrigerator1.webp"
import Speakers from "../assest/assest/products/speakers/speaker1.webp"
import Televisions from "../assest/assest/products/TV/tv1.webp"
import Trimmers from "../assest/assest/products/trimmers/trimmer1.webp"
import Watches from "../assest/assest/products/watches/watch1.webp"

const categories = [
  { name: 'Mouse', image: Mouse },
  { name: 'Airpods', image: Airpods },
  { name: 'Camera', image: Camera },
  { name: 'Earphones', image: Earphones },
  { name: 'Mobiles', image: Mobiles },
  { name: 'Printers', image: Printers },
  { name: 'Processor', image: Processor },
  { name: 'Refrigerator', image: Refrigerator },
  { name: 'Speakers', image: Speakers },
  { name: 'Televisions', image: Televisions },
  { name: 'Trimmers', image: Trimmers },
  { name: 'Watches', image: Watches }
];

const HomeTopSelectors = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseLeave = () => {
    setHoveredIndex(null)
  }

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };
  return (
    <div style={{marginTop: '10px', paddingTop: '10px', display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '10px' }}>
      {categories.map((category, index) => (
        <div key={index} style={{ textAlign: 'center' }}>
          <div
            style={{
                width: '80px',
                height: "80px",
                borderRadius: '50%',
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#fofofo'
            }}
          >
            <img className='zoom-image' src={category.image} alt={category.name} style={
                { 
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    objectFit: 'contain',
                    backgroundColor: 'white',
                    transform: hoveredIndex === index ? 'scale(1.1)' : 'scale(1)',
                    transition: 'transform 0.3s ease-in-out'
                }
                } 
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
            />
          </div>
          <p>{category.name}</p>
        </div>
      ))}
    </div>
  );
};

export default HomeTopSelectors;
