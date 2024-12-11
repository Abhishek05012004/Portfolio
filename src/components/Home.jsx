import React, { useEffect, useRef } from "react";
import pdf from "../pdf/Resume.pdf";
import hero from "./data/hero.json";
import Typed from "typed.js";

const Home = () => {
  const typeRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        "Hello and welcome!",
        "I'm Abhishek Jha",
        "Great to meet you.",
        "MERN stack is my strength.",
        "Eager to share my experience.",
      ],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
      showCursor: false,
    };

    const typed = new Typed(typeRef.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="container home" id="home">
      <div className="left" data-aos="fade-up-right" data-aos-duration="1000">
        <h1 ref={typeRef}></h1>
        <a href={pdf} download="Resume download" className="custom-button my-3">
          <span className="button-text">Download Resume</span>
        </a>
      </div>
      <div className="right">
        <div className="img" data-aos="fade-up-left" data-aos-duration="1000">
          <img src={`/assets/${hero.imgSrc}`} alt="abhishek" />
        </div>
      </div>
    </div>
  );
};

export default Home;
