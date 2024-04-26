import React from "react";
import StyleNav from "../components/StyleNav";
import service1 from "../assets/service1.jpg";
import service2 from "../assets/service2.jpg";
import service3 from "../assets/service3.jpg";
import service4 from "../assets/service4.jpg";
import service5 from "../assets/service5.jpg";
import service6 from "../assets/service6.jpg";
import service7 from "../assets/service7.jpg";
import End from "../components/End";
import { Link,Outlet } from "react-router-dom";

const Services = () => {
  return (
    <div>
      <StyleNav />
      <section className="services-sec">
        <div className="container main d-flex align-self-center flex-column">
          <div className="row serv">
            <div className="col-6 intro">
              <h6 className="text-primary">About</h6>
              <h1>What we provide?</h1>
              <p className="text-light">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
                blanditiis eius facere!
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 cards">
              <img src={service1} alt="" />
              <h3>Haircut</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Dolorum, sequi.
              </p>
              <h5>₹200</h5>
            </div>
            <div className="col-lg-4 col-md-6 cards">
              <img src={service2} alt="" />
              <h3>Beard Trimming</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Dolorum, sequi.
              </p>
              <h5>₹150</h5>
            </div>
            <div className="col-lg-4 col-md-6 cards">
              <img src={service7} alt="" />
              <h3>Hair color</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Dolorum, sequi.
              </p>
              <h5>₹650</h5>
            </div>
            <div className="col-lg-4 col-md-6 cards">
              <img src={service4} alt="" />
              <h3>Hair Wash</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Dolorum, sequi.
              </p>
              <h5>₹350.00</h5>
            </div>
            <div className="col-lg-4 col-md-6 cards">
              <img src={service5} alt="" />
              <h3>Head Massage</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Dolorum, sequi.
              </p>
              <h5>₹200</h5>
            </div>
            <div className="col-lg-4 col-md-6 cards">
              <img src={service6} alt="" />
              <h3>Facial Gromming</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Dolorum, sequi.
              </p>
              <h5>₹1200</h5>
            </div>
          </div>
          <div className="bookapt">
            <Link className="btn btn-warning" to={'/bookAppoint'}>Book Appointment</Link>
          </div>
          <Outlet />
        </div>
      </section>

      <End />
    </div>
  );
};

export default Services;