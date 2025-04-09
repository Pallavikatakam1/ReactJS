import React from "react";
import { Tabs, Tab, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import './App.css'; 

//imports
//Logo
import BirthdayLogo from "./assets/Birthday/BirthdayLogo.png";
import AnniversaryLogo from "./assets/Anniversary/AnniversaryLogo.png";
import CongratulationsLogo from "./assets/Congratulations/CongratulationsLogo.png";
import loveLogo from "./assets/LoveNRomance/loveLogo.png";
import thankLogo from "./assets/Thankyou/thankLogo.png";

//Birthday

import birthday1 from "./assets/Birthday/birthday1.webp";
import birthday2 from "./assets/Birthday/birthday2.webp";
import birthday3 from "./assets/Birthday/birthday3.webp";
import birthday4 from "./assets/Birthday/birthday4.webp";

//Anniversary

import anniversary1 from "./assets/Anniversary/anniversary1.webp";
import anniversary2 from "./assets/Anniversary/anniversary2.webp";
import anniversary3 from "./assets/Anniversary/anniversary3.webp";
import anniversary4 from "./assets/Anniversary/anniversary4.webp";

//Congratulations

import congrats1 from "./assets/Congratulations/congrats1.webp";
import congrats2 from "./assets/Congratulations/congrats2.webp";
import congrats3 from "./assets/Congratulations/congrats3.webp";
import congrats4 from "./assets/Congratulations/congrats4.webp";

//Love N Romance

import love1 from "./assets/LoveNRomance/love1.webp";
import love2 from "./assets/LoveNRomance/love2.webp";
import love3 from "./assets/LoveNRomance/love3.webp";
import love4 from "./assets/LoveNRomance/love4.webp";

//Thankyou

import thank1 from "./assets/Thankyou/thank1.webp";
import thank2 from "./assets/Thankyou/thank2.webp";
import thank3 from "./assets/Thankyou/thank3.webp";
import thank4 from "./assets/Thankyou/thank4.webp";


const TabTitleWithLogo = ({ logoSrc, title }) => {
  return (
    <>
    <div className="title-content">
    <div className="d-flex align-items-center logo-center">
    <img src={logoSrc} alt={title} style={{ width: "24px", height: "24px"}} className="logo-position"/>
    </div>
    <div className="title-color">
    {title}
    </div>
    </div>
      </>
  );
};

function ItemsPage() {
    const navigate = useNavigate();
    const BirthdayCard1 = ()=>{
        navigate("/items");
    }
  return (
    <>
      <h3>Tailored For Your Occasions</h3>
      <div className="fullTabs">
        <Tabs defaultActiveKey="birthday" id="fill-tab-example" className="mb-3 tabs-bg" fill>
          <Tab 
            eventKey="birthday" 
            title={<TabTitleWithLogo logoSrc={BirthdayLogo} title="Birthday"/>}
          >
            <div className="cards-tab">
            <div className="birthdayCard1" onClick={BirthdayCard1}>
              <Card style={{ width: "18rem" }} className="cards">
                <Card.Img variant="top" src={birthday1} />
                <Card.Body>
                  <Card.Text>Angelic Rose Bouquet</Card.Text>
                  <Card.Text>₹ 799 <span className="strike"><s>₹ 849</s></span></Card.Text>
                </Card.Body>
              </Card>
              </div>
              <div className="birthdayCard1">
              <Card style={{ width: "18rem" }} className="cards">
                <Card.Img variant="top" src={birthday2} />
                <Card.Body>
                  <Card.Text>Butterscotch Crunch Cake</Card.Text>
                  <Card.Text>₹ 649</Card.Text>
                </Card.Body>
              </Card>
              </div>
              <div className="birthdayCard1">
              <Card style={{ width: "18rem" }} className="cards">
                <Card.Img variant="top" src={birthday3} />
                <Card.Body>
                  <Card.Text>Eternal Bond Pendant for Girls</Card.Text>
                  <Card.Text>₹799 <span className="strike"><s>₹ 849</s></span></Card.Text>
                </Card.Body>
              </Card>
              </div>
              <div className="birthdayCard1">
              <Card style={{ width: "18rem" }} className="cards">
                <Card.Img variant="top" src={birthday4} />
                <Card.Body>
                  <Card.Text>Syngonium Plant In Birthday</Card.Text>
                  <Card.Text>₹ 899 <span className="strike"><s>₹ 929</s></span></Card.Text>
                </Card.Body>
              </Card>
              </div>
            </div>
          </Tab>
          <Tab 
            eventKey="anniversary" 
            title={<TabTitleWithLogo logoSrc={AnniversaryLogo} title="Anniversary" />}
          >
            <div className="cards-tab">
            <div className="birthdayCard1">
              <Card style={{ width: "18rem" }} className="cards">
                <Card.Img variant="top" src={anniversary1} />
                <Card.Body>
                  <Card.Text>Mr N Mrs Right Cushions</Card.Text>
                  <Card.Text>₹ 699 <span className="strike"><s>₹ 749</s></span></Card.Text>
                </Card.Body>
              </Card>
              </div>

              <div className="birthdayCard1">
              <Card style={{ width: "18rem" }} className="cards">
                <Card.Img variant="top" src={anniversary2} />
                <Card.Body>
                  <Card.Text>To the Moon and Back LED Lamp</Card.Text>
                  <Card.Text>₹ 899 <span className="strike"><s>₹ 1499</s></span></Card.Text>
                </Card.Body>
              </Card>
              </div>

              <div className="birthdayCard1">
              <Card style={{ width: "18rem" }} className="cards">
                <Card.Img variant="top" src={anniversary3} />
                <Card.Body>
                  <Card.Text>Essence of Love and Perfumes</Card.Text>
                  <Card.Text>₹ 1499 <span className="strike"><s>₹ 1599</s></span></Card.Text>
                </Card.Body>
              </Card>
              </div>

              <div className="birthdayCard1">
              <Card style={{ width: "18rem" }} className="cards">
                <Card.Img variant="top" src={anniversary4} />
                <Card.Body>
                  <Card.Text>Love Syngonium Serenity</Card.Text>
                  <Card.Text>₹ 749 <span className="strike"><s>₹ 859</s></span></Card.Text>
                </Card.Body>
              </Card>
              </div>
            </div>
          </Tab>

          <Tab eventKey="congratulations" 
          title={<TabTitleWithLogo logoSrc={CongratulationsLogo} title="Congratulations" />}
          >
          <div className="cards-tab">
          <div className="birthdayCard1">
              <Card style={{ width: "18rem" }} className="cards">
                <Card.Img variant="top" src={congrats1} />
                <Card.Body>
                  <Card.Text>
                  Saga of Blooms
                  </Card.Text>
                  <Card.Text>₹ 3249 <span className="strike"><s>₹ 4149</s></span></Card.Text>
                </Card.Body>
              </Card>
              </div>

              <div className="birthdayCard1">
              <Card style={{ width: "18rem" }} className="cards">
                <Card.Img variant="top" src={congrats2} />
                <Card.Body>
                  <Card.Text>
                  Congrats Wishes Jar Candle
                  </Card.Text>
                  <Card.Text>₹ 799<span className="strike"><s>₹ 899</s></span></Card.Text>
                </Card.Body>
              </Card>
              </div>

              <div className="birthdayCard1">
              <Card style={{ width: "18rem" }} className="cards">
                <Card.Img variant="top" src={congrats3} />
                <Card.Body>
                  <Card.Text>
                  FoodCloud Good Wishes Food Hamper
                  </Card.Text>
                  <Card.Text>₹ 2299</Card.Text>
                </Card.Body>
              </Card>
              </div>

              <div className="birthdayCard1">
              <Card style={{ width: "18rem" }} className="cards">
                <Card.Img variant="top" src={congrats4} />
                <Card.Body>
                  <Card.Text>
                  Sunshinne Harmony & Pineapple Cream Cake Combo
                  </Card.Text>
                  <Card.Text>₹ 1799 <span className="strike"><s>₹ 2199</s></span></Card.Text>
                </Card.Body>
              </Card>
              </div>
            </div>
          </Tab>

          <Tab eventKey="loveNromance" 
          title={<TabTitleWithLogo logoSrc={loveLogo} title="Love N Romance" />}
          >Love LED Neon Light & Photos
          <div className="cards-tab">
          <div className="birthdayCard1">
              <Card style={{ width: "18rem" }} className="cards">
                <Card.Img variant="top" src={love1} />
                <Card.Body>
                  <Card.Text>
                  Love LED Neon Light & Photos
                  </Card.Text>
                  <Card.Text>₹ 3249 <span className="strike"><s>₹ 4639</s></span></Card.Text>
                </Card.Body>
              </Card>
              </div>

              <div className="birthdayCard1">
              <Card style={{ width: "18rem" }} className="cards">
                <Card.Img variant="top" src={love2} />
                <Card.Body>
                  <Card.Text>
                  I Love You Pinata Cake 1Kg                 
                  </Card.Text>
                  <Card.Text>₹ 1799</Card.Text>
                </Card.Body>
              </Card>
              </div>

              <div className="birthdayCard1">
              <Card style={{ width: "18rem" }} className="cards">
                <Card.Img variant="top" src={love3} />
                <Card.Body>
                  <Card.Text>
                  Syngonium Whispers of Love Plant
                  </Card.Text>
                  <Card.Text>₹ 849 <span className="strike"><s>₹ 969</s></span></Card.Text>
                </Card.Body>
              </Card>
              </div>

              <div className="birthdayCard1">
              <Card style={{ width: "18rem" }} className="cards">
                <Card.Img variant="top" src={love4} />
                <Card.Body>
                  <Card.Text>
                  Together Forever Cushion
                  </Card.Text>
                  <Card.Text>₹ 499 <span className="strike"><s>₹ 699</s></span></Card.Text>
                </Card.Body>
              </Card>
              </div>
            </div>
          </Tab>

          <Tab eventKey="thankYou" 
          title={<TabTitleWithLogo logoSrc={thankLogo} title="Thank You" />}
          >
          <div className="cards-tab">
          <div className="birthdayCard1">
              <Card style={{ width: "18rem" }} className="cards">
                <Card.Img variant="top" src={thank1} />
                <Card.Body>
                  <Card.Text>
                  Golden Glow Eggless Butterscoth Cake
                  </Card.Text>
                  <Card.Text>₹ 649 <span className="strike"><s>₹ 849</s></span></Card.Text>
                </Card.Body>
              </Card>
              </div>

              <div className="birthdayCard1">
              <Card style={{ width: "18rem" }} className="cards">
                <Card.Img variant="top" src={thank2} />
                <Card.Body>
                  <Card.Text>
                  Money Plant In Rustic Copper Pot
                  </Card.Text>
                  <Card.Text>₹ 349 <span className="strike"><s>₹ 499</s></span></Card.Text>
                </Card.Body>
              </Card>
              </div>

              <div className="birthdayCard1">
              <Card style={{ width: "18rem" }} className="cards">
                <Card.Img variant="top" src={thank3} />
                <Card.Body>
                  <Card.Text>
                  Unsaid Appreciation Mug For Mom               
                  </Card.Text>
                  <Card.Text>₹ 349</Card.Text>
                </Card.Body>
              </Card>
              </div>

              <div className="birthdayCard1">
              <Card style={{ width: "18rem" }} className="cards">
                <Card.Img variant="top" src={thank4} />
                <Card.Body>
                  <Card.Text>
                  Rosy Cuddles Valentine with Teddybear
                  </Card.Text>
                  <Card.Text>₹ 1399 <span className="strike"><s>₹ 1429</s></span></Card.Text>
                </Card.Body>
              </Card>
              </div>
            </div>
          </Tab>
        </Tabs>
      </div>
      <button className="viewAll">View All Gifts</button>
    </>
  );
}
export default ItemsPage;
