import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div className="Contact">
      <div className="contact-header">
       <div className="heading-wrapper">
        <h5>Don't Be a Stranger</h5>
        <h1>Contact Me.</h1>
        </div>
      </div>
      <div className="contact-body">
       <div className="body-wrapper">
        <h1>Let's Work Together.</h1>
        <h1>Drop Me a Line.</h1>
        </div>

        <div className="contact-fields">
          <div className="field">
            <div className="field-head">
              <h5>Email Address</h5>
            </div>
            <div className="field-body">
              <p>abc@123.com</p>
            </div>
          </div>
          <div className="field">
            <div className="field-head">
              <h5>Phone Number</h5>
            </div>
            <div className="field-body">
              <p>123456789</p>
            </div>
          </div>
          <div className="field">
            <div className="field-head">
              <h5>My Address</h5>
            </div>
            <div className="field-body">
              <p>
                Binoy Badal Dinesh Bag N, Lal Dighi, B.B.D. Bagh, Kolkata, West
                Bengal 700001
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
