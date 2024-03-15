import "./index.css";
import Carousel from "react-bootstrap/Carousel";


const Slider = () => {
  return (
    <div className="cr-parent">
      <div className="cr-main">
        <Carousel data-bs-theme="dark">
          <Carousel.Item>
            <div className="cr-child">
              <Carousel.Caption>
                <div className="cr2">
                  <h1>
                    Project-Based <br />
                    Web Dev Courses
                  </h1>
                  <p>
                    Biulding projects is the most practical way to learn
                    anything, <br/> and <u><b>Web Development</b></u> is no exeption.
                    <br />
                    Become a Full Stack Web Developer with these awesome
                    project-based couses.
                  </p>
                  <button>Enroll Now</button>
                </div>
              </Carousel.Caption>
              <img className="" src={require('../Media/programming.svg').default} alt="Second slide" />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="cr-child">
              <Carousel.Caption>
                <div className="cr2">
                  <h1>
                    Project-Based <br />
                    Web Dev Courses
                  </h1>
                  <p>
                    Biulding projects is the most practical way to learn
                    anything, <br/> and <u><b>Web Development</b></u> is no exeption.
                    <br />
                    Become a Full Stack Web Developer with these awesome
                    project-based couses.
                  </p>
                </div>
              </Carousel.Caption>
              <img className="" src={require('../Media/education.svg').default} alt="Second slide" />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="cr-child">
              <Carousel.Caption>
                <div className="cr2">
                  <h1>
                    Project-Based <br />
                    Web Dev Courses
                  </h1>
                  <p>
                    Biulding projects is the most practical way to learn
                    anything, <br/> and <u><b>Web Development</b></u> is no exeption.
                    <br />
                    Become a Full Stack Web Developer with these awesome
                    project-based couses.
                  </p>
                  
                </div>
              </Carousel.Caption>
              <img className="" src={require('../Media/p3.svg').default} alt="Second slide" />
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default Slider;
