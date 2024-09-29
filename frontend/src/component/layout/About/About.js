import React from "react";
import "./aboutSection.css";
import { Button, Typography } from "@material-ui/core";
import { FaTiktok } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const About = () => {
  const visitInstagram = () => {
    window.location = "https://www.facebook.com/henry.nicole.12382";
  };
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div>
          <div>
            <img
              style={{ width: "12vmax", height: "12vmax", margin: "2vmax 0" }}
              src='/favicon.png'
              alt="blades empire"
            />
            {/* <Typography>blades empire</Typography> */}
            {/* <Button onClick={visitInstagram} color="primary">
              Visit Facebook
            </Button> */}
            <span>
              This is a Eommerce wesbite made by @blades empire.Where you can find your desired Premium Products.
            </span>
          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2">Contact Us to Whatsapp</Typography>
            <h2>+923233131222</h2>
            {/* <div className="d-flex">
              <a href="#" target="_blank">
                <FaFacebook color="blue" className="brandIcon" />
              </a>
              <a href="#" target="_blank">
                <FaInstagramSquare className="brandIcon" style={{ color: '#E1306C', fontSize: '40px' }} />
              </a>
              <a href="#" target="_blank">
                <FaYoutube color="red" className="brandIcon" />
              </a>
              <a href="#" target="_blank">
                <FaTiktok color="black" className="brandIcon" />
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
