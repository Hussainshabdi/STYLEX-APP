import React from "react";
import StyleNav from "../components/StyleNav";
const bookAppoint = () => {
  return (
    <div>
      <StyleNav />
      <div className="container-book">
        <div className="book">
          <h2>Book Appointment</h2>
          <form action="">
          <div class="form-floating mb-3">
            <input
              type="name"
              class="form-control"
              id="floatingInput"
              placeholder="Your Name"
              required
            />
            <label for="floatingInput">Name</label>
          </div>
          <div class="form-floating">
            <input
              type="Number"
              class="form-control"
              id="floatingNumber"
              placeholder="Contact Number"
              required
            />
            <label for="floatingNumber">Contact Number</label>
          </div>
          <div class="form-floating">
            <input
              type="date"
              class="form-control"
              id="floatingDate"
              placeholder="Date"
              required
            />
            <label for="floatingDate">Appointment Date</label>
          </div>
          <div class="form-floating">
            <input
              type="time"
              class="form-control"
              id="floatingTime"
              placeholder="time"
              required
            />
            <label for="floatingTime">Appointment Time</label>
          </div>
          <button href="#" className="btn btn-warning">Submit</button>
          </form> 
        </div>
      </div>
    </div>
  );
};

export default bookAppoint;
