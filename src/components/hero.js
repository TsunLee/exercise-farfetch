import React from "react";
import "./css/hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <div className="firstad">
        <div className="intro">
          <h3>
            Spring <br /> Starts Here
          </h3>
          <p>
            Get a head start on the season with pieces from
            Jacquems,Burberry,Alexander McQeen,Maison Margiela and more.
          </p>
        </div>
        <div className="first-pic">
          <img src="https://images.unsplash.com/photo-1479818155508-f9111dcd9641?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
        </div>
      </div>
      <div className="secondad">
        <div className="second-pic">
          <img src="https://images.unsplash.com/photo-1556905055-8f358a7a47b2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
        </div>
        <div className="third-pic">
          <img src="https://images.unsplash.com/photo-1529873597343-8dd8429aa148?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
