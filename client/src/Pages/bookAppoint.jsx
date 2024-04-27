import React, { useState } from "react";
import StyleNav from "../components/StyleNav";
const bookAppoint = () => {
  const [user, setUser] = useState({
    name: "",
    number: "",
    date: "",
    time: ""
  });

  // handleInputs
  const handleInput = (e) => {
    let Name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [Name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user);
    const { name, number, date, time } = user;
    event.target.reset();
    const res = await fetch(
      "https://stylex-salon-app-default-rtdb.firebaseio.com/bookings.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          number,
          date,
          time
        }),
      }
    );
    if (res) {
      alert("data stored");
    } else {
      alert("plz store the data");
    }
  };
  return (
    <div>
      <StyleNav />
      <div className="container-book">
        <div className="book">
          <h2>Book Appointment</h2>
          <form method="POST" onSubmit={handleSubmit}>
            <div className="form-floating mb-3">
              <input
                type="name"
                name="name"
                className="form-control"
                id="floatingInput"
                placeholder="Your Name"
                required
                value={user.Name}
                onChange={handleInput}
              />
              <label for="floatingInput">Name</label>
            </div>
            <div className="form-floating">
              <input
                type="Number"
                name="number"
                className="form-control"
                id="floatingNumber"
                placeholder="Contact Number"
                required
                value={user.Number}
                onChange={handleInput}
              />
              {/* <label id="service" for="Hair"  >Choose a Service:</label> */}
              {/* <select name="Hair" id="Hair" required value={user.Name}
                onChange={handleInput}>
                <option value="">None</option>
                <option value="Haircut">Haircut</option>
                <option value="Hair wash">Hair wash</option>
                <option value="Beard Trimming">Beard Trimming</option>
                <option value="Hair Color">Hair Color</option>
                <option value="Hair Massage">Head Massage</option>
                <option value="Facial Gromming">Facial Gromming</option>
              </select> */}
              <label for="floatingNumber">Contact Number</label>
            </div>
            <div className="form-floating">
              <input
                type="date"
                name="date"
                className="form-control"
                id="floatingDate"
                placeholder="Date"
                required
                value={user.Date}
                onChange={handleInput}
              />
              <label for="floatingDate">Appointment Date</label>
            </div>
            <div className="form-floating">
              <input
                type="time"
                name="time"
                className="form-control"
                id="floatingTime"
                placeholder="time"
                required
                value={user.time}
                onChange={handleInput}
              />
              <label for="floatingTime">Appointment Time</label>
            </div>
            <button href="#" className="btn btn-warning" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default bookAppoint;
