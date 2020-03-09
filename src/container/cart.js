import React, { useContext } from "react";
import News from "../components/news";
import Contact from "../components/contact";
import Footer from "../components/footer";
import { CartContext } from "../components/CartContext";
import "../components/css/cart.css";
import "../components/collection";
import { Button } from "react-bootstrap";

const Bag = ({ title, image, description, price, id, deleteBag }) => {
  const RandomCountry = [
    "America",
    "Italy",
    "Austria",
    "Belgium",
    "Canada",
    "China",
    "Taiwan",
    "Egypt",
    "Japan"
  ];

  const Country = () =>
    RandomCountry[Math.floor(Math.random() * RandomCountry.length)];

  return (
    <div className="bag">
      <div className="bagItem">
        <div className="bagBar">
          <div className="country">Shipping from {Country()}</div>
          <div className="estimated">Estimated Shipping HK$0.00</div>
        </div>
        <div className="bagDetail">
          <div className="bagImage">
            <img src={image} />
          </div>
          <div className="bagInfo">
            <p>New Season</p>
            <h5>{title}</h5>
            <h6>{description}</h6>
          </div>
          <div className="bagPrice">
            <h4>HK${price}</h4>
          </div>
          <div className="Quantity">
            Quantity: 1
            <Button variant="dark" onClick={deleteBag}>
              Delete
            </Button>
          </div>
        </div>
      </div>
      <div className="summary">
        <h5>Summary</h5>
        <h6>Subtotal</h6>
        <h6>Shipping</h6>
        <div className="total">
          <h6>Total</h6>
        </div>
      </div>
    </div>
  );
};

const Details = () => {
  const [cart, setCart] = useContext(CartContext);
  const deleteBag = index => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };
  return (
    <div>
      <News />
      <div className="shopBag">
        <h5>SHOPPING BAG</h5>
      </div>
      <div>
        {cart.map(items => (
          <Bag
            title={items.title}
            key={`${items._id}${items.title}`}
            image={items.image}
            price={items.price}
            description={items.description}
            deleteBag={deleteBag}
          />
        ))}
      </div>
      <Contact />
      <Footer />
    </div>
  );
};

export default Details;
