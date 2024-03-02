import React, { useState, useEffect } from "react";
import { IoSearchCircle } from "react-icons/io5";
import Nav from "./Nav";
import "./Home.css";

function Home() {
  const [counter, setCounter] = useState(0);
  const slides = [
    { image: "caption1.jpg", alt: "Image 1" },
    { image: "caption2.jpg", alt: "Image 2" },
    { image: "caption3.jpg", alt: "Image 3" },
    { image: "caption4.jpg", alt: "Image 4" },
  ];

  useEffect(() => {
    const interval = setInterval(goNext, 5000);
    return () => clearInterval(interval);
  }, [counter]);

  const goPrev = () => {
    setCounter((prevCounter) =>
      prevCounter === 0 ? slides.length - 1 : prevCounter - 1
    );
  };

  const goNext = () => {
    setCounter((prevCounter) =>
      prevCounter === slides.length - 1 ? 0 : prevCounter + 1
    );
  };

  return (
    <div className="main">
      <Nav />
      <div className="slideshow-container">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`slide fade ${index === counter ? "active" : ""}`}
          >
            <img src={slide.image} alt={slide.alt} />
          </div>
        ))}
        <div className="text-box">
          <h1>VokLagyo</h1>
          <p>Everything's good when it's about food</p>
          <div className="s1">
            <form className="search-bar">
              <input type="text" placeholder="Search anything" name="q" />
              <button type="submit">
                <IoSearchCircle />
              </button>
            </form>
          </div>
        </div>
        <a className="prev" onClick={goPrev}>
          &#10094;
        </a>
        <a className="next" onClick={goNext}>
          &#10095;
        </a>
      </div>
    </div>
  );
}

export default Home;
