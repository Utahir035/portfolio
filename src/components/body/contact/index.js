import React from "react";
import "./contact.css";
import Separator from "../../common/separator";
import SocialContact from "../../common/social-contact";
function Contact() {
  return (
    <div className="contact">
    <Separator />
    <label className="section-title">Contact</label>
    <div className="contact-container">
      <div className="contact-left">
        <p>Want to get in touch? Contact me on any of the platform</p>
        <SocialContact />
        <p>Contact #: +92306 1547769</p>
        <p>Email : usamatahir976@gmail.com</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;