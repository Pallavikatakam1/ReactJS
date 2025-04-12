// import React from 'react';
// import { Container, Row, Col } from 'react-bootstrap';
// import './App.css';

// import flowers from "./assets/flowers.avif";
// import cakes from "./assets/cakes.avif";
// import combos from "./assets/combos.avif";
// import plants from "./assets/plants.avif";
// import personal from "./assets/personal.avif";
// import gifts from "./assets/gifts.avif";

// const Category = () => {
//     return (
//         <Container className="mt-4"> 
//             <Row className="category-row">
//                 <Col className="category-item" xs={1}>
//                 <img
//                 src={flowers}
//                 alt="flowers"
//                 rounded
//                 className="category-img"
//                 />
//                 <span>Flowers</span>
//                 </Col>

//                 <Col className="category-item" xs={1}>
//                 <img
//                 src={cakes}
//                 alt="cakes"
//                 rounded
//                 className="category-span"
//                 />
//                 <span>Cakes</span>
//                 </Col>

//                 <Col className="category-item" xs={1}>
//                 <img src={combos}
//                 alt="combos"
//                 rounded
//                 className="category-span"
//                 />
//                 <span>Combos</span>
//                 </Col>

//                 <Col className="category-item" xs={1}>
//                 <img src={plants}
//                 alt="plants"
//                 rounded
//                 className="category-span"
//                 />
//                 <span>Plants</span>
//                 </Col>

//                 <Col className="category-item" xs={1}>
//                 <img src={personal}
//                 alt="personal"
//                 rounded
//                 className="category-span"
//                 />
//                 <span>Personal</span>
//                 </Col>

//                 <Col className="category-item" xs={1}>
//                 <img src={gifts}
//                 alt="gifts"
//                 rounded
//                 className="category-span"
//                 />
//                 <span>Gifts</span>
//                 </Col>
//             </Row>
//         </Container>
//     );
// };
// export default Category;

import React from 'react';
import './App.css';

import flowers from "./assets/flowers.avif";
import cakes from "./assets/cakes.avif";
import combos from "./assets/combos.avif";
import plants from "./assets/plants.avif";
import personal from "./assets/personal.avif";
import gifts from "./assets/gifts.avif";

const Category = () => {
  return (
    <div className="category-wrapper">
      <div className="category-item">
        <img src={flowers} alt="flowers" />
        <p>Flowers</p>
      </div>
      <div className="category-item">
        <img src={cakes} alt="cakes" />
        <p>Cakes</p>
      </div>
      <div className="category-item">
        <img src={combos} alt="combos" />
        <p>Combos</p>
      </div>
      <div className="category-item">
        <img src={plants} alt="plants" />
        <p>Plants</p>
      </div>
      <div className="category-item">
        <img src={personal} alt="personal" />
        <p>Personalised</p>
      </div>
      <div className="category-item">
        <img src={gifts} alt="gifts" />
        <p>Gifts</p>
      </div>
    </div>
  );
};

export default Category;
