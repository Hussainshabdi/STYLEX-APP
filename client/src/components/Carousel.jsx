import React from "react";
import salon1 from "../assets/salon1.jpg";
import { Outlet, Link } from "react-router-dom";


const Carousel = () => {
  return (
    //   <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
    //   <div className="carousel-indicators">
    //     <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    //     <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    //     <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
    //   </div>
    //   <div className="carousel-inner">
    //     <div className="carousel-item active">
    //       <img src="..." className="d-block w-100" alt="..."/>
    //       <div className="carousel-caption d-none d-md-block">
    //         <h5>First slide label</h5>
    //         <p></p>
    //       </div>
    //     </div>
    //     <div className="carousel-item">
    //       <img src="..." className="d-block w-100" alt="..."/>
    //       <div className="carousel-caption d-none d-md-block">
    //         <h5>Second slide label</h5>
    //         <p>Some representative placeholder content for the second slide.</p>
    //       </div>
    //     </div>
    //     <div className="carousel-item">
    //       <img src="..." className="d-block w-100" alt="..."/>
    //       <div className="carousel-caption d-none d-md-block">
    //         <h5>Third slide label</h5>
    //         <p>Some representative placeholder content for the third slide.</p>
    //       </div>
    //     </div>
    //   </div>
    //   <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    //     <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    //     <span className="visually-hidden">Previous</span>
    //   </button>
    //   <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    //     <span className="carousel-control-next-icon" aria-hidden="true"></span>
    //     <span className="visually-hidden">Next</span>
    //   </button>
    // </div>
    <>
      <section className="Hero">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 ">
              <h1 className="fw-bolder ">LET THE HAIR DO THE  TALKING.</h1>
              <p className="text-info">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Possimus .
              </p>
              <Link to={"/services"} className="btn btn-warning fw-bold">Book Appointment</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Carousel;
