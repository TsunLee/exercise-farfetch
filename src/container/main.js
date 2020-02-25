import React from "react";
import Hero from "../components/hero";
import News from "../components/news";
import Showbar from "../components/showbar";
import LatestNews from "../components/latestnews";
import Shopintro from "../components/shopintro";
import Footer from "../components/footer";
import Contact from "../components/contact";

const Main = () => {
  return (
    <div>
      <News />
      <Hero />
      <LatestNews />
      <Showbar />
      <Shopintro /> <Contact />
      <Footer />
    </div>
  );
};

export default Main;
