import React from "react";
import { Carousel, Container } from "react-bootstrap"; 
import "bootstrap/dist/css/bootstrap.min.css";

import Desk1 from "./assets/Desk1.webp";
import Desk2 from "./assets/Desk2.webp";
import Desk3 from "./assets/Desk3.webp";
import Desk4 from "./assets/Desk4.webp";
import Desk5 from "./assets/Desk5.webp";
import Desk6 from "./assets/Desk6.webp";

const Carousell = () => {
    const images = [Desk1, Desk2, Desk3, Desk4, Desk5, Desk6];
  
    const groupImages = (images, groupSize) => {
      const groups = [];
      for (let i = 0; i < images.length; i += groupSize) {
        groups.push(images.slice(i, i + groupSize));
      }
      return groups;
    };
  
    const groupedImages = groupImages(images, 3);
  
    return (
      <Container className="mt-4">
        <Carousel indicators={true} interval={3000}>
          {groupedImages.map((group, index) => (
            <Carousel.Item key={index}>
              <div className="d-flex justify-content-start">
                {group.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt={`Slide ${index}`}
                    className="carousel-image rounded"
                  />
                ))}
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>
    );
  };
  
  export default Carousell;