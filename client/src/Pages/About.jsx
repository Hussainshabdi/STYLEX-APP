import React from "react";
import StyleNav from "../components/StyleNav";
import { Link } from "react-router-dom";
import End from "../components/End";

const About = () => {
  return (
    <div>
      <StyleNav />
      <div className="container about-main">
        <div className="about">
          <h4 className="mb-6">About us</h4>
          <h2>WHO WE ARE</h2>
          <p>
            {" "}
            STYLEX Hair studio is a platform offering a variety of services at
            Salon. Customers use our platform to book services such as beauty
            treatments, haircuts, massage therapy,etc. These services are
            delivered at salon.We promise our customers a high quality,
            standardised and reliable service experience. To fulfill this
            promise, we work closely with our hand-picked service
            partners,helping them succeed and deliver on this promise. Our
            Vision: To give the best service like never Before
          </p>
          <h2>HOW WE DO IT</h2>
          <p>
            We take request from our customers online and ensure that they get
            the best services possible.WE have the best and Qualified Hair
            cutting Professionals..
          </p>
          <h4>You could be Part of our journey</h4>
          <Link className="btn btn-warning" to={"/bookApt"}>Book Appointment</Link>
        </div>
      </div>
      <End/>
    </div>
  );
};

export default About;
