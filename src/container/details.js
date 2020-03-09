import React, { useState, useEffect } from "react";
import Itemdetails from "../components/itemdetails";
import News from "../components/news";
import Contact from "../components/contact";
import Footer from "../components/footer";

const Details = () => {
  const check = document.location.pathname;
  const findData = check.split("/");
  const gender = findData[1];
  const id = findData[2];
  const [items, setItems] = useState([]);
  const getItem = async () => {
    const response = await fetch(
      `https://first-fake-data.herokuapp.com/${gender}/${id}`
    );

    const data = await response.json();
    setItems(data);
  };
  useEffect(() => {
    getItem();
  }, []);

  return (
    <div>
      <News />
      <Itemdetails
        gender={items.gender}
        key={items._id}
        id={items._id}
        image={items.image}
        title={items.title}
        description={items.description}
        price={items.price}
      />
      <Contact />
      <Footer />
    </div>
  );
};

export default Details;
