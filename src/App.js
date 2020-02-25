import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/header";
import Main from "./container/main";
import Women from "./container/women";
import Men from "./container/men";
import Kids from "./container/kids";
import Cart from "./container/cart";
import Details from "./container/details";
import Login from "./container/login";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Header />
        <Route exact path="/" component={Main} />
        <Route exact path="/women" component={Women} />
        <Route exact path="/men" component={Men} />
        <Route exact path="/kids" component={Kids} />
        <Route path="/cart" component={Cart} />
        <Route path="/login" component={Login} />
        <Route path="/menProduct/:id" component={Details} />
        <Route path="/womenProduct/:id" component={Details} />
        <Route path="/childrenProduct/:id" component={Details} />
      </Router>
    </div>
  );
};

export default App;
