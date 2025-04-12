// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import './App.css'

// function Navbar2() {
//     return (
//       <Navbar expand="lg" className="bg-body-tertiary">
//         <Container>
//           <Navbar.Collapse id="basic-navbar-nav">
//             <Nav className="me-auto">
//               <NavDropdown title="Express" id="basic-nav-dropdown">
//                 <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
//                 <NavDropdown.Item href="#action/3.2"> Another action</NavDropdown.Item>
//                 <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
//               </NavDropdown>

//               <NavDropdown title="Flowers" id="basic-nav-dropdown">
//                 <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
//                 <NavDropdown.Item href="#action/3.2"> Another action</NavDropdown.Item>
//                 <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
//               </NavDropdown>

//               <NavDropdown title="Cakes" id="basic-nav-dropdown">
//                 <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
//                 <NavDropdown.Item href="#action/3.2"> Another action</NavDropdown.Item>
//                 <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
//               </NavDropdown>

//               <NavDropdown title="Birthday" id="basic-nav-dropdown">
//                 <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
//                 <NavDropdown.Item href="#action/3.2"> Another action</NavDropdown.Item>
//                 <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
//               </NavDropdown>

//               <NavDropdown title="Anniversary" id="basic-nav-dropdown">
//                 <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
//                 <NavDropdown.Item href="#action/3.2"> Another action</NavDropdown.Item>
//                 <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
//               </NavDropdown>

//               <NavDropdown title="Gifts" id="basic-nav-dropdown">
//                 <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
//                 <NavDropdown.Item href="#action/3.2"> Another action</NavDropdown.Item>
//                 <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
//               </NavDropdown>

//               <NavDropdown title="Personalized" id="basic-nav-dropdown">
//                 <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
//                 <NavDropdown.Item href="#action/3.2"> Another action</NavDropdown.Item>
//                 <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
//               </NavDropdown>

//               <NavDropdown title="Plants" id="basic-nav-dropdown">
//                 <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
//                 <NavDropdown.Item href="#action/3.2"> Another action</NavDropdown.Item>
//                 <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
//               </NavDropdown>

//               <NavDropdown title="Combos" id="basic-nav-dropdown">
//                 <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
//                 <NavDropdown.Item href="#action/3.2"> Another action</NavDropdown.Item>
//                 <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
//               </NavDropdown>

//               <NavDropdown title="International" id="basic-nav-dropdown">
//                 <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
//                 <NavDropdown.Item href="#action/3.2"> Another action</NavDropdown.Item>
//                 <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
//               </NavDropdown>

//               <NavDropdown title="Occasions" id="basic-nav-dropdown">
//                 <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
//                 <NavDropdown.Item href="#action/3.2"> Another action</NavDropdown.Item>
//                 <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
//               </NavDropdown>


//             </Nav>
//          </Navbar.Collapse>
//        </Container>
//      </Navbar>
//    );
//  }

//  export default Navbar2;

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './App.css';

function Navbar2() {
  return (
    <Navbar expand="lg" className="navbar-custom">
      <Container fluid>
        <Navbar.Toggle aria-controls="main-navbar" />
        <Navbar.Collapse id="main-navbar">
          <Nav className="me-auto">
            <NavDropdown title="Express Delivery" id="express-dropdown">
              <NavDropdown.Item href="#same-day">Same Day Delivery</NavDropdown.Item>
              <NavDropdown.Item href="#midnight">Midnight Delivery</NavDropdown.Item>
              <NavDropdown.Item href="#express-gifts">Express Gifts</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Flowers" id="flowers-dropdown">
              <NavDropdown.Item href="#roses">Roses</NavDropdown.Item>
              <NavDropdown.Item href="#lilies">Lilies</NavDropdown.Item>
              <NavDropdown.Item href="#bouquets">Bouquets</NavDropdown.Item>
              <NavDropdown.Item href="#flower-boxes">Flower Boxes</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Cakes" id="cakes-dropdown">
              <NavDropdown.Item href="#photo-cakes">Photo Cakes</NavDropdown.Item>
              <NavDropdown.Item href="#designer-cakes">Designer Cakes</NavDropdown.Item>
              <NavDropdown.Item href="#cupcakes">Cupcakes</NavDropdown.Item>
              <NavDropdown.Item href="#theme-cakes">Theme Cakes</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Birthday" id="birthday-dropdown">
              <NavDropdown.Item href="#birthday-gifts">Gifts</NavDropdown.Item>
              <NavDropdown.Item href="#birthday-cakes">Cakes</NavDropdown.Item>
              <NavDropdown.Item href="#birthday-decor">Decorations</NavDropdown.Item>
              <NavDropdown.Item href="#birthday-combo">Combos</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Anniversary" id="anniversary-dropdown">
              <NavDropdown.Item href="#anniversary-gifts">Gifts</NavDropdown.Item>
              <NavDropdown.Item href="#anniversary-flowers">Flowers</NavDropdown.Item>
              <NavDropdown.Item href="#romantic-hampers">Romantic Hampers</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Gifts" id="gifts-dropdown">
              <NavDropdown.Item href="#gift-hampers">Hampers</NavDropdown.Item>
              <NavDropdown.Item href="#teddy-bears">Teddy Bears</NavDropdown.Item>
              <NavDropdown.Item href="#personalized-gifts">Personalized</NavDropdown.Item>
              <NavDropdown.Item href="#luxury-gifts">Luxury Gifts</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Personalized" id="personalized-dropdown">
              <NavDropdown.Item href="#photo-gifts">Photo Gifts</NavDropdown.Item>
              <NavDropdown.Item href="#engraved-gifts">Engraved Gifts</NavDropdown.Item>
              <NavDropdown.Item href="#customized-gifts">Customized</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Plants" id="plants-dropdown">
              <NavDropdown.Item href="#indoor-plants">Indoor Plants</NavDropdown.Item>
              <NavDropdown.Item href="#flowering-plants">Flowering Plants</NavDropdown.Item>
              <NavDropdown.Item href="#succulents">Succulents</NavDropdown.Item>
              <NavDropdown.Item href="#planters">Planters</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Combos" id="combos-dropdown">
              <NavDropdown.Item href="#flower-cake">Flower + Cake</NavDropdown.Item>
              <NavDropdown.Item href="#chocolate-teddy">Chocolate + Teddy</NavDropdown.Item>
              <NavDropdown.Item href="#premium-combos">Premium Combos</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="International" id="international-dropdown">
              <NavDropdown.Item href="#usa">USA</NavDropdown.Item>
              <NavDropdown.Item href="#uk">UK</NavDropdown.Item>
              <NavDropdown.Item href="#uae">UAE</NavDropdown.Item>
              <NavDropdown.Item href="#australia">Australia</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Occasions" id="occasions-dropdown">
              <NavDropdown.Item href="#valentines">Valentine's Day</NavDropdown.Item>
              <NavDropdown.Item href="#mothers-day">Mother's Day</NavDropdown.Item>
              <NavDropdown.Item href="#fathers-day">Father's Day</NavDropdown.Item>
              <NavDropdown.Item href="#wedding">Wedding</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbar2;