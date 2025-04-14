import Stack from 'react-bootstrap/Stack';
import './Blogs.css';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import NavBar from './NavBar';
import profile from './assets/profile.svg';
import one from './assets/one.webp';
import two from './assets/two.webp';
import three from './assets/three.webp';
import four from './assets/four.webp';
import five from './assets/five.webp';
import six from './assets/six.webp';
import seven from './assets/seven.webp';
import eight from './assets/eight.webp';
import nine from './assets/nine.webp';
import ten from './assets/ten.webp';
import eleven from './assets/eleven.webp';
import twelve from './assets/twelve.webp';
import thirteen from './assets/thirteen.webp';
import fourteen from './assets/fourteen.webp';
import fifteen from './assets/fifteen.webp';
import sixteen from './assets/sixteen.webp';
import seventeen from './assets/seventeen.webp';
import eighteen from './assets/eighteen.webp';
import heart from './assets/heart.svg';
import eye from './assets/eye.svg';
function Blogs() {
  return (
    <>
    <Stack direction="horizontal" className='stack-place'>
      <div className="p-2 blog-space">
        <img src={one} alt="one" className="blog-images"/>
        <div className='profile'>
            <Container fluid className='container-profile'>
            <Col xs={6} md={3}>
            <Image src={profile} roundedCircle className='image-size'/>
            </Col>
            </Container>
            <div className='profile-name'>Pallavi</div>
            <div className='likes-seen'>
                <div className='likes'>
                <img src={heart} alt="heart-fill" className='fill-color'/>
                1.3k
                </div>
                <div className='seen'>
                <img src={eye} alt="heart-fill" className='fill-color'/>
                57k
                </div>
            </div>
        </div>
      </div>

      <div className="p-2 blog-space">
      <img src={two} alt="two" className="blog-images"/>
      <div className='profile'>
            <Container fluid className='container-profile'>
            <Col xs={6} md={3}>
            <Image src={profile} roundedCircle className='image-size'/>
            </Col>
            </Container>
            <div className='profile-name'> Poojitha</div>
            <div className='likes-seen'>
                <div className='likes'>
                <img src={heart} alt="heart-fill" className='fill-color'/>
                1.1k
                </div>
                <div className='seen'>
                <img src={eye} alt="heart-fill" className='fill-color'/>
                27k
                </div>
            </div>
        </div>
      </div>

      <div className="p-2 blog-space">
      <img src={three} alt="three" className="blog-images"/>
      <div className='profile'>
            <Container fluid className='container-profile'>
            <Col xs={6} md={3}>
            <Image src={profile} roundedCircle className='image-size'/>
            </Col>
            </Container>
            <div className='profile-name'>Mahija</div>
            <div className='likes-seen'>
                <div className='likes'>
                <img src={heart} alt="heart-fill" className='fill-color'/>
                1.2k
                </div>
                <div className='seen'>
                <img src={eye} alt="heart-fill" className='fill-color'/>
                45k
                </div>
            </div>
        </div>
      </div>

      <div className="p-2 blog-space">
      <img src={four} alt="four" className="blog-images"/>
      <div className='profile'>
            <Container fluid className='container-profile'>
            <Col xs={6} md={3}>
            <Image src={profile} roundedCircle className='image-size'/>
            </Col>
            </Container>
            <div className='profile-name'>Indhu</div>
            <div className='likes-seen'>
                <div className='likes'>
                <img src={heart} alt="heart-fill" className='fill-color'/>
                1.5k
                </div>
                <div className='seen'>
                <img src={eye} alt="heart-fill" className='fill-color'/>
                67k
                </div>
            </div>
        </div>
      </div>

      <div className="p-2 blog-space">
      <img src={five} alt="five" className="blog-images"/>
      <div className='profile'>
            <Container fluid className='container-profile'>
            <Col xs={6} md={3}>
            <Image src={profile} roundedCircle className='image-size'/>
            </Col>
            </Container>
            <div className='profile-name'> Lakshmi</div>
            <div className='likes-seen'>
                <div className='likes'>
                <img src={heart} alt="heart-fill" className='fill-color'/>
                1.8k
                </div>
                <div className='seen'>
                <img src={eye} alt="heart-fill" className='fill-color'/>
                77k
                </div>
            </div>
        </div>
      </div>

      <div className="p-2 blog-space">
      <img src={six} alt="six" className="blog-images"/>
      <div className='profile'>
            <Container fluid className='container-profile'>
            <Col xs={6} md={3}>
            <Image src={profile} roundedCircle className='image-size'/>
            </Col>
            </Container>
            <div className='profile-name'>Azma</div>
            <div className='likes-seen'>
                <div className='likes'>
                <img src={heart} alt="heart-fill" className='fill-color'/>
                2.3k
                </div>
                <div className='seen'>
                <img src={eye} alt="heart-fill" className='fill-color'/>
                88k
                </div>
            </div>
        </div>
      </div>
    </Stack>


    <Stack direction="horizontal" className='stack-place'>
      <div className="p-2 blog-space">
        <img src={seven} alt="one" className="blog-images"/>
        <div className='profile'>
            <Container fluid className='container-profile'>
            <Col xs={6} md={3}>
            <Image src={profile} roundedCircle className='image-size'/>
            </Col>
            </Container>
            <div className='profile-name'>Saajid</div>
            <div className='likes-seen'>
                <div className='likes'>
                <img src={heart} alt="heart-fill" className='fill-color'/>
                1.3k
                </div>
                <div className='seen'>
                <img src={eye} alt="heart-fill" className='fill-color'/>
                57k
                </div>
            </div>
        </div>
      </div>

      <div className="p-2 blog-space">
      <img src={eight} alt="two" className="blog-images"/>
      <div className='profile'>
            <Container fluid className='container-profile'>
            <Col xs={6} md={3}>
            <Image src={profile} roundedCircle className='image-size'/>
            </Col>
            </Container>
            <div className='profile-name'> Sahil</div>
            <div className='likes-seen'>
                <div className='likes'>
                <img src={heart} alt="heart-fill" className='fill-color'/>
                1.1k
                </div>
                <div className='seen'>
                <img src={eye} alt="heart-fill" className='fill-color'/>
                27k
                </div>
            </div>
        </div>
      </div>

      <div className="p-2 blog-space">
      <img src={nine} alt="three" className="blog-images"/>
      <div className='profile'>
            <Container fluid className='container-profile'>
            <Col xs={6} md={3}>
            <Image src={profile} roundedCircle className='image-size'/>
            </Col>
            </Container>
            <div className='profile-name'>Amar</div>
            <div className='likes-seen'>
                <div className='likes'>
                <img src={heart} alt="heart-fill" className='fill-color'/>
                1.2k
                </div>
                <div className='seen'>
                <img src={eye} alt="heart-fill" className='fill-color'/>
                45k
                </div>
            </div>
        </div>
      </div>

      <div className="p-2 blog-space">
      <img src={ten} alt="four" className="blog-images"/>
      <div className='profile'>
            <Container fluid className='container-profile'>
            <Col xs={6} md={3}>
            <Image src={profile} roundedCircle className='image-size'/>
            </Col>
            </Container>
            <div className='profile-name'>Jagadeesh</div>
            <div className='likes-seen'>
                <div className='likes'>
                <img src={heart} alt="heart-fill" className='fill-color'/>
                1.5k
                </div>
                <div className='seen'>
                <img src={eye} alt="heart-fill" className='fill-color'/>
                67k
                </div>
            </div>
        </div>
      </div>

      <div className="p-2 blog-space">
      <img src={eleven} alt="five" className="blog-images"/>
      <div className='profile'>
            <Container fluid className='container-profile'>
            <Col xs={6} md={3}>
            <Image src={profile} roundedCircle className='image-size'/>
            </Col>
            </Container>
            <div className='profile-name'> Pallavi</div>
            <div className='likes-seen'>
                <div className='likes'>
                <img src={heart} alt="heart-fill" className='fill-color'/>
                1.8k
                </div>
                <div className='seen'>
                <img src={eye} alt="heart-fill" className='fill-color'/>
                77k
                </div>
            </div>
        </div>
      </div>

      <div className="p-2 blog-space">
      <img src={twelve} alt="six" className="blog-images"/>
      <div className='profile'>
            <Container fluid className='container-profile'>
            <Col xs={6} md={3}>
            <Image src={profile} roundedCircle className='image-size'/>
            </Col>
            </Container>
            <div className='profile-name'>Narayanamma</div>
            <div className='likes-seen'>
                <div className='likes'>
                <img src={heart} alt="heart-fill" className='fill-color'/>
                2.3k
                </div>
                <div className='seen'>
                <img src={eye} alt="heart-fill" className='fill-color'/>
                88k
                </div>
            </div>
        </div>
      </div>
    </Stack>   


    <Stack direction="horizontal" className='stack-place'>
      <div className="p-2 blog-space">
        <img src={thirteen} alt="one" className="blog-images"/>
        <div className='profile'>
            <Container fluid className='container-profile'>
            <Col xs={6} md={3}>
            <Image src={profile} roundedCircle className='image-size'/>
            </Col>
            </Container>
            <div className='profile-name'>Smitha</div>
            <div className='likes-seen'>
                <div className='likes'>
                <img src={heart} alt="heart-fill" className='fill-color'/>
                1.3k
                </div>
                <div className='seen'>
                <img src={eye} alt="heart-fill" className='fill-color'/>
                57k
                </div>
            </div>
        </div>
      </div>

      <div className="p-2 blog-space">
      <img src={fourteen} alt="two" className="blog-images"/>
      <div className='profile'>
            <Container fluid className='container-profile'>
            <Col xs={6} md={3}>
            <Image src={profile} roundedCircle className='image-size'/>
            </Col>
            </Container>
            <div className='profile-name'> Sai</div>
            <div className='likes-seen'>
                <div className='likes'>
                <img src={heart} alt="heart-fill" className='fill-color'/>
                1.1k
                </div>
                <div className='seen'>
                <img src={eye} alt="heart-fill" className='fill-color'/>
                27k
                </div>
            </div>
        </div>
      </div>

      <div className="p-2 blog-space">
      <img src={fifteen} alt="three" className="blog-images"/>
      <div className='profile'>
            <Container fluid className='container-profile'>
            <Col xs={6} md={3}>
            <Image src={profile} roundedCircle className='image-size'/>
            </Col>
            </Container>
            <div className='profile-name'>Pavan</div>
            <div className='likes-seen'>
                <div className='likes'>
                <img src={heart} alt="heart-fill" className='fill-color'/>
                1.2k
                </div>
                <div className='seen'>
                <img src={eye} alt="heart-fill" className='fill-color'/>
                45k
                </div>
            </div>
        </div>
      </div>

      <div className="p-2 blog-space">
      <img src={sixteen} alt="four" className="blog-images"/>
      <div className='profile'>
            <Container fluid className='container-profile'>
            <Col xs={6} md={3}>
            <Image src={profile} roundedCircle className='image-size'/>
            </Col>
            </Container>
            <div className='profile-name'>Chaitanya</div>
            <div className='likes-seen'>
                <div className='likes'>
                <img src={heart} alt="heart-fill" className='fill-color'/>
                1.5k
                </div>
                <div className='seen'>
                <img src={eye} alt="heart-fill" className='fill-color'/>
                67k
                </div>
            </div>
        </div>
      </div>

      <div className="p-2 blog-space">
      <img src={seventeen} alt="five" className="blog-images"/>
      <div className='profile'>
            <Container fluid className='container-profile'>
            <Col xs={6} md={3}>
            <Image src={profile} roundedCircle className='image-size'/>
            </Col>
            </Container>
            <div className='profile-name'>Vinay</div>
            <div className='likes-seen'>
                <div className='likes'>
                <img src={heart} alt="heart-fill" className='fill-color'/>
                1.8k
                </div>
                <div className='seen'>
                <img src={eye} alt="heart-fill" className='fill-color'/>
                77k
                </div>
            </div>
        </div>
      </div>

      <div className="p-2 blog-space">
      <img src={eighteen} alt="six" className="blog-images"/>
      <div className='profile'>
            <Container fluid className='container-profile'>
            <Col xs={6} md={3}>
            <Image src={profile} roundedCircle className='image-size'/>
            </Col>
            </Container>
            <div className='profile-name'>Teja</div>
            <div className='likes-seen'>
                <div className='likes'>
                <img src={heart} alt="heart-fill" className='fill-color'/>
                2.3k
                </div>
                <div className='seen'>
                <img src={eye} alt="heart-fill" className='fill-color'/>
                88k
                </div>
            </div>
        </div>
      </div>
    </Stack>
    </>
  );
}

export default Blogs;