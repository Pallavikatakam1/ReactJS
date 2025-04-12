import React from 'react';
import { Button } from 'react-bootstrap';
import Card from "react-bootstrap/Card";
import roses from "./assets/roses.avif";
import mug from "./assets/mug.avif";
import photo from "./assets/photo.avif";
import cake from "./assets/cake.avif";
import hamper from "./assets/hamper.avif";
import bouquet from "./assets/bouquet.avif";
import hanger from "./assets/hanger.avif";
import plant from "./assets/plant.avif";


const Orders = () => {
    return (
      <>
      <div className='mostOrdered'>
      <div className='mostOrdered-heading'>Best Selling Flowers & Gifts</div>
      <div className='surprise-heading'>Surprise Your Loved Ones
      <Button className="viewAll">
      View All
      </Button>
      </div>
      <div className='mostOrdered-items'>
      <div className="birthdayCard1">
          <Card style={{ width: "17rem" }} className="cards">
          <Card.Img variant="top" src={roses} className='items-img'/>
          <Card.Body>
          <Card.Text className='card-texts'>10 Red Roses Bouquet</Card.Text>
          <Card.Text>₹ 545 </Card.Text>
          <div className='ratings'>
              <span className="fa fa-star checked">4.9</span>
          </div>
          </Card.Body>
          </Card>
      </div>

      <div className="birthdayCard1">
          <Card style={{ width: "17rem" }} className="cards">
          <Card.Img variant="top" src={mug} className='items-img'/>
          <Card.Body>
          <Card.Text className='card-texts'>Heartfelt Mug and Cusion gift combo </Card.Text>
          <Card.Text>₹ 999 </Card.Text>
          <div className='ratings'>
              <span className="fa fa-star checked">5.0</span>
          </div>
          </Card.Body>
          </Card>
      </div>

      <div className="birthdayCard1">
          <Card style={{ width: "17rem" }} className="cards">
          <Card.Img variant="top" src={photo} className='items-img'/>
          <Card.Body>
          <Card.Text className='card-texts'>Engravved acrylic photo lamp</Card.Text>
          <Card.Text>₹ 459 </Card.Text>
          <div className='ratings'>
              <span className="fa fa-star checked">4.9</span>
          </div>
          </Card.Body>
          </Card>
      </div>

      <div className="birthdayCard1">
          <Card style={{ width: "17rem" }} className="cards">
          <Card.Img variant="top" src={cake} className='items-img'/>
          <Card.Body>
          <Card.Text className='card-texts'>Chocolate cake</Card.Text>
          <Card.Text>₹ 699 </Card.Text>
          <div className='ratings'>
              <span className="fa fa-star checked">4.5</span>
          </div>
          </Card.Body>
          </Card>
      </div>

      <div className="birthdayCard1">
          <Card style={{ width: "17rem" }} className="cards">
          <Card.Img variant="top" src={hamper} className='items-img'/>
          <Card.Body>
          <Card.Text className='card-texts'>Scented bliss hamper</Card.Text>
          <Card.Text>₹ 1099 </Card.Text>
          <div className='ratings'>
              <span className="fa fa-star checked">4.9</span>
          </div>
          </Card.Body>
          </Card>
      </div>

      <div className="birthdayCard1">
          <Card style={{ width: "17rem" }} className="cards">
          <Card.Img variant="top" src={bouquet} className='items-img'/>
          <Card.Body>
          <Card.Text className='card-texts'>Whishpers of affection pink roses bouquet</Card.Text>
          <Card.Text>₹ 649 </Card.Text>
          <div className='ratings'>
              <span className="fa fa-star checked">4.9</span>
          </div>
          </Card.Body>
          </Card>
      </div>

      <div className="birthdayCard1">
          <Card style={{ width: "17rem" }} className="cards">
          <Card.Img variant="top" src={hanger} className='items-img'/>
          <Card.Body>
          <Card.Text className='card-texts'>Heartfelt  acrylic photo lamp</Card.Text>
          <Card.Text>₹ 739 </Card.Text>
          <div className='ratings'>
              <span className="fa fa-star checked">4.9</span>
          </div>
          </Card.Body>
          </Card>
      </div>

      <div className="birthdayCard1">
          <Card style={{ width: "17rem" }} className="cards">
          <Card.Img variant="top" src={plant} className='items-img'/>
          <Card.Body>
          <Card.Text className='card-texts'>Profuse jade terrarium</Card.Text>
          <Card.Text>₹ 499 </Card.Text>
          <div className='ratings'>
              <span className="fa fa-star checked">4.9</span>
          </div>
          </Card.Body>
          </Card>
      </div>

      </div>
      </div>
      </>
    );
};

export default Orders;

