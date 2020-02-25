import React, { useState, useEffect } from "react";
import News from "../components/news";
import Contact from "../components/contact";
import Footer from "../components/footer";
import "../components/collection";

const Details = () => {
  return (
    <div>
      <News />

      <Contact />
      <Footer />
    </div>
  );
};

export default Details;
