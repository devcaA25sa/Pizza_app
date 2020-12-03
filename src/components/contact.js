import React from "react";
import { Phone, Mail, MapPin } from "react-feather"
import Image from '../../static/assets/image/Speacial.jpg'

function Contact () {
  return (
  <div className="content-page-wrapper">
    <h2>Contact Us</h2>
    <div className="left-column">
    <img src={Image} alt= 'Image'/>
    
 </div>

  <div className="right-column">
    <div className="contact-bullet-points">
      <div className="bullet-point-group">
        <div className="icon">
          <Phone />
        </div>

        <div className="text">555-555-5555</div>
      </div>

      <div className="bullet-point-group">
        <div className="icon">
            <Mail />
        </div>

        <div className="text">Asha@example.com</div>
      </div>

      <div className="bullet-point-group">
        <div className="icon">
            <MapPin />
        </div>

        <div className="text">ST Paul,MN</div>
      </div>
    </div>
  </div>
</div>
);
}

export default Contact;