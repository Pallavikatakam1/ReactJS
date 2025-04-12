import React from "react";
import { Carousel, Container } from "react-bootstrap"; 
import "bootstrap/dist/css/bootstrap.min.css";

import banner1 from "./assets/banner1.avif";
import banner2 from "./assets/banner2.avif";
import banner3 from "./assets/banner3.avif";
import banner4 from "./assets/banner4.avif";
import banner5 from "./assets/banner5.avif";

const Banner = () => {
    const images = [banner1, banner2, banner3, banner4, banner5];

    const groupImages = (images, groupSize) => {
        const groups = [];
        for (let i=0; i<images.length; i += groupSize) {
            groups.push(images.slice(i,i+groupSize));
        }
        return groups;
    };

    const groupedImages = groupImages(images,1);
    return(
        <Container className="mt-4">
        <Carousel indicators={true} interval={3000}>
            {groupedImages.map((group,index) => (
                <Carousel.Item key={index}>
                    <div className="d-flex justify-content-start">
                        {group.map((img,i) => (
                            <img 
                            width="100%"
                            height="80%"
                            key={i}
                            src={img}
                            alt={'Slide ${index}'}
                            className="carousel-image rounded"
                            />
                        ))}
                    </div>
                </Carousel.Item>
            ))}
            </Carousel>
        </Container>
        
    )
}

export default Banner;