import React from "react";
import {
  FaSquareXTwitter,
  FaInstagram,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa6";
import { MdEmail } from "react-icons/md"; // Import Email icon

const LinksSection = () => {
  return (
    <div className="links-section">
      <h2 className="link-title">Connect with Me</h2>
      <div className="social-icons">
        <a
          href="https://x.com/Abhishek_272003?t=lbk8oEqWQ4TOhw7tt0AYEQ&s=09"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon "
        >
          <FaSquareXTwitter />
        </a>
        <a
          href="https://www.instagram.com/abhishek_jha_7?igsh=MTh2ZG03ejV0MmNpMg=="
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon instagram"
        >
          <FaInstagram size={30} />
        </a>
        <a
          href="https://www.linkedin.com/in/abhishek-jha-35732230a/"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon linkedin"
        >
          <FaLinkedin size={30} />
        </a>
        <a
          href="https://github.com/Abhishek05012004"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon github"
        >
          <FaGithub size={30} />
        </a>
        <a
          href="mailto:abhishekjha2707@gmail.com" // Replace with your email
          className="social-icon email"
        >
          <MdEmail size={30} />
        </a>
      </div>
    </div>
  );
};

export default LinksSection;
