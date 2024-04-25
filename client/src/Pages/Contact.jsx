import React from "react";
import StyleNav from "../components/StyleNav";

const Contact = () => {
  return (
    <div>
      <StyleNav />
      <div className="container contact-form ">
        <div className="contact-head">
          <h2 >Contact form</h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3308.5125626779354!2d-118.04246042501802!3d33.97936597318453!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2d3ea3a95f401%3A0x8e70e79bfef93945!2s12727%20Philadelphia%20St%2C%20Whittier%2C%20CA%2090601%2C%20USA!5e0!3m2!1sen!2sin!4v1713988045122!5m2!1sen!2sin"
            width="900"
            height="250"
            style={{border:0}}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <form
          className="row g-3 main-form d-flex text-light"
          action="https://formspree.io/f/mgegrqaa"
          method="POST"
        >
          <div className="col-md-6">
            <div className="col-md-6 inp">
              <label for="inputName4" className="form-label">
                Name
              </label>
              <input
                type="Name"
                name="userName"
                className="form-control"
                id="inputName4"
                required
              />
            </div>
            <div className="col-md-6 inp">
              <label for="inputEmail4" className="form-label">
                Email
              </label>
              <input
                type="email"
                name="email"
                className="form-control"
                id="inputEmail4"
                required
              />
            </div>
          </div>

          <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">
              Message
            </label>
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="5"
              required
            ></textarea>
          </div>
          <div class="col-12 send">
            <button type="submit" class="btn btn-primary">
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
