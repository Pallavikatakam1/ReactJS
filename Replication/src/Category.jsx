import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import './App.css';

import Birthday from "./assets/Birthday.webp";
import hourdelivery from "./assets/hourdelivery.webp";
import Anniversary from "./assets/Anniversary.webp";
import Cakes from "./assets/Cakes.webp";
import Flowers from "./assets/Flowers.webp";
import Navratri from "./assets/Navratri.webp";
import luxe from "./assets/luxe.webp";
import Hatke from "./assets/Hatke.webp";
import Kids from "./assets/Kids.webp";

const Category = () => {
    return (
        <Container className="mt-4">
            <Row className="category-row">
                <Col className="category-item" xs={1}>
                <Image
                src={Birthday}
                alt="Birthday"
                rounded
                className="category-img"
                />
                <span>Birthday</span>
                </Col>

                <Col className="category-item" xs={1}>
                <Image
                src={hourdelivery}
                alt="Hour Delivery"
                rounded
                className="category-img"
                />
                <span>Hour Delivery</span>
                </Col>

                <Col className="category-item" xs={1}>
                <Image
                src={luxe}
                alt="FNP luxe"
                rounded
                className="category-img"
                />
                <span>FNP Luxe</span>
                </Col>

                <Col className="category-item" xs={1}>
                <Image
                src={Hatke}
                alt="Hatke Gifts"
                rounded
                className="category-img"
                />
                <span>Hatke Gifts</span>
                </Col>

                <Col className="category-item" xs={1}>
                <Image
                src={Navratri}
                alt="Navratri"
                rounded
                className="category-img"
                />
                <span>Navratri</span>
                </Col>

                <Col className="category-item" xs={1}>
                <Image
                src={Anniversary}
                alt="Anniversary"
                rounded
                className="category-img"
                />
                <span>Anniversary</span>
                </Col>

                <Col className="category-item" xs={1}>
                <Image
                src={Flowers}
                alt="Flowers"
                rounded
                className="category-img"
                />
                <span>Flowers</span>
                </Col>

                <Col className="category-item" xs={1}>
                <Image
                src={Cakes}
                alt="Cakes"
                rounded
                className="category-img"
                />
                <span>Cakes</span>
                </Col>

                <Col className="category-item" xs={1}>
                <Image
                src={Kids}
                alt="Kids"
                rounded
                className="category-img"
                />
                <span>Kids</span>
                </Col>
            </Row>
        </Container>
    );
};

export default Category;