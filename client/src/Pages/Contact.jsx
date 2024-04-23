import React from "react";
import StyleNav from "../components/StyleNav";

const Contact = () => {
  return (
    <div>
      <StyleNav />
      <div className="contact">
      <h2>Feel Free To Contact</h2>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3308.5125626779354!2d-118.04246042501802!3d33.97936597318453!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2d3ea3a95f401%3A0x8e70e79bfef93945!2s12727%20Philadelphia%20St%2C%20Whittier%2C%20CA%2090601%2C%20USA!5e0!3m2!1sen!2sin!4v1713842741126!5m2!1sen!2sin"
        width="600"
        height="450"
        style={{border:0}}
        allowFullScreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
      </div>
    </div>
  );
};

export default Contact;
