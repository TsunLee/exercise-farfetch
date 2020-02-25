import React from "react";
import Itemdetails from "../components/itemdetails";
import News from "../components/news";
import Contact from "../components/contact";
import Footer from "../components/footer";
import "../components/collection";

const Details = () => {
  return (
    <div>
      <News />
      <Itemdetails />
      <Contact />
      <Footer />
    </div>
  );
};

export default Details;
